# Driftline

Proaktif AI antrenman koçu landing page.

Garmin, Strava, WHOOP ve Oura verisini okuyarak antrenman sapmasını sporcu fark etmeden yakalar; planı günceller ve WhatsApp üzerinden bildirir.

## Canlı URL'ler

| Ortam | URL |
|-------|-----|
| **Production (Vercel)** | https://driftlinescience.com |
| **Vercel fallback** | https://driftline-lovat.vercel.app |
| **GitHub Pages** | https://egemenbaha.github.io/driftline/ |

**Vercel hesabı:** `barutcuegemende-7462`  
**Team:** `driftline-app` (KlarMentor'dan tamamen ayrı — CLI'da kişisel hesap scope'u desteklenmiyor)  
**Dashboard:** [vercel.com/driftline-app/driftline](https://vercel.com/driftline-app/driftline)

Kişisel hesaba taşımak için: Vercel Dashboard → Project Settings → Transfer Project → Personal Account.

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

`driftline.com` Resend'de eklendi (physik567@gmail.com hesabı). Cloudflare DNS'e şu kayıtları ekle:

| Tip | Ad | Değer |
|-----|-----|-------|
| TXT | `resend._domainkey` | `p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDC0fM9Ys3ROw4Dlt10MKZHqS/2mkbptrK7gpChJQp1oXGhjpjs3ha7wG77sx674m7BEroZliHttn23PhN6otwx0XEHpmdJIzeifAbTBWxbDDEjHTCWsx0BSjhMzYUEinwjZJqxyY8/ZYaysAUONp+3QsaPOF/KcgarR5PW7dVP2wIDAQAB` |
| MX | `send` | `feedback-smtp.eu-west-1.amazonses.com` (priority 10) |
| TXT | `send` | `v=spf1 include:amazonses.com ~all` |

Sonra [resend.com/domains](https://resend.com/domains) → Verify.

```bash
curl -X POST https://driftlinescience.com/api/waitlist \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","sport":"running","platform":"garmin","goal":"endurance","consent":true}'
```

## Yol haritası

- [x] Waitlist / kayıt formu
- [x] Mobil hamburger menü
- [ ] SEO (meta, OG, sitemap)
- [x] Yasal sayfalar (gizlilik, şartlar)
- [x] Ücretsiz Araçlar (13 hesaplayıcı)
- [x] Training Goals (6 hedef sayfası)
- [x] Compare (11 rakip karşılaştırması)
- [ ] Analytics

## Lisans

Tüm hakları saklıdır — © 2026 driftline