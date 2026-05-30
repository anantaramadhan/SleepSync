import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT || 3306,
});

connection.connect((err) => {
  if (err) {
    console.error("Gagal menghubungkan ke database: " + err.stack);
    return;
  }
  console.log(
    "Terhubung ke database " +
      process.env.DB_NAME +
      " dengan ID " +
      connection.threadId
  );
});

export default connection;
