import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { ProgressSpinner } from "primereact/progressspinner";
import { generateRecipe } from "../services/recipeService";
import "./RecipeGenerator.css";
import { ToastContainer, toast } from "react-toastify";

const RecipeGenerator = () => {
  const [ingredients, setIngredients] = useState("");
  const [preferences, setPreferences] = useState("");
  const [recipe, setRecipe] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerateRecipe = async () => {
    setLoading(true);
    const ingredientsArray = ingredients
      .split(",")
      .map((ingredient) => ingredient.trim());

    try {
      const result = await generateRecipe(ingredientsArray, preferences);
      setRecipe(formatRecipe(result));
      toast("Recipe Generated Successfully")
    } catch (error) {
      console.error("Error generating recipe:", error.message);
    } finally {
      setLoading(false);
    }
  };

  const formatRecipe = (recipeText) => {
    return recipeText
      .replace(/\* /g, "")
      .replace(/\*\*/g, "")
      .replace(/Servings:/g, "<h4>Servings:</h4>")
      .replace(/Prep Time:/g, "<h4>Prep Time:</h4>")
      .replace(/Cook Time:/g, "<h4>Cook Time:</h4>")
      .replace(/Total Time:/g, "<h4>Total Time:</h4>")
      .replace(/Ingredients:/g, "<h4>Ingredients:</h4>")
      .replace(/Instructions:/g, "<h4>Instructions:</h4>")
      .replace(/\n/g, "<br/>");
  };

  return (
    <div className="recipeSection">
      <Card
        title="Generate a Custom Recipe"
        className="p-shadow-5 p-card-title"
        style={{ width: "100%", maxWidth: "600px", margin: "0 auto" }}
      >
        <div className="p-fluid">
          <label htmlFor="ingredients">Ingredients</label>
          <InputText
            id="ingredients"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            placeholder="Enter ingredients separated by commas (e.g., avocado, rice, broccoli)"
            style={{ width: "100%" }}
          />
          <label htmlFor="preferences">Dietary Preferences</label>
          <InputText
            id="preferences"
            value={preferences}
            onChange={(e) => setPreferences(e.target.value)}
            placeholder="e.g., Vegan, Gluten-Free"
            style={{ width: "100%" }}
          />
          <Button
            label="Generate Recipe"
            className="p-button-raised p-button-primary btn"
            onClick={handleGenerateRecipe}
            disabled={loading}
            style={{ width: "100%" }}
          />
        </div>
      </Card>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      {loading && (
        <div className="loadingSpinner">
          <ProgressSpinner style={{ width: "50px", height: "50px" }} />
        </div>
      )}

      {recipe && !loading && (
        <Card
          title="Your Recipe"
          className="p-shadow-3 p-mt-4 recipe-container"
        >
          <div dangerouslySetInnerHTML={{ __html: recipe }} />
        </Card>
      )}
    </div>
  );
};

export default RecipeGenerator;
