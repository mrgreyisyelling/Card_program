require('dotenv').config();
const mongoose = require('mongoose');

// Load Models
const Card = require('../models/Card');
const Board = require('../models/Boards');
const Printer = require('../models/Printers');  
const Owner = require('../models/Owner');
const DeliveryPerson   = require('../models/Delivery');
const Node = require('../models/Node');
const Location = require('../models/Location');
const User = require('../models/User');

// Connect to Database
async function connectToDB() {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to database');
    } catch (error) {
        console.error('Database connection failed:', error.message);
    }
}

// Insert Test Data
async function insertTestData() {
    try {
        const owner = await Owner.create({ name: 'John Doe', email: 'john.doe@example' });
        const location = await Location.create({ name: 'Main Office', address: '123 Main St' });

        const node = await Node.create({
            name: 'Node1',
            type: 'Type1',
            Board: null, // Can be updated later after creating the board
            owner: owner._id,
            nodeID: 'Node123',
        });    

        const printer = await Printer.create({
            name: 'Printer1',
            type: 'Laser',
            owner: owner._id,
            printerID: 'PRN-001',
            location: location._id,
        });

        const board = await Board.create({
            name: 'Main Board',
            type: 'Public',
            owner: owner._id,
            boardID: 'B123',
            cards: [],
            location: '123 Main St',
            nodes: node._id,
        });

        node.Board = board._id;
        await node.save();
        
        const card = await Card.create({
            title: 'Card1',
            description: 'This is a test card',
            category: 'General',
            content: 'Some content',
            cardStatus: 'started',
        });

        board.cards.push(card._id);
        await board.save();

        console.log('Test data inserted successfully');
    } catch (error) {
        console.error('Error inserting test data:', error.message);
    }
}

// Test relationships 
async function testRelationships() {
    try {
        const board = await Board.findOne({ name: 'Main Board' }).populate('owner cards');
        console.log('Populated Board:', board);

        const printer = await Printer.findOne({ name: 'Printer1' }).populate('owner location');
        console.log('Populated Printer:', printer);
    } catch (error) {
        console.error('Error testing relationships:', error.message);
    }
}

// Main function
async function main() {
    await connectToDB();
    await insertTestData();
    await testRelationships();
    mongoose.connection.close();
}

main();