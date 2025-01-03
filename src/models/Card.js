const mongoose = require("mongoose");

const CardSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  qrCodeLink: { type: String },
  filePath: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Card", CardSchema);
