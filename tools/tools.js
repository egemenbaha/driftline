function parseTime(str) {
  if (!str || !str.trim()) return null;
  const parts = str.trim().split(":").map(Number);
  if (parts.some(isNaN)) return null;
  if (parts.length === 3) return parts[0] * 3600 + parts[1] * 60 + parts[2];
  if (parts.length === 2) return parts[0] * 60 + parts[1];
  if (parts.length === 1) return parts[0];
  return null;
}

function formatTime(sec, opts = {}) {
  if (sec == null || isNaN(sec)) return "—";
  sec = Math.round(sec);
  const h = Math.floor(sec / 3600);
  const m = Math.floor((sec % 3600) / 60);
  const s = sec % 60;
  if (h > 0 || opts.alwaysHours) {
    return `${h}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  }
  return `${m}:${String(s).padStart(2, "0")}`;
}

function formatPace(secPerKm) {
  if (!secPerKm || secPerKm <= 0) return "—";
  return formatTime(secPerKm) + " /km";
}

function riegelPredict(t1, d1, d2, exp = 1.06) {
  return t1 * Math.pow(d2 / d1, exp);
}

function swimCSS(t400, t200) {
  return (t400 - t200) / 2;
}

function ftpFromTest(watts, minutes) {
  if (minutes === 20) return watts * 0.95;
  if (minutes === 8) return watts * 0.9;
  return watts;
}

function runningZonesFromThreshold(secPerKm) {
  return [
    { zone: "Z1", name: "Kolay", pct: [1.2, 1.35], use: "Toparlanma" },
    { zone: "Z2", name: "Aerobik", pct: [1.1, 1.2], use: "Uzun koşu" },
    { zone: "Z3", name: "Tempo", pct: [1.0, 1.1], use: "Maraton temposu" },
    { zone: "Z4", name: "Eşik", pct: [0.95, 1.0], use: "Laktat eşiği" },
    { zone: "Z5", name: "VO₂max", pct: [0.85, 0.95], use: "Interval" },
  ].map((z) => ({
    ...z,
    slow: formatPace(secPerKm * z.pct[1]),
    fast: formatPace(secPerKm * z.pct[0]),
  }));
}

function tssCalc(durationMin, ftp, npOrAvg) {
  const IF = npOrAvg / ftp;
  return (durationMin * 60 * npOrAvg * IF) / (ftp * 3600) * 100;
}

function sweatRate(preKg, postKg, fluidL, durationMin) {
  const lossKg = preKg - postKg - fluidL;
  const hours = durationMin / 60;
  return lossKg / hours;
}

function raceWeight(heightCm, sex) {
  const h = heightCm / 100;
  const base = sex === "f" ? 21 : 23;
  const low = base - 2;
  const high = base + 1;
  return {
    min: +(low * h * h).toFixed(1),
    target: +(base * h * h).toFixed(1),
    max: +(high * h * h).toFixed(1),
  };
}

function nutritionPlan(hours, intensity) {
  const carbsPerHour = intensity === "high" ? 90 : intensity === "med" ? 60 : 45;
  const total = Math.round(hours * carbsPerHour);
  const fluid = Math.round(hours * 600);
  return { carbsPerHour, total, fluid };
}

function renderFooter() {
  return "";
}