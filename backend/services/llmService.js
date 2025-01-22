import Groq from "groq-sdk";

// Initialize Groq client with API key from environment variables
const groq = new Groq({ apiKey: "your_api_key" });

export const generateRecipe = async (ingredients, preferences) => {
  // Construct the prompt
  const prompt = `Create a ${preferences || "general"} recipe using the following ingredients: ${ingredients}. Provide step-by-step instructions.`;

  try {
    // Use Groq SDK to get the completion
    const chatCompletion = await groq.chat.completions.create({
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
      model: "llama-3.3-70b-versatile", // Specify the model
    });

    // Extract and return the content from the LLM response
    return chatCompletion.choices[0]?.message?.content || "No response received.";
  } catch (error) {
    console.error("Error generating recipe:", error.message);
    throw new Error("Failed to generate recipe. Please try again later.");
  }
};
