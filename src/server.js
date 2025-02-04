require('dotenv').config();
const app= require("./app");
const { connectToDatabase } = require("./services/databaseService");
const PORT = process.env.PORT || 5000;

connectToDatabase(process.env.MONGO_URI)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
