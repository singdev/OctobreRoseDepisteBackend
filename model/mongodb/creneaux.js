const mongoose = require("mongoose");

module.exports = mongoose.model("Creneau", mongoose.Schema({
  date: { type: Date },
  debut: { type: String },
  fin: { type: String },
  medecin: { type: mongoose.Types.ObjectId, ref: "Medecin" },
  created_at: { type: Date, default: Date.now }
}));