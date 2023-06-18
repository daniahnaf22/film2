import Negara from "../models/Negara.js";

// Mendapatkan semua data negara
export async function getAllNegara(req, res) {
  try {
    const negara = await Negara.findAll();
    res.json(negara);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Terjadi kesalahan saat mengambil data negara" });
  }
}

// Menambahkan negara baru
export async function createNegara(req, res) {
  const body = {
    elementData: req.body.elementData,
    namaNegara: req.body.namaNegara,
  };

  // Validasi nilai namaNegara tidak kosong
  if (!body.namaNegara) {
    return res.status(400).json({ message: "Nama negara harus diisi" });
  }

  try {
    const negara = await Negara.create(body);
    res.status(201).json(negara);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Terjadi kesalahan saat menambahkan negara baru" });
  }
}

// Mendapatkan detail negara berdasarkan ID
export async function getNegaraById(req, res) {
  const { id } = req.params;

  try {
    const negara = await Negara.findByPk(id);
    if (!negara) {
      return res.status(404).json({ message: "Negara tidak ditemukan" });
    }
    res.json(negara);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Terjadi kesalahan saat mengambil data negara" });
  }
}

// Menghapus negara berdasarkan ID
export async function deleteNegaraById(req, res) {
  const { id } = req.params;

  try {
    const deletedNegara = await Negara.destroy({ where: { id } });
    if (!deletedNegara) {
      return res.status(404).json({ message: "Negara tidak ditemukan" });
    }
    res.json({ message: "Negara berhasil dihapus" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Terjadi kesalahan saat menghapus negara" });
  }
}

// Memperbarui data negara berdasarkan ID
export async function updateNegaraById(req, res) {
  const { id } = req.params;
  const { namaNegara } = req.body;

  try {
    const updatedNegara = await Negara.update(
      { namaNegara },
      { where: { id }, returning: true }
    );
    if (updatedNegara[0] === 0) {
      return res.status(404).json({ message: "Negara tidak ditemukan" });
    }
    res.json(updatedNegara[1][0]);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Terjadi kesalahan saat memperbarui data negara" });
  }
}
