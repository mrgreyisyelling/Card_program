const express = require('express');
const router = express.Router();
const templateController = require('../controllers/templateController');


// Get all templates
router.get("/", templateController.getAllTemplates);
router.post("/create-template", templateController.createTemplate);
// New route for fetching IDs
router.get("/get-all-ids", templateController.getAllIds);
// Route for fetching a single template by ID
router.get("/:id", templateController.getTemplateById);


module.exports = router;