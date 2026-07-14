import { put, list } from "@vercel/blob";
import { sendEmail } from "../lib/mail.js";
import { waitlistAdminEmail, waitlistConfirmationEmail } from "../lib/emails.js";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const SPORTS = new Set(["running", "triathlon", "cycling", "other"]);
const PLATFORMS = new Set(["garmin", "strava", "whoop", "oura", "multiple", "other"]);

function json(res, status, body) {
  res.status(status).setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(body));
}

async function notifyWaitlist(entry) {
  const notifyTo = process.env.WAITLIST_NOTIFY_EMAIL;
  const results = [];

  const confirmation = waitlistConfirmationEmail(entry);
  results.push(
    await sendEmail({
      to: entry.email,
      subject: confirmation.subject,
      html: confirmation.html,
      text: confirmation.text,
    }),
  );

  if (notifyTo) {
    const admin = waitlistAdminEmail(entry);
    results.push(
      await sendEmail({
        to: notifyTo,
        subject: admin.subject,
        html: admin.html,
        text: admin.text,
      }),
    );
  }

  return results;
}

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.status(204).end();
    return;
  }

  if (req.method !== "POST") {
    json(res, 405, { ok: false, message: "Method not allowed" });
    return;
  }

  let body = req.body;
  if (typeof body === "string") {
    try {
      body = JSON.parse(body);
    } catch {
      json(res, 400, { ok: false, message: "Geçersiz istek" });
      return;
    }
  }

  const email = String(body?.email ?? "").trim().toLowerCase();
  const sport = String(body?.sport ?? "").trim();
  const platform = String(body?.platform ?? "").trim();
  const consent = Boolean(body?.consent);
  const honeypot = String(body?.website ?? "").trim();

  if (honeypot) {
    json(res, 200, { ok: true, message: "Kaydın alındı." });
    return;
  }

  if (!email || !EMAIL_RE.test(email)) {
    json(res, 400, { ok: false, message: "Geçerli bir e-posta adresi gir." });
    return;
  }

  if (!SPORTS.has(sport)) {
    json(res, 400, { ok: false, message: "Spor branşını seç." });
    return;
  }

  if (!PLATFORMS.has(platform)) {
    json(res, 400, { ok: false, message: "Kullandığın platformu seç." });
    return;
  }

  if (!consent) {
    json(res, 400, { ok: false, message: "Devam etmek için KVKK onayı gerekli." });
    return;
  }

  const existing = await list({ prefix: "waitlist/", limit: 1000, access: "private" });
  const duplicate = existing.blobs.some((blob) => blob.pathname === `waitlist/${email}.json`);
  if (duplicate) {
    json(res, 409, { ok: false, message: "Bu e-posta zaten waitlist'te." });
    return;
  }

  const entry = {
    email,
    sport,
    platform,
    consent,
    source: "landing",
    createdAt: new Date().toISOString(),
  };

  await put(`waitlist/${email}.json`, JSON.stringify(entry), {
    access: "private",
    addRandomSuffix: false,
    contentType: "application/json",
  });

  const mailResults = await notifyWaitlist(entry).catch((err) => [{ ok: false, error: err.message }]);
  const mailFailed = mailResults.some((result) => result && result.ok === false && !result.skipped);

  json(res, 200, {
    ok: true,
    message: "Kaydın alındı. 7 günlük denemen için sıradasın — açıldığında ilk seni bilgilendireceğiz.",
    mailSent: !mailFailed,
  });
}