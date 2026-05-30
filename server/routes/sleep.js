import express from "express";
import db from "../config/db.js";
import verifyToken from "../middleware/verifyToken.js";

const router = express.Router();

// ─── Simpan Analisis (butuh login) ───────────────────────────
router.post("/sleep-analysis", verifyToken, (req, res) => {
  // user_id diambil dari token, bukan dari body — lebih aman
  const user_id = req.user.id;

  const {
    gender,
    age,
    occupation,
    sleep_duration,
    quality_of_sleep,
    physical_activity,
    stress_level,
    bmi_category,
    blood_pressure,
    heart_rate,
    daily_steps,
    sleep_disorder,
  } = req.body;

  const query = `
    INSERT INTO sleep_analysis 
    (user_id, gender, age, occupation, sleep_duration, quality_of_sleep,
     physical_activity, stress_level, bmi_category, blood_pressure,
     heart_rate, daily_steps, sleep_disorder) 
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  const values = [
    user_id, gender, age, occupation, sleep_duration, quality_of_sleep,
    physical_activity, stress_level, bmi_category, blood_pressure,
    heart_rate, daily_steps, sleep_disorder,
  ];

  db.query(query, values, (err, result) => {
    if (err) {
      console.error("Database Error:", err);
      return res.status(500).json({ message: err.message });
    }
    return res.status(201).json({
      message: "Data analisis tidur berhasil disimpan!",
      dataId: result.insertId,
    });
  });
});

// ─── Ambil Riwayat Analisis (butuh login) ────────────────────
router.get("/sleep-analysis", verifyToken, (req, res) => {
  // user_id dari token, bukan dari URL param — user hanya bisa lihat datanya sendiri
  const user_id = req.user.id;

  db.query(
    "SELECT * FROM sleep_analysis WHERE user_id = ? ORDER BY id DESC",
    [user_id],
    (err, results) => {
      if (err) return res.status(500).json({ message: err.message });
      return res.status(200).json(results);
    }
  );
});

export default router;