const express = require('express');
const router = express.Router();
const boardController = require('../controllers/boardController'); // Create this controller

// Create a new board
router.post("/create-board", boardController.createBoard);

// Get all boards
router.get("/", boardController.getAllBoards);

// Get a single board by ID
router.get("/:id", boardController.getBoardById);

// Update a board by ID
router.put("/:id", boardController.updateBoard);

// Delete a board by ID
router.delete("/:id", boardController.deleteBoard);

module.exports = router;
