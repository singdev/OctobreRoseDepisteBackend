const mongoose = require("mongoose");

function getRandomPIN() {
  const numero1 = Math.floor(Math.random() * 999999);
  return numero1;
}

module.exports = mongoose.model("ForgotPasswordOTP", mongoose.Schema({
  pin: { type: String, unique: true, require: true, sparse: true, default: getRandomPIN },
  account: { type: mongoose.Types.ObjectId, ref: "UserAccount", unique: true },
  create_at: { type: Date, default: Date.now }
}));