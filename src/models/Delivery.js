const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

const deliveryPersonSchema = new Schema({
    name: { type: String, required: true },
    type: { type: String, required: true },
    deliveryPersonID: { type: String, required: true },
    data: String,
});

module.exports = mongoose.model('DeliveryPerson', deliveryPersonSchema);
