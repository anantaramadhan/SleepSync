import { Brain, Moon, BarChart, Sparkles } from "lucide-react";

const icons = [Brain, Moon, BarChart, Sparkles];

function Features() {
  return (
    // Pastikan className ini sesuai dengan CSS Anda
    <section id="features" className="features">
      {/* Container ini yang akan membuat konten rata kiri-kanan dengan rapi */}
      <div className="container">
        <h2>Fitur Unggulan</h2>

        <div className="features-grid">
          {icons.map((Icon, i) => (
            <div className="feature-item" key={i}>
              {/* Ikon dibungkus agar terlihat lebih rapi jika ingin diberi background */}
              <div className="icon-wrapper">
                <Icon size={32} color="#4f46e5" />
              </div>
              <div>
                <h4>Feature {i + 1}</h4>
                <p>Fitur canggih untuk analisis tidur</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;