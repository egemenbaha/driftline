function renderComparePage(slug) {
  const c = COMPARE[slug];
  if (!c) return;

  document.title = "Driftline vs " + c.title + " — Compare";
  const main = document.getElementById("compare-main");
  if (!main) return;

  const tableRows = c.rows.map((row, i) => {
    const tag = i === 0 ? "th" : "td";
    return `<tr>${row.map((cell, j) => `<${tag}${j === 2 ? ' style="color:var(--coral)"' : ""}>${cell}</${tag}>`).join("")}</tr>`;
  }).join("");

  main.innerHTML = `
    <a href="index.html" class="back-link">← Tüm karşılaştırmalar</a>
    <div class="tool-page-header">
      <h1>${c.icon} Driftline vs ${c.title}</h1>
      <p>${c.tagline}</p>
    </div>
    <div class="calc-card">
      <p style="line-height:1.7;opacity:0.85;margin:0 0 24px">${c.summary}</p>

      <div class="compare-cols">
        <div class="compare-col">
          <h3>${c.title} güçlü yanları</h3>
          <ul>${c.theirStrength.map((s) => `<li>${s}</li>`).join("")}</ul>
        </div>
        <div class="compare-col highlight">
          <h3>Driftline farkı</h3>
          <ul>${c.driftlineEdge.map((s) => `<li>${s}</li>`).join("")}</ul>
        </div>
      </div>

      <h3 style="font-family:'Fraunces',serif;margin:28px 0 14px">Özellik karşılaştırması</h3>
      <table class="zone-table compare-table">${tableRows}</table>

      <div class="compare-verdict">
        <h3>Sonuç</h3>
        <p>${c.verdict}</p>
      </div>

      <div style="margin-top:32px;text-align:center">
        <a href="../index.html#signup" class="btn-primary">Driftline'ı dene — 7 gün ücretsiz</a>
      </div>
    </div>
  `;
}