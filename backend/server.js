const express = require("express")
const cors = require("cors")

// Load Enviornment Variables
const app = express();
const PORT = 5000;

// Middleware to parse JSON
app.use(express.json());
app.use(cors());

// Import Recipe Routes
const recipeRoutes = require("./routes/recipes");
app.use("/api/recipes", recipeRoutes)

// Start the Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});