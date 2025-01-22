const mongoose = require('mongoose');
const Card = require('../models/Website'); // Adjust the path to your Card model

mongoose.connect('mongodb://localhost:27017/Database_1', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const viewCards = async () => {
    try {
        const cards = await Card.find();
        console.log('Cards in the database:', cards);
        mongoose.connection.close();
    } catch (error) {
        console.error('Error retrieving cards:', error);
        mongoose.connection.close();
    }
};

viewCards();
