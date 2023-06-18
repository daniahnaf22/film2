import express from "express";
import Routes from "./routes/index.js";
import sequelize from "./database.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
// Middleware untuk mengizinkan parsing body dalam format JSON
app.use(express.json());

// Menghubungkan rute-rute
app.use(Routes);

// Sinkronisasi model dengan database dan jalankan server
sequelize
  .authenticate()
  .then(() => {
    console.log("Database connection has been established successfully");
    // Sync database models
    // return sequelize.sync();
  })
  .then(() => {
    app.listen(3000, () => {
      console.log("Server berjalan pada port 3000");
    });
  })
  .catch((error) => {
    console.error(
      "Terjadi kesalahan saat sinkronisasi dengan database:",
      error
    );
  });
