import Artis from "../models/Artis.js";

// Mendapatkan semua data artis
export async function getAllArtis(req, res) {
  try {
    const artis = await Artis.findAll();
    res.json(artis);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Terjadi kesalahan saat mengambil data artis" });
  }
}

// Menambahkan artis baru
export async function createArtis(req, res) {
  const { namaArtis, tahunLahir, kewarganegaraan } = req.body;

  try {
    const artis = await Artis.create({
      namaArtis,
      tahunLahir,
      kewarganegaraan,
    });
    res.status(201).json(artis);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Terjadi kesalahan saat menambahkan artis baru" });
  }
}

// Mendapatkan detail artis berdasarkan ID
export async function getArtisById(req, res) {
  const { id } = req.params;

  try {
    const artis = await Artis.findByPk(id);
    if (!artis) {
      return res.status(404).json({ message: "Artis tidak ditemukan" });
    }
    res.json(artis);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Terjadi kesalahan saat mengambil data artis" });
  }
}

// Menghapus artis berdasarkan ID
export async function deleteArtisById(req, res) {
  const { id } = req.params;

  try {
    const deletedArtis = await Artis.destroy({ where: { id } });
    if (!deletedArtis) {
      return res.status(404).json({ message: "Artis tidak ditemukan" });
    }
    res.json({ message: "Artis berhasil dihapus" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Terjadi kesalahan saat menghapus artis" });
  }
}

// Memperbarui data artis berdasarkan ID
export async function updateArtisById(req, res) {
  const { id } = req.params;
  const { namaArtis, tahunLahir, kewarganegaraan } = req.body;

  try {
    const updatedArtis = await Artis.update(
      { namaArtis, tahunLahir, kewarganegaraan },
      { where: { id }, returning: true }
    );
    if (updatedArtis[0] === 0) {
      return res.status(404).json({ message: "Artis tidak ditemukan" });
    }
    res.json(updatedArtis[1][0]);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Terjadi kesalahan saat memperbarui data artis" });
  }
}
