const Board = require('../models/Boards'); // Adjust the path if needed

// Create a new board
exports.createBoard = async (req, res) => {
    try {
        const board = await Board.create(req.body);
        res.status(201).json(board);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get all boards
exports.getAllBoards = async (req, res) => {
    try {
        const boards = await Board.find().populate('owner cards nodes');
        res.status(200).json(boards);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get a single board by ID
exports.getBoardById = async (req, res) => {
    try {
        const board = await Board.findById(req.params.id).populate('owner cards nodes');
        if (!board) return res.status(404).json({ error: 'Board not found' });
        res.status(200).json(board);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update a board by ID
exports.updateBoard = async (req, res) => {
    try {
        const board = await Board.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!board) return res.status(404).json({ error: 'Board not found' });
        res.status(200).json(board);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete a board by ID
exports.deleteBoard = async (req, res) => {
    try {
        const board = await Board.findByIdAndDelete(req.params.id);
        if (!board) return res.status(404).json({ error: 'Board not found' });
        res.status(200).json({ message: 'Board deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
