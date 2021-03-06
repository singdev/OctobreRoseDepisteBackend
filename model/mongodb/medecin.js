const mongoose = require("mongoose");

module.exports = mongoose.model("Medecin", mongoose.Schema({
  nom: { type: String },
  prenom: { type: String},
  email: { type: String},
  telephone: { type: String },
  sexe: { type: String, enum: ["Female", "Male"]},
  specialite:{type: String},
  account: { type: mongoose.Types.ObjectId, ref: "Account"},
  centre: { type: mongoose.Types.ObjectId, ref: "Centre"}
}));
