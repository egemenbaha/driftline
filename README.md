# ⚠️ Legacy static archive

**This repository is not the production source of Driftline.**

It is kept only as a **historical / static prototype** (early HTML landing pages, tools, and compare content). Do not treat pushes here as production deploys. Do not use this repo for day-to-day product development.

| What | Where |
|------|--------|
| **Active product (production)** | https://driftlinescience.com |
| **Active source repository** | [egemenbaha/driftline-science](https://github.com/egemenbaha/driftline-science) |
| **Active Vercel project** | `driftline-app/driftline-science` |

GitHub Pages for this repo is disabled. The legacy Vercel project `driftline-app/driftline` is disconnected from Git and is not production.

---

# Driftline (archive)

Proaktif AI antrenman koçu — early static landing page prototype.

Garmin, Strava, WHOOP ve Oura verisini okuyarak antrenman sapmasını sporcu fark etmeden yakalar; planı günceller ve WhatsApp üzerinden bildirir. *(Product vision — implemented on the active Next.js app, not in this static archive.)*

## Local preview (archive only)

Statik HTML — bağımlılık yok. Bu yalnızca arşiv kodunu yerelde açmak içindir; production deploy yolu değildir.

```bash
python3 -m http.server 8080
# http://localhost:8080
```

## Historical notes (not current runbooks)

The sections below are **historical documentation** from the early static/Vercel prototype era. They are **not** instructions for operating production today.

### Historical: waitlist / email (superseded)

Production waitlist and email now run on **`driftline-app/driftline-science`**. Environment variables and DNS for mail live on that project / the team domain zone — not via this repository.

### Historical: old domain / deploy ideas (do not follow)

Earlier notes about transferring `driftline.com`, Cloudflare A/CNAME recipes for this static project, “push `main` → production deploy” on the legacy Vercel project, and project transfer to a personal account are **obsolete**. Production is Git-based on `egemenbaha/driftline-science` → Vercel `driftline-science`.

## Yol haritası (archive snapshot)

- [x] Waitlist / kayıt formu *(prototype era)*
- [x] Mobil hamburger menü
- [ ] SEO (meta, OG, sitemap)
- [x] Yasal sayfalar (gizlilik, şartlar)
- [x] Ücretsiz Araçlar (13 hesaplayıcı)
- [x] Training Goals (6 hedef sayfası)
- [x] Compare (12 rakip karşılaştırması, AthleteData dahil)
- [ ] Analytics

Active product roadmap lives in the science repository / product process — not here.

## Lisans

Tüm hakları saklıdır — © 2026 driftline
