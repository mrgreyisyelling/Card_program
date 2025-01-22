const mongoose = require("mongoose");
const AutoIncrement = require('mongoose-sequence')(mongoose);
const Schema = mongoose.Schema; 

// const CardSchema = new mongoose.Schema({
//   title: { type: String, default: "Untitled Card" },
//   description: { type: String, default: "" },
//   qrCodeLink: { type: String, default: "" },
//   createdAt: { type: Date, default: Date.now },
// });

// const CardSchema = new Schema({
//   design_template: { type: String },
//   title: { type: String, required: true },
//   description: { type: String },
//   category: { type: String },
//   content: { type: String },
//   nodes: [{ type: Schema.Types.ObjectId, ref: 'Node' }],
//   art_chosen: { type: String },
//   qr_code_id: { type: String },
//   cardStatus: { type: String, enum: ['started', 'designed', 'posted', 'printed', 'delivered', 'active', 'inactive'], required: true },
// });

// module.exports = mongoose.model("Card", CardSchema);

const cardSchema = new Schema({
  cardId: {
    type: Number,
    unique: true,
  },
  createdAt: {
      type: Date,
      default: Date.now,
  },
  description: {
      type: String,
      default: 'New card created on submission',
  },
  // Add other fields as needed
});

// Apply the auto-increment plugin
cardSchema.plugin(AutoIncrement, { inc_field: 'cardId' });


module.exports = mongoose.model('Card', cardSchema);