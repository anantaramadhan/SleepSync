import { useState } from "react";
import "./Pages.css";

export default function Pengaturan() {
  const [settings, setSettings] = useState({
    namaLengkap: "Budi Santoso",
    email: "budi@email.com",
    usia: "28",
    gender: "laki-laki",
    nomorHP: "",
    pekerjaan: "",
    kota: "",
  });

  const [saved, setSaved] = useState(false);

  const update = (key, val) => setSettings((s) => ({ ...s, [key]: val }));

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="page-container">

      <div className="panel-header">
          <h2>👤 Profil Pengguna</h2>
          <p>Informasi dasar untuk personalisasi analisis tidur Anda</p>
        </div>

      {/* Panel Profil */}
      <div className="settings-panel">

        {/* Avatar */}
        <div className="avatar-section">
          <div className="avatar-circle">
            <span>
              {settings.namaLengkap
                .split(" ")
                .slice(0, 2)
                .map((n) => n[0])
                .join("")
                .toUpperCase()}
            </span>
            <div className="avatar-badge">🌙</div>
          </div>
          <div>
            <button className="btn-outline">Ganti Foto</button>
            <p className="avatar-hint">JPG, PNG maksimal 2MB</p>
          </div>
        </div>

        {/* Form */}
        <div className="form-grid">

          <div className="form-group">
            <label className="form-label">Nama Lengkap</label>
            <input
              className="form-input"
              placeholder="Masukkan nama lengkap"
              value={settings.namaLengkap}
              onChange={(e) => update("namaLengkap", e.target.value)}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Email</label>
            <input
              className="form-input"
              type="email"
              placeholder="contoh@email.com"
              value={settings.email}
              onChange={(e) => update("email", e.target.value)}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Usia</label>
            <input
              className="form-input"
              type="number"
              placeholder="Umur Anda"
              min="1"
              max="120"
              value={settings.usia}
              onChange={(e) => update("usia", e.target.value)}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Jenis Kelamin</label>
            <select
              className="form-select"
              value={settings.gender}
              onChange={(e) => update("gender", e.target.value)}
            >
              <option value="laki-laki">Laki-laki</option>
              <option value="perempuan">Perempuan</option>
              <option value="lainnya">Lainnya</option>
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">Nomor HP</label>
            <input
              className="form-input"
              type="tel"
              placeholder="08xxxxxxxxxx"
              value={settings.nomorHP}
              onChange={(e) => update("nomorHP", e.target.value)}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Pekerjaan</label>
            <input
              className="form-input"
              placeholder="Contoh: Mahasiswa, Karyawan"
              value={settings.pekerjaan}
              onChange={(e) => update("pekerjaan", e.target.value)}
            />
          </div>

        </div>

        <button
          className={`save-btn ${saved ? "saved" : ""}`}
          onClick={handleSave}
        >
          {saved ? "✓ Tersimpan!" : "Simpan Perubahan"}
        </button>


        {/* Mobile save */}
        <div className="mobile-save">
          <button
            className={`save-btn full ${saved ? "saved" : ""}`}
            onClick={handleSave}
          >
            {saved ? "✓ Perubahan Tersimpan!" : "Simpan Perubahan"}
          </button>
        </div>

      </div>
    </div>
  );
}
