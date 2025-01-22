const express = require("express");
const {getRecipe} = require("../controllers/recipeController");

const router = express.Router();

// Route to generate a recipe
router.post("/generate" , getRecipe);

module.exports = router;