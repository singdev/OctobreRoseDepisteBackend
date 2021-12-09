const mongoose = require("mongoose");

module.exports = mongoose.model("Patient", mongoose.Schema({
  nom: { type: String },
  prenom: { type: String},
  email: { type: String},
  telephone: { type: String },
  cancer: { type: String, enum: ["Tous", "Ovaire", "Sein", "Uterus"], default: "Tous" },
  sexe: { type: String, enum: ["Female", "Male"], default: "Female"},
  numero_piece: { type: String },
  type_piece: { type: String },
  creneau: { type: mongoose.Types.ObjectId, ref: "Creneau"},
  centre: { type: mongoose.Types.ObjectId, ref: "Centre"},
  medecin: { type: mongoose.Types.ObjectId, ref: "Centre"},
  created_at: { type: Date, default: Date.now}
}));