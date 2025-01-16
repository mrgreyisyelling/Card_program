const express = require('express');
const router = express.Router();
const cardController = require('../controllers/cardController');

router.post("/create-card", cardController.createCard_2);
router.post("/", cardController.createBlankCard);
router.put("/:id", cardController.updateCard);
router.get("/:id", cardController.getCard);
router.delete("/:id", cardController.deleteCard);
router.get("/", cardController.getAllCards);

module.exports = router;
