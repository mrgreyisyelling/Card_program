
const mongoose = require("mongoose");
const AutoIncrement = require('mongoose-sequence')(mongoose);
const Schema = mongoose.Schema; 

const websiteSchema = new Schema({
    websiteId: {
    type: Number,
    unique: true,
  },
  createdAt: {
      type: Date,
      default: Date.now,
  },
  description: {
      type: String,
      default: 'New website created on submission',
  },
  // Add other fields as needed
});

// Apply the auto-increment plugin
websiteSchema.plugin(AutoIncrement, { inc_field: 'websiteId' });


module.exports = mongoose.model('Website', websiteSchema);