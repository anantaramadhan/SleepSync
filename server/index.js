const express = require("express");
const db = require("../config/db"); 

const app = express();
const PORT = 5000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend SleepSync berjalan 🚀");
});

app.post('/api/predict', (req, res) => {
  const { gender, age, occupation, sleep_duration, quality_of_sleep, 
          physical_activity, stress_level, bmi_category, blood_pressure, 
          heart_rate, daily_steps, sleep_disorder } = req.body;

  const sql = `INSERT INTO sleep_analysis 
               (gender, age, occupation, sleep_duration, quality_of_sleep, physical_activity, stress_level, bmi_category, blood_pressure, heart_rate, daily_steps, sleep_disorder) 
               VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

  const values = [gender, age, occupation, sleep_duration, quality_of_sleep, 
                  physical_activity, stress_level, bmi_category, blood_pressure, 
                  heart_rate, daily_steps, sleep_disorder];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error("Database Error:", err);
      return res.status(500).json({ message: 'Gagal menyimpan data ke database' });
    }
    res.status(201).json({ 
      message: 'Data kuesioner SleepSync berhasil disimpan!', 
      dataId: result.insertId 
    });
  });
});

app.listen(PORT, () => {
  console.log(`Server SleepSync running on http://localhost:${PORT}`);
});