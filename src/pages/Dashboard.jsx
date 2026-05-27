import { useState, useEffect } from "react";
import "./DashboardLayout.css";

const moonPhases = ["🌑", "🌒", "🌓", "🌔", "🌕", "🌖", "🌗", "🌘"];

const sleepData = [
  { day: "Sen", hours: 7.5, quality: 85, deep: 2.1, rem: 1.8 },
  { day: "Sel", hours: 6.2, quality: 68, deep: 1.5, rem: 1.3 },
  { day: "Rab", hours: 8.1, quality: 92, deep: 2.5, rem: 2.1 },
  { day: "Kam", hours: 5.8, quality: 60, deep: 1.2, rem: 1.0 },
  { day: "Jum", hours: 7.9, quality: 88, deep: 2.3, rem: 1.9 },
  { day: "Sab", hours: 8.5, quality: 95, deep: 2.8, rem: 2.3 },
  { day: "Min", hours: 7.2, quality: 80, deep: 2.0, rem: 1.7 },
];

const tips = [
  { icon: "🌙", title: "Konsistensi Jadwal", desc: "Tidur dan bangun di waktu yang sama setiap hari untuk ritme sirkadian optimal." },
  { icon: "📱", title: "Batasi Layar", desc: "Hindari perangkat elektronik 1 jam sebelum tidur untuk produksi melatonin." },
  { icon: "🌡️", title: "Suhu Kamar", desc: "Suhu 18-22°C adalah kondisi ideal untuk tidur berkualitas." },
  { icon: "☕", title: "Kafein", desc: "Hindari kafein setelah pukul 14.00 untuk kualitas tidur malam yang baik." },
];

export default function Dashboard() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [moonIndex, setMoonIndex] = useState(4);
  const [animateCards, setAnimateCards] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    setAnimateCards(true);
    return () => clearInterval(timer);
  }, []);

  const avgQuality = Math.round(sleepData.reduce((a, b) => a + b.quality, 0) / sleepData.length);
  const avgHours = (sleepData.reduce((a, b) => a + b.hours, 0) / sleepData.length).toFixed(1);
  const bestDay = sleepData.reduce((a, b) => (a.quality > b.quality ? a : b));

  const formatTime = (date) =>
    date.toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit", second: "2-digit" });
  const formatDate = (date) =>
    date.toLocaleDateString("id-ID", { weekday: "long", day: "numeric", month: "long", year: "numeric" });

  const maxHours = Math.max(...sleepData.map((d) => d.hours));

  return (
    <div className="page-container">
      {/* Hero Clock Section */}
      <div className={`hero-clock ${animateCards ? "animate-in" : ""}`}>
        <div className="moon-display">
          <span className="moon-emoji">{moonPhases[moonIndex]}</span>
          <div className="moon-glow" />
        </div>
        <div className="time-block">
          <div className="live-time">{formatTime(currentTime)}</div>
          <div className="live-date">{formatDate(currentTime)}</div>
        </div>
      </div>


      {/* Chart Section */}
      <div className="chart-section">
        <div className="section-header">
          <h2 className="section-title">Pola Tidur Minggu Ini</h2>
          <div className="chart-legend">
            <span className="legend-dot mint" /> <span>Jam Tidur</span>
            <span className="legend-dot peach" /> <span>Kualitas</span>
          </div>
        </div>
        <div className="bar-chart">
          {sleepData.map((d, i) => (
            <div key={i} className="bar-group">
              <div className="bar-labels-top">
                <span className="bar-val">{d.hours}j</span>
              </div>
              <div className="bars">
                <div
                  className="bar bar-hours"
                  style={{ height: `${(d.hours / maxHours) * 100}%`, animationDelay: `${i * 0.08}s` }}
                  title={`${d.hours} jam`}
                >
                  <div className="bar-tooltip">{d.hours}j</div>
                </div>
                <div
                  className="bar bar-quality"
                  style={{ height: `${d.quality}%`, animationDelay: `${i * 0.08 + 0.04}s` }}
                  title={`${d.quality}%`}
                >
                  <div className="bar-tooltip">{d.quality}%</div>
                </div>
              </div>
              <div className="bar-day">{d.day}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Sleep Stages Mini */}
      <div className="two-col">
        <div className="stage-card">
          <h3 className="card-title">Fase Tidur Semalam</h3>
          <div className="stages-list">
            {[
              { name: "Tidur Ringan", pct: 55, color: "#7dd3fc", hours: "4j 5m" },
              { name: "Tidur Dalam", pct: 25, color: "#34d399", hours: "1j 52m" },
              { name: "REM", pct: 20, color: "#f9a8d4", hours: "1j 30m" },
            ].map((s, i) => (
              <div key={i} className="stage-item">
                <div className="stage-meta">
                  <span className="stage-name">{s.name}</span>
                  <span className="stage-hours">{s.hours}</span>
                </div>
                <div className="stage-bar-bg">
                  <div className="stage-bar-fill" style={{ width: `${s.pct}%`, background: s.color }} />
                </div>
                <span className="stage-pct">{s.pct}%</span>
              </div>
            ))}
          </div>
        </div>

        <div className="ai-insight-card">
          <h3 className="card-title">💡 Insight AI</h3>
          <div className="insight-badge">Analisis Terkini</div>
          <p className="insight-text">
            Kualitas tidur Anda meningkat <strong>12%</strong> dibanding minggu lalu. Tidur dalam (deep sleep) Anda berada di angka optimal. Pertahankan jadwal tidur pukul <strong>22:30</strong> untuk hasil terbaik.
          </p>
          <div className="insight-metrics">
            <div className="i-metric">
              <span className="i-icon">📈</span>
              <span>+12% vs minggu lalu</span>
            </div>
            <div className="i-metric">
              <span className="i-icon">🎯</span>
              <span>Target: 85% tercapai</span>
            </div>
          </div>
          <button className="btn-primary">Lihat Analisis Lengkap →</button>
        </div>
      </div>

      {/* Tips */}
      <div className="tips-section">
        <h2 className="section-title">Tips Tidur Berkualitas</h2>
        <div className="tips-grid">
          {tips.map((tip, i) => (
            <div key={i} className={`tip-card tip-${i}`}>
              <span className="tip-icon">{tip.icon}</span>
              <h4 className="tip-title">{tip.title}</h4>
              <p className="tip-desc">{tip.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}