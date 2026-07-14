const SPORT_LABELS = {
  running: "Koşu",
  triathlon: "Triatlon",
  cycling: "Bisiklet",
  other: "Diğer",
};

const PLATFORM_LABELS = {
  garmin: "Garmin",
  strava: "Strava",
  whoop: "WHOOP",
  oura: "Oura",
  multiple: "Birden fazla",
  other: "Diğer",
};

function shell({ title, body, ctaLabel, ctaHref }) {
  return `<!DOCTYPE html>
<html lang="tr">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;background:#0B1220;color:#F0EDE4;font-family:Inter,Arial,sans-serif;padding:32px 16px;">
  <div style="max-width:560px;margin:0 auto;background:#111B2E;border:1px solid rgba(240,237,228,0.14);border-radius:18px;padding:32px;">
    <div style="font-family:Georgia,serif;font-style:italic;font-size:22px;font-weight:600;margin-bottom:18px;">driftline</div>
    <h1 style="margin:0 0 14px;font-size:24px;line-height:1.2;">${title}</h1>
    <div style="font-size:15px;line-height:1.65;opacity:0.88;">${body}</div>
    ${ctaHref ? `<p style="margin:28px 0 0;"><a href="${ctaHref}" style="display:inline-block;background:#FF5A46;color:#0B1220;text-decoration:none;font-weight:600;padding:12px 20px;border-radius:999px;">${ctaLabel}</a></p>` : ""}
    <p style="margin:28px 0 0;font-size:12px;opacity:0.55;">© 2026 driftline — dayanıklılık sporcuları için proaktif AI koç.</p>
  </div>
</body>
</html>`;
}

export function waitlistConfirmationEmail({ email, sport, platform }) {
  const sportLabel = SPORT_LABELS[sport] ?? sport;
  const platformLabel = PLATFORM_LABELS[platform] ?? platform;

  const title = "Waitlist'e katıldın";
  const body = `
    <p>Merhaba,</p>
    <p>Driftline waitlist kaydın alındı. 7 günlük ücretsiz deneme açıldığında <strong>${email}</strong> adresine haber vereceğiz.</p>
    <p style="margin:18px 0 0;padding:14px 16px;border-radius:12px;background:#0B1220;border:1px solid rgba(240,237,228,0.14);font-size:14px;">
      Branş: <strong>${sportLabel}</strong><br>
      Platform: <strong>${platformLabel}</strong>
    </p>
    <p style="margin-top:18px;">Koçun, Garmin / Strava / WHOOP / Oura verini okuyup sapmayı sen fark etmeden yakalayacak.</p>
  `;

  const text = `Driftline waitlist kaydın alındı.\n\nE-posta: ${email}\nBranş: ${sportLabel}\nPlatform: ${platformLabel}\n\n7 günlük deneme açıldığında haber vereceğiz.`;

  return {
    subject: "Driftline waitlist — kaydın alındı",
    html: shell({ title, body }),
    text,
  };
}

export function waitlistAdminEmail({ email, sport, platform, createdAt }) {
  const sportLabel = SPORT_LABELS[sport] ?? sport;
  const platformLabel = PLATFORM_LABELS[platform] ?? platform;

  const title = "Yeni waitlist kaydı";
  const body = `
    <p>Landing page'den yeni bir kayıt geldi.</p>
    <p style="margin:18px 0 0;padding:14px 16px;border-radius:12px;background:#0B1220;border:1px solid rgba(240,237,228,0.14);font-size:14px;">
      E-posta: <strong>${email}</strong><br>
      Branş: <strong>${sportLabel}</strong><br>
      Platform: <strong>${platformLabel}</strong><br>
      Tarih: <strong>${createdAt}</strong>
    </p>
  `;

  const text = `Yeni waitlist kaydı\n\nE-posta: ${email}\nBranş: ${sportLabel}\nPlatform: ${platformLabel}\nTarih: ${createdAt}`;

  return {
    subject: `Driftline waitlist — ${email}`,
    html: shell({ title, body }),
    text,
  };
}