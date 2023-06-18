import { Sequelize } from "sequelize";
import db from "../database.js";

import Artis from "./Artis.js";
import RumahProduksi from "./RumahProduksi.js";
import Negara from "./Negara.js";

const { DataTypes } = Sequelize;

const Film = db.define("Film", {
  id: {
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER,
  },
  judulFilm: DataTypes.STRING,
  deskFilm: DataTypes.TEXT,
  artis: DataTypes.INTEGER,
  rumahProduksi: DataTypes.INTEGER,
  tahun: DataTypes.INTEGER,
  negara: DataTypes.INTEGER,
  cover: DataTypes.STRING,
  fileFilm: DataTypes.STRING,
});

Film.belongsTo(RumahProduksi, {
  foreignKey: "rumahProduksi",
});

Film.belongsTo(Artis, {
  foreignKey: "artis",
});

Film.belongsTo(Negara, {
  foreignKey: "negara",
});

export default Film;
