import { useState, useEffect } from "react";
import axios from "axios";
import "./Pages.css";

export default function Pengaturan() {
  const [settings, setSettings] = useState({
    namaLengkap: "",
    email: "",
    usia: "",
    gender: "",
    nomorHP: "",
    pekerjaan: "",
    kota: "",
    profilePicture: null,
  });

  const [saved, setSaved] = useState(false);
  const [loading, setLoading] = useState(true);

  const update = (key, value) => {
    setSettings((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  // AMBIL DATA PROFILE
  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        console.error("Token tidak ditemukan");
        setLoading(false);
        return;
      }

      const response = await axios.get("http://localhost:5000/api/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const user = response.data;

      setSettings({
        namaLengkap: user.nama || "",
        email: user.email || "",
        usia: user.usia || "",
        gender: user.gender || "",
        nomorHP: user.nomor_hp || "",
        pekerjaan: user.pekerjaan || "",
        kota: user.kota || "",
        profilePicture: user.profile_picture || null,
      });
    } catch (error) {
      console.error(
        "Gagal mengambil data profil:",
        error.response?.data || error.message
      );
    } finally {
      setLoading(false);
    }
  };

  // SIMPAN PROFILE
  const handleSave = async () => {
    try {
      const token = localStorage.getItem("token");

      await axios.put(
        "http://localhost:5000/api/profile",
        {
          nama: settings.namaLengkap,
          nomor_hp: settings.nomorHP,
          pekerjaan: settings.pekerjaan,
          kota: settings.kota,
          usia: settings.usia,
          gender: settings.gender,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setSaved(true);

      setTimeout(() => {
        setSaved(false);
      }, 3000);
    } catch (error) {
      console.error(
        "Gagal update profil:",
        error.response?.data || error.message
      );

      alert(error.response?.data?.message || "Gagal menyimpan perubahan");
    }
  };

  const handlePhotoUpload = async (e) => {
    try {
      const file = e.target.files[0];

      if (!file) return;

      const token = localStorage.getItem("token");

      const formData = new FormData();
      formData.append("photo", file);

      const response = await axios.put(
        "http://localhost:5000/api/profile/photo",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setSettings((prev) => ({
        ...prev,
        profilePicture: response.data.profile_picture,
      }));

      alert("Foto profil berhasil diperbarui");
    } catch (error) {
      console.error(error);

      alert(error.response?.data?.message || "Gagal upload foto");
    }
  };

  if (loading) {
    return (
      <div className="page-container">
        <h3>Memuat data profil...</h3>
      </div>
    );
  }

  return (
    <div className="page-container">
      <div className="panel-header">
        <h2>👤 Profil Pengguna</h2>
        <p>Informasi dasar untuk personalisasi analisis tidur Anda</p>
      </div>

      <div className="settings-panel">
        {/* Avatar */}
        <div className="avatar-section">
          <input
            type="file"
            id="profilePhoto"
            accept="image/png,image/jpeg,image/webp"
            hidden
            onChange={handlePhotoUpload}
          />
          <div className="avatar-circle">
            {settings.profilePicture ? (
              <img
                src={settings.profilePicture}
                alt="Profile"
                className="avatar-image"
              />
            ) : (
              <span>
                {settings.namaLengkap
                  ? settings.namaLengkap
                      .split(" ")
                      .slice(0, 2)
                      .map((n) => n[0])
                      .join("")
                      .toUpperCase()
                  : "U"}
              </span>
            )}

            <div className="avatar-badge">🌙</div>
          </div>

          <div>
            <button
              className="btn-outline"
              onClick={() => document.getElementById("profilePhoto").click()}
            >
              Ganti Foto
            </button>

            <p className="avatar-hint">JPG, PNG maksimal 2MB</p>
          </div>
        </div>

        {/* FORM */}
        <div className="form-grid">
          {/* Nama */}
          <div className="form-group">
            <label className="form-label">Nama Lengkap</label>

            <input
              className="form-input"
              value={settings.namaLengkap}
              placeholder="Masukkan nama lengkap"
              onChange={(e) => update("namaLengkap", e.target.value)}
            />
          </div>

          {/* Email */}
          <div className="form-group">
            <label className="form-label">Email</label>

            <input
              className="form-input"
              type="email"
              value={settings.email}
              disabled
            />
          </div>

          {/* Usia */}
          <div className="form-group">
            <label className="form-label">Usia</label>

            <input
              className="form-input"
              type="number"
              min="1"
              max="120"
              value={settings.usia}
              onChange={(e) => update("usia", e.target.value)}
            />
          </div>

          {/* Gender */}
          <div className="form-group">
            <label className="form-label">Jenis Kelamin</label>

            <select
              className="form-select"
              value={settings.gender}
              onChange={(e) => update("gender", e.target.value)}
            >
              <option value="">Pilih Jenis Kelamin</option>

              <option value="Laki-laki">Laki-laki</option>

              <option value="Perempuan">Perempuan</option>
            </select>
          </div>

          {/* Nomor HP */}
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

          {/* Pekerjaan */}
          <div className="form-group">
            <label className="form-label">Pekerjaan</label>

            <input
              className="form-input"
              placeholder="Contoh: Mahasiswa, Karyawan"
              value={settings.pekerjaan}
              onChange={(e) => update("pekerjaan", e.target.value)}
            />
          </div>

          {/* Kota */}
          <div className="form-group">
            <label className="form-label">Kota</label>

            <input
              className="form-input"
              placeholder="Masukkan kota"
              value={settings.kota}
              onChange={(e) => update("kota", e.target.value)}
            />
          </div>
        </div>

        {/* DESKTOP SAVE */}
        <button
          className={`save-btn ${saved ? "saved" : ""}`}
          onClick={handleSave}
        >
          {saved ? "✓ Tersimpan!" : "Simpan Perubahan"}
        </button>

        {/* MOBILE SAVE */}
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
