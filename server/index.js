import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.js";
import sleepRoutes from "./routes/sleep.js";
import profileRoutes from "./routes/profile.js";
import path from "path";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// CORS: izinkan request dari frontend Vite
app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());

// Routes
app.use("/api", authRoutes);
app.use("/api", sleepRoutes);

// Global error handler
app.use((err, req, res, next) => {
  console.error("Unhandled error:", err.stack);
  res.status(500).json({ message: "Terjadi kesalahan pada server." });
});

// Health check
app.get("/", (req, res) => {
  res.send("Backend SleepSync berjalan 🚀");
});

app.listen(PORT, () => {
  console.log(`Server SleepSync running on http://localhost:${PORT}`);
});

// profile
app.use("/api/profile", profileRoutes);

// foto profile
app.use(
  "/uploads",
  express.static("uploads")
);