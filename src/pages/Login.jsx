import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  return (
    <div className="login-page">
      <div className="login-card">
        {/* 🔙 BUTTON POJOK ATAS */}
        <button className="back-btn-top" onClick={() => navigate("/")} aria-label="Kembali ke Beranda">
          &larr;
        </button>

        <h2>Login</h2>
        <p>Masuk ke akun Anda untuk melanjutkan</p>

        <div className="input-group" style={{ marginTop: "20px" }}>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
        </div>

        <button className="btn" style={{ width: "100%", marginTop: "10px" }}>
          Login
        </button>

        <p className="login-footer" style={{ marginTop: "20px", fontSize: "14px" }}>
          Belum punya akun?{" "}
          <span onClick={() => navigate("/register")} style={{ color: "#4f46e5", cursor: "pointer", fontWeight: "600" }}>
            Regristasi
          </span>
        </p>
      </div>
    </div>
  );
}

export default Login;