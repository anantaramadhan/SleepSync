import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const sleepData = [
  { day: "Sen", hours: 6 },
  { day: "Sel", hours: 7 },
  { day: "Rab", hours: 5 },
  { day: "Kam", hours: 8 },
  { day: "Jum", hours: 6.5 },
  { day: "Sab", hours: 9 },
  { day: "Min", hours: 7.5 },
];

const Dashboard = () => {
  return (
    <div className="dashboard">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2>SleepSync</h2>

        <ul>
          <li className="active">Dashboard</li>
          <li>Riwayat Tidur</li>
          <li>Analisis</li>
          <li>Pengaturan</li>
        </ul>
      </aside>

      {/* Main */}
      <main className="main-content">
        <div className="top-header">
          <h1>Dashboard Pola Tidur</h1>
          <p>Analisis kualitas tidur mingguan</p>
        </div>

        {/* Cards */}
        <div className="card-grid">
          <div className="stat-card">
            <h3>Rata-rata Tidur</h3>
            <h2>7.0 Jam</h2>
          </div>

          <div className="stat-card">
            <h3>Sleep Score</h3>
            <h2>85%</h2>
          </div>

          <div className="stat-card">
            <h3>Kualitas Tidur</h3>
            <h2>Baik</h2>
          </div>

          <div className="stat-card">
            <h3>Target Tidur</h3>
            <h2>8 Jam</h2>
          </div>
        </div>

        {/* Chart */}
        <div className="chart-card">
          <h2>Grafik Jam Tidur</h2>

          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={sleepData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="hours"
                stroke="#6366f1"
                strokeWidth={4}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Recommendation */}
        <div className="recommendation-card">
          <h2>Rekomendasi</h2>

          <ul>
            <li>Tidur sebelum jam 11 malam</li>
            <li>Kurangi penggunaan gadget sebelum tidur</li>
            <li>Usahakan tidur minimal 7-8 jam</li>
            <li>Konsisten dengan jadwal tidur</li>
          </ul>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;