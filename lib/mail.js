import { Resend } from "resend";

let client;

function getClient() {
  const key = process.env.RESEND_API_KEY;
  if (!key) return null;
  if (!client) client = new Resend(key);
  return client;
}

export async function sendEmail({ to, subject, html, text }) {
  const resend = getClient();
  const from = process.env.MAIL_FROM;

  if (!resend || !from) {
    return { ok: false, skipped: true, reason: "missing_config" };
  }

  const result = await resend.emails.send({
    from,
    to,
    subject,
    html,
    text,
  });

  if (result.error) {
    return { ok: false, error: result.error.message };
  }

  return { ok: true, id: result.data?.id };
}