const express = require('express');
const router = express.Router();
const qrController = require('../controllers/qrController');
router.post('/submit-action', qrController.createQROnSubmit);
router.get("/", qrController.getAllQRs);
router.get("/:id", qrController.getQR);

module.exports = router;