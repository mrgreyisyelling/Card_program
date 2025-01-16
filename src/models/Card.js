const mongoose = require("mongoose");
const Schema = mongoose.Schema; 

// const CardSchema = new mongoose.Schema({
//   title: { type: String, default: "Untitled Card" },
//   description: { type: String, default: "" },
//   qrCodeLink: { type: String, default: "" },
//   createdAt: { type: Date, default: Date.now },
// });

const CardSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  category: { type: String },
  content: { type: String },
  nodes: [{ type: Schema.Types.ObjectId, ref: 'Node' }],
  design_template: { type: String },
  art_chosen: { type: String },
  qr_code_id: { type: String },
  cardStatus: { type: String, enum: ['started', 'designed', 'posted', 'printed', 'delivered', 'active', 'inactive'], required: true },
});

module.exports = mongoose.model("Card", CardSchema);
