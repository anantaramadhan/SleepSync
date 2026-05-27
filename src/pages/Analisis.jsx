import { useState } from "react";
import "./Pages.css";

const weeklyData = [
  { day: "Sen", hours: 7.5, quality: 85, deep: 2.1, rem: 1.8, light: 3.6 },
  { day: "Sel", hours: 6.2, quality: 68, deep: 1.5, rem: 1.3, light: 3.4 },
  { day: "Rab", hours: 8.1, quality: 92, deep: 2.5, rem: 2.1, light: 3.5 },
  { day: "Kam", hours: 5.8, quality: 60, deep: 1.2, rem: 1.0, light: 3.6 },
  { day: "Jum", hours: 7.9, quality: 88, deep: 2.3, rem: 1.9, light: 3.7 },
  { day: "Sab", hours: 8.5, quality: 95, deep: 2.8, rem: 2.3, light: 3.4 },
  { day: "Min", hours: 7.2, quality: 80, deep: 2.0, rem: 1.7, light: 3.5 },
];

const factors = [
  { name: "Olahraga", impact: 82, icon: "🏃", positive: true },
  { name: "Stres", impact: 65, icon: "😰", positive: false },
  { name: "Kafein", impact: 71, icon: "☕", positive: false },
  { name: "Meditasi", impact: 88, icon: "🧘", positive: true },
  { name: "Layar HP", impact: 58, icon: "📱", positive: false },
  { name: "Diet Sehat", impact: 79, icon: "🥗", positive: true },
];

export default function Analisis() {
  const [activeTab, setActiveTab] = useState("minggu");

  const data = weeklyData;

  const avg = {
    quality: Math.round(
      data.reduce((a, b) => a + b.quality, 0) / data.length
    ),
    hours: (
      data.reduce((a, b) => a + b.hours, 0) / data.length
    ).toFixed(1),
    deep: (
      data.reduce((a, b) => a + b.deep, 0) / data.length
    ).toFixed(1),
    rem: (
      data.reduce((a, b) => a + b.rem, 0) / data.length
    ).toFixed(1),
  };

  return (
    <div className="page-container">
      
      {/* Header */}
      <div className="page-hero analisis-hero">
        <div className="hero-text">
          <h1 className="hero-title">Analisis Tidur</h1>
          <p className="hero-sub">
            Wawasan mendalam tentang pola dan kualitas tidur Anda
          </p>
        </div>

        <div className="tab-switcher">
          {["minggu", "bulan"].map((t) => (
            <button
              key={t}
              className={`tab-btn ${activeTab === t ? "active" : ""}`}
              onClick={() => setActiveTab(t)}
            >
              {t.charAt(0).toUpperCase() + t.slice(1)} Ini
            </button>
          ))}
        </div>
      </div>


      {/* Faktor Pengaruh Tidur */}
      <div className="factors-section">
        <h2 className="section-title">Faktor Pengaruh Tidur</h2>

        <p className="section-sub">
          Faktor-faktor yang mempengaruhi kualitas tidur Anda berdasarkan data
        </p>

        <div className="factors-grid">
          {factors.map((f, i) => (
            <div
              key={i}
              className={`factor-card ${
                f.positive ? "positive" : "negative"
              }`}
            >
              <div className="factor-top">
                <span className="factor-icon">{f.icon}</span>

                <span
                  className={`factor-tag ${
                    f.positive ? "tag-pos" : "tag-neg"
                  }`}
                >
                  {f.positive ? "Positif" : "Negatif"}
                </span>
              </div>

              <div className="factor-name">{f.name}</div>

              <div className="factor-bar-bg">
                <div
                  className={`factor-bar-fill ${
                    f.positive ? "fill-pos" : "fill-neg"
                  }`}
                  style={{ width: `${f.impact}%` }}
                />
              </div>

              <div className="factor-impact">
                {f.impact}% dampak
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* AI Recommendation */}
      <div className="ai-rec-card">
        <div className="ai-rec-icon">🤖</div>

        <div className="ai-rec-content">
          <h3>Rekomendasi Personalisasi AI</h3>

          <ul className="ai-rec-list">
            <li>
              ✅ Pertahankan waktu tidur pukul 22:00–22:30 yang konsisten
            </li>

            <li>
              ⚠️ Kurangi konsumsi kafein setelah pukul 14:00 — berdampak
              negatif 29%
            </li>

            <li>
              💪 Lanjutkan rutinitas olahraga pagi — meningkatkan deep
              sleep 18%
            </li>

            <li>
              📵 Batasi penggunaan layar 1 jam sebelum tidur
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}