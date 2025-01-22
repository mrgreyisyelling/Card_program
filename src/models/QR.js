
const mongoose = require("mongoose");
const AutoIncrement = require('mongoose-sequence')(mongoose);
const Schema = mongoose.Schema; 

const qrSchema = new Schema({
    qrId: {
    type: Number,
    unique: true,
  },
  createdAt: {
      type: Date,
      default: Date.now,
  },
  description: {
      type: String,
      default: 'New qr created on submission',
  },
  // Add other fields as needed
});

// Apply the auto-increment plugin
qrSchema.plugin(AutoIncrement, { inc_field: 'qrId' });


module.exports = mongoose.model('QR', qrSchema);