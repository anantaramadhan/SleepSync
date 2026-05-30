import express from "express";
import db from "../config/db.js";
import verifyToken from "../middleware/verifyToken.js";
import upload from "../middleware/uploadProfile.js";

const router = express.Router();

// get profile
router.get("/", verifyToken, (req, res) => {
  const userId = req.user.id;

  db.query(
    `
    SELECT
      id,
      nama,
      email,
      nomor_hp,
      pekerjaan,
      kota,
      usia,
      gender,
      profile_picture
    FROM users
    WHERE id = ?
    `,
    [userId],
    (err, results) => {
      if (err) {
        return res.status(500).json({
          message: err.message,
        });
      }

      if (results.length === 0) {
        return res.status(404).json({
          message: "User tidak ditemukan",
        });
      }

      const user = results[0];

      return res.status(200).json({
        ...user,

        profile_picture: user.profile_picture
          ? `http://localhost:5000/uploads/${user.profile_picture}`
          : null,
      });
    }
  );
});

// update profile
router.put("/", verifyToken, (req, res) => {
  const userId = req.user.id;

  const {
    nama,
    nomor_hp,
    pekerjaan,
    kota,
    usia,
    gender,
  } = req.body;

  db.query(
    `
    UPDATE users
    SET
      nama = ?,
      nomor_hp = ?,
      pekerjaan = ?,
      kota = ?,
      usia = ?,
      gender = ?
    WHERE id = ?
    `,
    [
      nama,
      nomor_hp,
      pekerjaan,
      kota,
      usia,
      gender,
      userId,
    ],
    (err) => {
      if (err) {
        return res.status(500).json({
          message: err.message,
        });
      }

      return res.status(200).json({
        message: "Profil berhasil diperbarui",
      });
    }
  );
});

// upload pp
router.put(
  "/photo",
  verifyToken,
  upload.single("photo"),
  (req, res) => {
    if (!req.file) {
      return res.status(400).json({
        message: "File foto tidak ditemukan",
      });
    }

    const userId = req.user.id;
    const filename = req.file.filename;

    db.query(
      `
      UPDATE users
      SET profile_picture = ?
      WHERE id = ?
      `,
      [filename, userId],
      (err) => {
        if (err) {
          return res.status(500).json({
            message: err.message,
          });
        }

        return res.status(200).json({
          message: "Foto profil berhasil diperbarui",
          profile_picture:
            `http://localhost:5000/uploads/${filename}`,
        });
      }
    );
  }
);

export default router;