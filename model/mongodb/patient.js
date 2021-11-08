const mongoose = require("mongoose");

module.exports = mongoose.model("Patient", mongoose.Schema({
  nom: { type: String },
  prenom: { type: String},
  email: { type: String},
  telephone: { type: String },
  sexe: { type: String, enum: ["Female", "Male"]},
}));