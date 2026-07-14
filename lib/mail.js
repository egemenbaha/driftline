import { Resend } from "resend";

let client;

function getClient() {
  const key = process.env.RESEND_API_KEY;
  if (!key) return null;
  if (!client) client = new Resend(key);
  return client;
}

function shouldTryFallback(error = "") {
  const lower = String(error).toLowerCase();
  return (
    lower.includes("not verified") ||
    lower.includes("domain") ||
    lower.includes("validation_error") ||
    lower.includes("from")
  );
}

async function attemptSend(resend, from, { to, subject, html, text }) {
  const result = await resend.emails.send({ from, to, subject, html, text });
  if (result.error) {
    return { ok: false, error: result.error.message, from };
  }
  return { ok: true, id: result.data?.id, from };
}

export async function sendEmail({ to, subject, html, text }) {
  const resend = getClient();
  const primaryFrom = process.env.MAIL_FROM;
  const fallbackFrom = process.env.MAIL_FROM_FALLBACK || "Driftline <onboarding@resend.dev>";

  if (!resend || !primaryFrom) {
    return { ok: false, skipped: true, reason: "missing_config" };
  }

  let result = await attemptSend(resend, primaryFrom, { to, subject, html, text });

  if (!result.ok && fallbackFrom !== primaryFrom && shouldTryFallback(result.error)) {
    result = await attemptSend(resend, fallbackFrom, { to, subject, html, text });
    if (result.ok) {
      result.usedFallback = true;
    }
  }

  return result;
}