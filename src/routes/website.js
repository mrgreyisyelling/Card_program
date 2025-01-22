const express = require('express');
const router = express.Router();
const websiteController = require('../controllers/websiteController');
router.post('/submit-action', websiteController.createWebsiteOnSubmit);
router.get("/", websiteController.getAllWebsites);
router.get("/:id", websiteController.getWebsite);

module.exports = router;