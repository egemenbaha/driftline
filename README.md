# Driftline

Proaktif AI antrenman koçu landing page.

Garmin, Strava, WHOOP ve Oura verisini okuyarak antrenman sapmasını sporcu fark etmeden yakalar; planı günceller ve WhatsApp üzerinden bildirir.

## Canlı URL'ler

| Ortam | URL |
|-------|-----|
| **Production (Vercel)** | https://driftline-five.vercel.app |
| **Subdomain** | https://driftline.klarmentor.com |
| **GitHub Pages** | https://egemenbaha.github.io/driftline/ |

`main` branch'e her push otomatik olarak Vercel'e deploy edilir.

## Geliştirme

Statik HTML — bağımlılık yok.

```bash
# Yerel önizleme
python3 -m http.server 8080
# http://localhost:8080
```

## driftline.com domain

`driftline.com` şu an başka bir Vercel hesabında kayıtlı; `klar-mentor` team'inden erişim yok. Domain'i bu projeye bağlamak için:

1. Domain'i `klar-mentor` Vercel hesabına transfer et, **veya**
2. Cloudflare DNS'te şu kayıtları ayarla:
   - `A` → `76.76.21.21`
   - `CNAME` `www` → `cname.vercel-dns.com`
3. Vercel dashboard → driftline → Settings → Domains → `driftline.com` ekle

## Yol haritası

- [ ] Waitlist / kayıt formu
- [ ] Mobil hamburger menü
- [ ] SEO (meta, OG, sitemap)
- [ ] Yasal sayfalar (gizlilik, şartlar, KVKK)
- [ ] Analytics

## Lisans

Tüm hakları saklıdır — © 2026 driftline