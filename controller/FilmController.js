import Film from "../models/Film.js";

// Mendapatkan semua data film
export async function getAllFilm(req, res) {
  try {
    const film = await Film.findAll();
    res.json(film);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Terjadi kesalahan saat mengambil data film" });
  }
}

// Menambahkan film baru
export async function createFilm(req, res) {
  const {
    judulFilm,
    deskFilm,
    artis,
    rumahProduksi,
    tahun,
    negara,
    cover,
    fileFilm,
  } = req.body;

  try {
    const film = await Film.create({
      judulFilm,
      deskFilm,
      artis,
      rumahProduksi,
      tahun,
      negara,
      cover,
      fileFilm,
    });
    res.status(201).json(film);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Terjadi kesalahan saat menambahkan film baru" });
  }
}

// Mendapatkan detail film berdasarkan ID
export async function getFilmById(req, res) {
  const { id } = req.params;

  try {
    const film = await Film.findByPk(id);
    if (!film) {
      return res.status(404).json({ message: "Film tidak ditemukan" });
    }
    res.json(film);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Terjadi kesalahan saat mengambil data film" });
  }
}

// Menghapus film berdasarkan ID
export async function deleteFilmById(req, res) {
  const { id } = req.params;

  try {
    const deletedFilm = await Film.destroy({ where: { id } });
    if (!deletedFilm) {
      return res.status(404).json({ message: "Film tidak ditemukan" });
    }
    res.json({ message: "Film berhasil dihapus" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Terjadi kesalahan saat menghapus film" });
  }
}

// Memperbarui data film berdasarkan ID
export async function updateFilmById(req, res) {
  const { id } = req.params;
  const {
    judulFilm,
    deskFilm,
    artis,
    rumahProduksi,
    tahun,
    negara,
    cover,
    fileFilm,
  } = req.body;

  try {
    const updatedFilm = await Film.update(
      {
        judulFilm,
        deskFilm,
        artis,
        rumahProduksi,
        tahun,
        negara,
        cover,
        fileFilm,
      },
      { where: { id }, returning: true }
    );
    if (updatedFilm[0] === 0) {
      return res.status(404).json({ message: "Film tidak ditemukan" });
    }
    res.json(updatedFilm[1][0]);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Terjadi kesalahan saat memperbarui data film" });
  }
}
