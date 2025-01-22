const {generateRecipe} = require("../services/llmService");

const getRecipe = async (req, res) => {
    try {
        const {ingredients , preferences} = req.body;

        // Validate Input
        
        if(!ingredients || ingredients.length === 0) {
            return res.status(400).json({error : 
                "Ingredients are required!!!"
            });
        }

        // Call the LLM Service to generate a recipe
        const recipe = await generateRecipe(ingredients, preferences);
        res.status(200).json({recipe});
    } catch (error) {
        console.error("Error generating a recipe", error.message);
        res.status(500).json({error : "Failed to Generate a Recipe"});
    }
};

module.exports = {getRecipe};