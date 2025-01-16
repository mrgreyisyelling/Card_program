const mongoose = require("mongoose");

// const CardSchema = new mongoose.Schema({
//   title: { type: String, default: "Untitled Card" },
//   description: { type: String, default: "" },
//   qrCodeLink: { type: String, default: "" },
//   createdAt: { type: Date, default: Date.now },
// });

const CardSchema = new mongoose.Schema({
  title: {
      type: String,
      required: true
  },
  description: {
      type: String,
      required: false
  },
  category: {
      type: String,
      required: false
  },
  content: {
    type: String,
    required: false
  },
  Node: {
    type: Schema.Types.ObjectId,
    required: false,
    ref: 'Node'
  },
  design_template: {
    type: String,
    required: false
  },
  art_chosen: {
    type: String,
    required: false
  },
  qr_code_id: {
    type: String,
    required: false
  },
  cardStatus: {
    type: String,
    enum: ['started', 'designed', 'posted', 'printed', 'delivered', 'active', 'inactive'],
    required: true
  },
});


module.exports = mongoose.model("Card", CardSchema);
