import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  return (
    <div className="login-page">
      <div className="login-card">

        {/* 🔙 BUTTON POJOK ATAS */}
        <button className="back-btn-top" onClick={() => navigate("/")}>
          ←
        </button>

        <h2>Register</h2>
        <p>Buat akun baru</p>

        <input type="text" placeholder="Nama Lengkap" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Konfirmasi Password" />

        <button className="btn">Register</button>

        <p className="login-footer">
          Sudah punya akun?{" "}
          <span onClick={() => navigate("/login")}>Login</span>
        </p>
      </div>
    </div>
  );
}

export default Register;