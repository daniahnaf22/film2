import express from "express";
import {
  getAllFilm,
  createFilm,
  getFilmById,
  updateFilmById,
  deleteFilmById,
} from "../controller/FilmController.js";

import {
  getAllRumahProduksi,
  createRumahProduksi,
  getRumahProduksiById,
  updateRumahProduksiById,
  deleteRumahProduksiById,
} from "../controller/RumahProduksiController.js";
import {
  getAllNegara,
  createNegara,
  getNegaraById,
  updateNegaraById,
  deleteNegaraById,
} from "../controller/NegaraController.js";
import {
  getAllArtis,
  createArtis,
  getArtisById,
  updateArtisById,
  deleteArtisById,
} from "../controller/ArtisController.js";

const router = express.Router(); 
// Film Routes
router.get("/film", getAllFilm);
router.post("/film", createFilm);
router.get("/film/:id", getFilmById);
router.put("/film/:id", updateFilmById);
router.delete("/film/:id", deleteFilmById);

// Artis Routes
router.get("/artis", getAllArtis);
router.post("/artis", createArtis);
router.get("/artis/:id", getArtisById);
router.put("/artis/:id", updateArtisById);
router.delete("/artis/:id", deleteArtisById);

// Rumah Produksi Routes
router.get("/rumahproduksi", getAllRumahProduksi);
router.post("/rumahproduksi", createRumahProduksi);
router.get("/rumahproduksi/:id", getRumahProduksiById);
router.put("/rumah-produksi/:id", updateRumahProduksiById);
router.delete("/rumahproduksi/:id", deleteRumahProduksiById);

// Negara Routes
router.get("/negara", getAllNegara);
router.post("/negara", createNegara);
router.get("/negara/:id", getNegaraById);
router.put("/negara/:id", updateNegaraById);
router.delete("/negara/:id", deleteNegaraById);

export default router;
