const express = require("express");
const multer = require("multer");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // what is this for?

// Set up Multer for file uploads
const upload = multer({ dest: "uploads/" });

// Connect to MongoDB
// mongoose
//   .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true }) // what is this for?
//   .then(() => console.log("MongoDB connected"))
//   .catch((err) => console.error(err));

// Routes
app.get("/", (req, res) => {
    res.send("Card Project Backend is running!");
  });

app.post("/api/cards", upload.single("file"), async (req, res) => {
    try {
      const { title, description, qrCodeLink } = req.body;
      const file = req.file;
  
      // Validate required fields
      if (!title || !file) {
        return res.status(400).json({ error: "Title and file are required!" });
      }
  
    //   // Save card data to database (implement model in Step 3)
    //   const newCard = new Card({
    //     title,
    //     description,
    //     qrCodeLink,
    //     filePath: file.path,
    //   });
    //   await newCard.save();

    // Mock saving the card (skip database for now)
    const mockCard = {
        id: new Date().getTime(),
        title,
        description,
        qrCodeLink,
        filePath: file.path,
        createdAt: new Date(),
    };
  
      res.status(201).json({ message: "Card submitted successfully!", card: mockCard });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Server error" });
    }
  });


// Start server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));