const express = require('express');
const router = express.Router();
const templateController = require('../controllers/templateController');

router.post("/create-template", templateController.createTemplate);

// Get all templates
router.get("/", templateController.getAllTemplates);
// Get a single template by ID
router.get("/:id", templateController.getTemplateById);
// Update a template by ID
router.put("update/:id", templateController.updateTemplate);
// Delete a template by ID
router.delete("delete/:id", templateController.deleteTemplate);

module.exports = router;