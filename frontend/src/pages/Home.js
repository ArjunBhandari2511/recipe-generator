import React from "react";
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="heroSection">
      <h1>Welcome to the Custom Recipe Generator!</h1>
      <p>Get personalized recipes based on your ingredients and preferences.</p>
      <Button
        label="Get Started"
        icon="pi pi-arrow-right"
        className="p-button-raised p-button-rounded p-button-primary"
        onClick={() => navigate("/generate-recipe")}
      />
    </div>
  );
};

export default Home;
