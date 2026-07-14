function renderGoalPage(slug) {
  const g = GOALS[slug];
  if (!g) return;

  document.title = g.title + " — Driftline Training Goals";
  const main = document.getElementById("goal-main");
  if (!main) return;

  const toolsHtml = g.tools.map((t) =>
    `<a href="${t.href}" class="tool-card" style="padding:16px"><h3 style="font-size:15px;margin:0">${t.label}</h3></a>`
  ).join("");

  main.innerHTML = `
    <a href="index.html" class="back-link">← Tüm hedefler</a>
    <div class="tool-page-header">
      <h1>${g.icon} ${g.title}</h1>
      <p>${g.summary}</p>
    </div>
    <div class="calc-card">
      <h3 style="font-family:'Fraunces',serif;margin:0 0 14px">Odak alanları</h3>
      <ul style="margin:0;padding-left:20px;line-height:1.8;opacity:0.85">
        ${g.focus.map((f) => `<li>${f}</li>`).join("")}
      </ul>
      <h3 style="font-family:'Fraunces',serif;margin:28px 0 14px">Driftline nasıl müdahale eder</h3>
      <ul style="margin:0;padding-left:20px;line-height:1.8;opacity:0.85">
        ${g.signals.map((s) => `<li>${s}</li>`).join("")}
      </ul>
      <h3 style="font-family:'Fraunces',serif;margin:28px 0 14px">İlgili araçlar</h3>
      <div class="tools-grid" style="margin-top:12px">${toolsHtml}</div>
      <div style="margin-top:32px;text-align:center">
        <a href="../index.html#signup" class="btn-primary">Bu hedefle kayıt ol</a>
      </div>
    </div>
  `;
}