import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  return (
    <section id="home" className="hero">
      <div className="container">
        <div>
          <h1>Sleep Hygiene Predict</h1>
          <p>Analisis tidur modern untuk hidup lebih sehat</p>

          <button className="btn" onClick={() => navigate("/login")}>
            Mulai Sekarang
          </button>
        </div>

        <div className="hero-img"></div>
      </div>
    </section>
  );
}

export default Hero;