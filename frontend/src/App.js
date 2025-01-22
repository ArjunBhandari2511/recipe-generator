import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RecipeGenerator from "./pages/RecipeGenerator";
import "primereact/resources/themes/lara-light-indigo/theme.css"; // PrimeReact theme
import "primereact/resources/primereact.min.css"; // Core PrimeReact CSS
import "primeicons/primeicons.css"; // Icons

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/generate-recipe" element={<RecipeGenerator />} />
      </Routes>
    </Router>
  );
}

export default App;
