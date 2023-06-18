import RumahProduksi from "../models/RumahProduksi.js";

// Mendapatkan semua data rumah produksi
export async function getAllRumahProduksi(req, res) {
  try {
    const rumahProduksi = await RumahProduksi.findAll();
    res.json(rumahProduksi);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Terjadi kesalahan saat mengambil data rumah produksi",
    });
  }
}

// Menambahkan rumah produksi baru
export async function createRumahProduksi(req, res) {
  const { namaRumahProduksi, tahunBerdiri } = req.body;

  try {
    const rumahProduksi = await RumahProduksi.create({
      namaRumahProduksi,
      tahunBerdiri,
    });
    res.status(201).json(rumahProduksi);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Terjadi kesalahan saat menambahkan rumah produksi baru",
    });
  }
}

// Mendapatkan detail rumah produksi berdasarkan ID
export async function getRumahProduksiById(req, res) {
  const { id } = req.params;

  try {
    const rumahProduksi = await RumahProduksi.findByPk(id);
    if (!rumahProduksi) {
      return res
        .status(404)
        .json({ message: "Rumah produksi tidak ditemukan" });
    }
    res.json(rumahProduksi);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Terjadi kesalahan saat mengambil data rumah produksi",
    });
  }
}

// Menghapus rumah produksi berdasarkan ID
export async function deleteRumahProduksiById(req, res) {
  const { id } = req.params;

  try {
    const deletedRumahProduksi = await RumahProduksi.destroy({ where: { id } });
    if (!deletedRumahProduksi) {
      return res
        .status(404)
        .json({ message: "Rumah produksi tidak ditemukan" });
    }
    res.json({ message: "Rumah produksi berhasil dihapus" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Terjadi kesalahan saat menghapus rumah produksi" });
  }
}

// Memperbarui data rumah produksi berdasarkan ID
export async function updateRumahProduksiById(req, res) {
  const { id } = req.params;
  const { namaRumahProduksi, tahunBerdiri } = req.body;

  try {
    const updatedRumahProduksi = await RumahProduksi.update(
      { namaRumahProduksi, tahunBerdiri },
      { where: { id }, returning: true }
    );
    if (updatedRumahProduksi[0] === 0) {
      return res
        .status(404)
        .json({ message: "Rumah produksi tidak ditemukan" });
    }
    res.json(updatedRumahProduksi[1][0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Terjadi kesalahan saat memperbarui data rumah produksi",
    });
  }
}
