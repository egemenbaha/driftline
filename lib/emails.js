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

const GOAL_LABELS = {
  "weight-loss": "Weight Loss",
  endurance: "Endurance",
  "race-preparation": "Race Preparation",
  "injury-recovery": "Injury Recovery",
  "body-recomposition": "Body Recomposition",
  "beginner-fitness": "Beginner Fitness",
};

const SITE_URL = "https://driftline-lovat.vercel.app";

function shell({ eyebrow, title, bodyHtml, ctaLabel, ctaHref, footerNote }) {
  return `<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <meta name="color-scheme" content="dark">
  <meta name="supported-color-schemes" content="dark">
  <title>${title}</title>
</head>
<body style="margin:0;padding:0;background:#0B1220;color:#F0EDE4;-webkit-font-smoothing:antialiased;">
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;">${title}</div>
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#0B1220;padding:40px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:600px;">
          <tr>
            <td style="padding:0 0 24px;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                <tr>
                  <td style="font-family:Georgia,'Times New Roman',serif;font-style:italic;font-size:24px;font-weight:600;color:#F0EDE4;letter-spacing:0.01em;">
                    <span style="display:inline-block;width:10px;height:10px;border-radius:50%;background:#FF5A46;margin-right:10px;vertical-align:middle;"></span>driftline
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="background:#111B2E;border:1px solid rgba(240,237,228,0.14);border-radius:22px;overflow:hidden;">
              <div style="height:3px;background:linear-gradient(90deg,#8FA98C 0%,#FF5A46 55%,#5B6472 100%);"></div>
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                <tr>
                  <td style="padding:34px 32px 10px;">
                    <div style="font-family:Consolas,'Courier New',monospace;font-size:11px;letter-spacing:0.14em;text-transform:uppercase;color:#FF5A46;margin:0 0 16px;">
                      <span style="display:inline-block;width:18px;height:1px;background:#FF5A46;vertical-align:middle;margin-right:10px;"></span>${eyebrow}
                    </div>
                    <h1 style="margin:0 0 18px;font-family:Georgia,'Times New Roman',serif;font-size:30px;line-height:1.12;font-weight:600;color:#F0EDE4;">${title}</h1>
                  </td>
                </tr>
                <tr>
                  <td style="padding:0 32px 28px;font-family:Inter,Arial,Helvetica,sans-serif;font-size:16px;line-height:1.65;color:rgba(240,237,228,0.88);">
                    ${bodyHtml}
                  </td>
                </tr>
                ${ctaHref ? `<tr><td style="padding:0 32px 34px;"><a href="${ctaHref}" style="display:inline-block;background:#FF5A46;color:#0B1220;text-decoration:none;font-family:Inter,Arial,Helvetica,sans-serif;font-weight:600;font-size:14px;padding:13px 22px;border-radius:999px;">${ctaLabel}</a></td></tr>` : ""}
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding:24px 8px 0;font-family:Consolas,'Courier New',monospace;font-size:11px;line-height:1.6;color:rgba(240,237,228,0.45);text-align:center;">
              ${footerNote || "© 2026 driftline — dayanıklılık sporcuları için proaktif AI koç."}
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

function chip(label) {
  return `<span style="display:inline-block;margin:0 8px 8px 0;padding:6px 12px;border:1px solid rgba(240,237,228,0.14);border-radius:999px;font-family:Consolas,'Courier New',monospace;font-size:12px;color:rgba(240,237,228,0.78);"><span style="display:inline-block;width:6px;height:6px;border-radius:50%;background:#8FA98C;margin-right:8px;vertical-align:middle;"></span>${label}</span>`;
}

function infoCard(rows) {
  const lines = rows
    .map(
      ([label, value]) =>
        `<tr><td style="padding:8px 0;font-family:Consolas,'Courier New',monospace;font-size:11px;letter-spacing:0.08em;text-transform:uppercase;color:rgba(240,237,228,0.45);width:110px;vertical-align:top;">${label}</td><td style="padding:8px 0;font-family:Inter,Arial,Helvetica,sans-serif;font-size:15px;color:#F0EDE4;font-weight:600;">${value}</td></tr>`,
    )
    .join("");

  return `<table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin:22px 0 0;background:#0B1220;border:1px solid rgba(240,237,228,0.14);border-radius:16px;"><tr><td style="padding:18px 20px;"><table role="presentation" width="100%" cellspacing="0" cellpadding="0">${lines}</table></td></tr></table>`;
}

function coachBubble(text, time, mine = false) {
  const bg = mine ? "#FF5A46" : "#2A3345";
  const color = mine ? "#0B1220" : "#F0EDE4";
  const radius = mine ? "14px 14px 4px 14px" : "14px 14px 14px 4px";
  const align = mine ? "right" : "left";

  return `<table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin-top:12px;"><tr><td align="${align}"><div style="display:inline-block;max-width:88%;background:${bg};color:${color};border-radius:${radius};padding:12px 14px;font-family:Inter,Arial,Helvetica,sans-serif;font-size:14px;line-height:1.5;text-align:left;">${text}<div style="font-family:Consolas,'Courier New',monospace;font-size:10px;opacity:0.6;margin-top:6px;">${time}</div></div></td></tr></table>`;
}

export function waitlistConfirmationEmail({ email, sport, platform, goal }) {
  const sportLabel = SPORT_LABELS[sport] ?? sport;
  const platformLabel = PLATFORM_LABELS[platform] ?? platform;
  const goalLabel = GOAL_LABELS[goal] ?? goal;

  const bodyHtml = `
    <p style="margin:0 0 14px;">Merhaba,</p>
    <p style="margin:0 0 14px;">Waitlist kaydın alındı. <strong style="color:#F0EDE4;">7 gün ücretsiz</strong> deneme açıldığında <strong style="color:#F0EDE4;">${email}</strong> adresine ilk haber vereceğiz.</p>
    <div>${chip("7 gün ücretsiz")}${chip("Kart yok")}${chip("WhatsApp koçluk")}</div>
    ${infoCard([
      ["E-posta", email],
      ["Branş", sportLabel],
      ["Platform", platformLabel],
      ["Hedef", goalLabel],
    ])}
    <div style="margin-top:24px;padding:18px 18px 8px;background:#0B1220;border:1px solid rgba(240,237,228,0.14);border-radius:18px;">
      <div style="font-family:Consolas,'Courier New',monospace;font-size:11px;opacity:0.55;margin-bottom:10px;">driftline · WhatsApp</div>
      ${coachBubble("Kaydın alındı. Verin değiştiğinde planı senden önce güncelleyeceğim — hazır olduğunda buradan yazarım.", "Şimdi")}
      ${coachBubble("Mantıklı, bekliyorum.", "Sen", true)}
    </div>
  `;

  const text = `Driftline waitlist kaydın alındı.\n\nE-posta: ${email}\nBranş: ${sportLabel}\nPlatform: ${platformLabel}\nHedef: ${goalLabel}\n\n7 günlük deneme açıldığında haber vereceğiz.\n${SITE_URL}`;

  return {
    subject: "Driftline — waitlist kaydın alındı",
    html: shell({
      eyebrow: "Erken erişim",
      title: "Sıradasın.",
      bodyHtml,
      ctaLabel: "Siteye dön →",
      ctaHref: SITE_URL,
    }),
    text,
  };
}

export function waitlistAdminEmail({ email, sport, platform, goal, createdAt }) {
  const sportLabel = SPORT_LABELS[sport] ?? sport;
  const platformLabel = PLATFORM_LABELS[platform] ?? platform;
  const goalLabel = GOAL_LABELS[goal] ?? goal;
  const when = new Date(createdAt).toLocaleString("tr-TR", { timeZone: "Europe/Berlin" });

  const bodyHtml = `
    <p style="margin:0 0 14px;">Landing page'den yeni bir waitlist kaydı geldi.</p>
    ${infoCard([
      ["E-posta", email],
      ["Branş", sportLabel],
      ["Platform", platformLabel],
      ["Hedef", goalLabel],
      ["Tarih", when],
    ])}
  `;

  const text = `Yeni waitlist kaydı\n\nE-posta: ${email}\nBranş: ${sportLabel}\nPlatform: ${platformLabel}\nHedef: ${goalLabel}\nTarih: ${when}`;

  return {
    subject: `Yeni waitlist — ${email}`,
    html: shell({
      eyebrow: "Waitlist",
      title: "Yeni kayıt.",
      bodyHtml,
      ctaLabel: "Waitlist verisini aç →",
      ctaHref: `${SITE_URL}/#signup`,
      footerNote: "Admin bildirimi · driftline waitlist",
    }),
    text,
  };
}