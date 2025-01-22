import axios from "axios";


export const generateRecipe = async (ingredients, preferences) => {
  const response = await axios.post("http://localhost:5000/api/recipes/generate", {
    ingredients,
    preferences,
  });
  return response.data.recipe;
};

