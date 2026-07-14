# Driftline

Proaktif AI antrenman koçu landing page.

Garmin, Strava, WHOOP ve Oura verisini okuyarak antrenman sapmasını sporcu fark etmeden yakalar; planı günceller ve WhatsApp üzerinden bildirir.

## Canlı URL'ler

| Ortam | URL |
|-------|-----|
| **Production (Vercel)** | https://driftline-henna.vercel.app |
| **GitHub Pages** | https://egemenbaha.github.io/driftline/ |

Vercel team: `driftline-app` (KlarMentor'dan bağımsız).  
`main` branch'e her push otomatik olarak Vercel'e deploy edilir.

## Geliştirme

Statik HTML — bağımlılık yok.

```bash
# Yerel önizleme
python3 -m http.server 8080
# http://localhost:8080
```

## driftline.com domain

`driftline.com` başka bir Vercel context'inde kayıtlı. `driftline-app` team'ine bağlamak için:

1. Eski Vercel hesabından domain ownership'i kaldır veya `vercel domains move driftline.com driftline-app` ile transfer et
2. Cloudflare DNS:
   - `A` → `76.76.21.21`
   - `CNAME` `www` → `cname.vercel-dns.com`
3. Vercel → driftline-app/driftline → Domains → `driftline.com` ekle

## Yol haritası

- [ ] Waitlist / kayıt formu
- [ ] Mobil hamburger menü
- [ ] SEO (meta, OG, sitemap)
- [ ] Yasal sayfalar (gizlilik, şartlar, KVKK)
- [ ] Analytics

## Lisans

Tüm hakları saklıdır — © 2026 driftline