const GOALS = {
  "weight-loss": {
    title: "Weight Loss",
    icon: "🔥",
    summary: "Kalori açığında antrenman yaparken en büyük risk aşırı yüklenmedir. Driftline HRV ve tempo kaymasını izleyerek hacmi otomatik ayarlar.",
    focus: ["Zon 2 ağırlıklı hacim", "Haftalık güvenli kilo kaybı takibi", "Toparlanma öncelikli günler", "Beslenme–antrenman dengesi"],
    signals: ["HRV 3+ gün düşük → hacim %20 azalır", "Kolay tempo kayması → yoğunluk düşer", "Uyku bozulması → interval iptal"],
    tools: [
      { href: "../tools/race-weight.html", label: "Race Weight" },
      { href: "../tools/nutrition.html", label: "Nutrition Planner" },
      { href: "../tools/volume.html", label: "Volume Planner" },
    ],
  },
  endurance: {
    title: "Endurance",
    icon: "💪",
    summary: "Aerobik kapasite uzun vadede inşa edilir. Driftline haftalık hacmi kademeli artırır ve aşırı yüklenmeyi yakalamadan önce frenler.",
    focus: ["Zon 2 taban inşası", "Uzun ride / koşu progresyonu", "Haftalık TSS dengesi", "Toparlanma günleri"],
    signals: ["Akut/kronik yük oranı > 1.3 → hacim geri çekilir", "Tempo drift → kolay günler eklenir", "HRV trendi → uzun antrenman zamanlaması"],
    tools: [
      { href: "../tools/running-zones.html", label: "Running Zones" },
      { href: "../tools/volume.html", label: "Volume Planner" },
      { href: "../tools/tss.html", label: "TSS Calculator" },
    ],
  },
  "race-preparation": {
    title: "Race Preparation",
    icon: "🏁",
    summary: "Yarış tarihine geri sayım — build, peak ve taper fazları verine göre otomatik ayarlanır. Brick ve tempo blokları doğru zamanda gelir.",
    focus: ["Periodizasyon (build → peak → taper)", "Yarış temposu simülasyonları", "Brick antrenmanları", "Yarış haftası hacim düşüşü"],
    signals: ["Taper haftasında HRV düşerse → ekstra dinlenme", "Yarış 14 gün kala → son ağır seans", "Yüklenme spike → seans erteleme"],
    tools: [
      { href: "../tools/race-time.html", label: "Race Time Predictor" },
      { href: "../tools/race-splits.html", label: "Race Split Calculator" },
      { href: "../tools/brick.html", label: "Brick Workouts" },
      { href: "../tools/checklist.html", label: "Race Day Checklist" },
    ],
  },
  "injury-recovery": {
    title: "Injury Recovery",
    icon: "🩹",
    summary: "Sakatlık sonrası dönüşte sabır kritik. Driftline toparlanma sinyallerini önceliklendirir ve hacmi kademeli, güvenli artırır.",
    focus: ["Düşük yoğunluklu dönüş fazı", "Hacim %10 kuralı (haftalık artış)", "Çapraz antrenman alternatifleri", "Ağrı / yorgunluk geri bildirimi"],
    signals: ["HRV baseline altı → ekstra dinlenme günü", "Uyku kalitesi düşük → yoğunluk iptal", "Yüklenme hızlı artıyorsa → fren"],
    tools: [
      { href: "../tools/running-zones.html", label: "Running Zones" },
      { href: "../tools/volume.html", label: "Volume Planner" },
    ],
  },
  "body-recomposition": {
    title: "Body Recomposition",
    icon: "⚡",
    summary: "Kas koruyarak yağ yakmak — yeterli protein, zon 2 hacim ve kontrollü yoğunluk. Driftline üçünü tek planda dengeler.",
    focus: ["Zon 2 + haftalık 1–2 tempo", "Güç / direnç koruma", "Beslenme timing", "Uyku ve toparlanma takibi"],
    signals: ["Tempo kayması → kolay hafta", "HRV düşüşü → güç seansı hafifletme", "Yüksek akut yük → hacim azaltma"],
    tools: [
      { href: "../tools/race-weight.html", label: "Race Weight" },
      { href: "../tools/nutrition.html", label: "Nutrition Planner" },
      { href: "../tools/ftp.html", label: "FTP Calculator" },
    ],
  },
  "beginner-fitness": {
    title: "Beginner Fitness",
    icon: "🌱",
    summary: "Yeni başlayanlar için en önemli şey tutarlılık ve aşırı yüklenmeden kaçınmak. Driftline konservatif bir başlangıç planı yazar ve her hafta kademeli ilerler.",
    focus: ["Koş–yürü / kısa ride progresyonu", "Haftada max %10 hacim artışı", "2–3 antrenman / hafta başlangıç", "Alışkanlık ve tutarlılık"],
    signals: ["İlk 4 hafta düşük yoğunluk kilidi", "HRV veya uyku bozulması → ekstra gün off", "3 hafta tutarlılık → hacim artışı"],
    tools: [
      { href: "../tools/pace-converter.html", label: "Pace Converter" },
      { href: "../tools/running-zones.html", label: "Running Zones" },
      { href: "../tools/volume.html", label: "Volume Planner" },
    ],
  },
};