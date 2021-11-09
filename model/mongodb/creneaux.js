const mongoose = require("mongoose");

module.exports = mongoose.model("Creneau", mongoose.Schema({
  heureDebut: { type: String },
  heureFin: { type: String},
  date: { type: Date},
}));