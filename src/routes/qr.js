const express = require('express');
const router = express.Router();
const qrController = require('../controllers/qrController');
router.post('/submit-action', qrController.createQROnSubmit);
router.put("/update_QRUrl/:id", qrController.createQRUrl);
router.put("/:id/redirect", qrController.updateQRRedirectUrl);
router.get("/", qrController.getAllQRs);
router.get("/:id", qrController.getQR);

// Route to generate a QR code
router.post('/generate', qrController.generateQRCode);


router.put("/updateQRRedirectUrl/:id", qrController.updateQRRedirectUrl);
module.exports = router;