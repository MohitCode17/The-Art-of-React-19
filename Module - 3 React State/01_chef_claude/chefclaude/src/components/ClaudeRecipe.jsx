import React from "react";
import ReactMarkdown from "react-markdown";

const ClaudeRecipe = ({ recipe }) => {
  return (
    <section className="suggested-receipe-section">
      <h2>Chef Claude Recommends:</h2>
      <div className="suggested-recipe-container">
        <ReactMarkdown>{recipe}</ReactMarkdown>
      </div>
    </section>
  );
};

export default ClaudeRecipe;
