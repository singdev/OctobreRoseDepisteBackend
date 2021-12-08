const mongoose = require("mongoose");

module.exports = mongoose.model("Account", mongoose.Schema({
  username: { type: String, require: true, unique: true, sparse: true },
  password: { type: String, require: true },
  fullname: { type: String },
  last_connexion: { type: Date , default: Date.now },
  last_activity: { type: Date, default: Date.now },
  isAdmin: { type: Boolean, default: false },
  created_at: { type: Date, default: Date.now},
}));
