const express = require('express');
const router = express.Router();
const templateController = require('../controllers/templateController');


// Get all templates
router.get("/", templateController.getAllTemplates);
router.post("/create", templateController.createTemplate);
// New route for fetching IDs
router.get("/get-all-ids", templateController.getAllIds);


module.exports = router;