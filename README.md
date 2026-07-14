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

## Waitlist API

Form `POST /api/waitlist` endpoint'ine gönderilir.

- Kayıtlar: Vercel Blob (`waitlist/{email}.json`)
- E-posta: Resend ile kullanıcıya onay + admin'e bildirim

### Resend env (Vercel)

| Değişken | Örnek |
|----------|-------|
| `RESEND_API_KEY` | `re_...` |
| `MAIL_FROM` | `Driftline <hello@driftline.com>` |
| `WAITLIST_NOTIFY_EMAIL` | `you@example.com` |

`driftline.com` Resend'de doğrulanmalı. [resend.com/domains](https://resend.com/domains) → Add domain → Cloudflare DNS kayıtlarını ekle → Verify.

```bash
curl -X POST https://driftline-henna.vercel.app/api/waitlist \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","sport":"running","platform":"garmin","consent":true}'
```

## Yol haritası

- [x] Waitlist / kayıt formu
- [ ] Mobil hamburger menü
- [ ] SEO (meta, OG, sitemap)
- [ ] Yasal sayfalar (gizlilik, şartlar, KVKK)
- [ ] Analytics

## Lisans

Tüm hakları saklıdır — © 2026 driftline