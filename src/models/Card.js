const mongoose = require("mongoose");

const CardSchema = new mongoose.Schema({
  title: { type: String, default: "Untitled Card" },
  description: { type: String, default: "" },
  qrCodeLink: { type: String, default: "" },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Card", CardSchema);
