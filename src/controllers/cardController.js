const Card = require("../models/Card");

exports.createBlankCard = async (req, res) => {
    try {
        const newCard = new Card({ title: "Untitled Card", description: "" });
        const savedCard = await newCard.save();

        res.status(201).json({ message: "Blank card created", card: savedCard });
    } catch (error) {
        res.status(500).json({ error: "Failed to create card" });
    }
};

exports.updateCard = async (req, res) => {
    const { id } = req.params;
    const updates = req.body;
    try {
        const updatedCard = await Card.findByIdAndUpdate(id, updates, { new: true });
        if(!updatedCard) return res.status(404).json({ error: "Card not found" });
        res.status(200).json({ message: "Card updated", card: updatedCard });
    } catch (error) {
        res.status(500).json({ error: "Failed to update card" });
    }
};

exports.getCard = async (req, res) => {
    const { id } = req.params;
    try {
        const cardFromDB = await Card.findById(id);
        if(!cardFromDB) return res.status(404).json({ error: "Card not found" });
        res.status(200).json({ message: "Card Found", card: cardFromDB  });
    } catch (error) {
        res.status(500).json({ error: "Failed to get card" });
    }
};

exports.deleteCard = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedCard = await Card.findByIdAndDelete(id);
        if(!deletedCard) return res.status(404).json({ error: "Card not found" });
        res.status(200).json({ message: "Card deleted" });
    } catch (error) {
        res.status(500).json({ error: "Failed to delete card" });
    }
};

exports.getAllCards = async (req, res) => {
    try {
        const allCards = await Card.findAll();
        res.status(200).json({ message: "All Cards", cards: allCards });
    } catch (error) {
        res.status(500).json({ error: "Failed to get cards" });
    }
};

exports.createCard_2 = async (req, res) => {
    const { title, description, category } = req.body;
    try {
        const newCard = new Card({ title, description, category });
        const savedCard = await newCard.save();
        res.status(201).json({ message: "Card created", card: savedCard });
    } catch (error) {
        res.status(500).json({ error: "Failed to create card" });
    }
};



