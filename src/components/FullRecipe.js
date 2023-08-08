import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { RecipesContext } from './recipesContext';
import axios from 'axios';

const getCookingTime = (analyzedInstructions) => {
  let cookingTime = 0;

  analyzedInstructions.forEach((instruction) => {
    instruction.steps.forEach((step) => {
      cookingTime += step.duration || 0;
    });
  });

  return cookingTime;
};

const FullRecipe = () => {
  const { recipes } = useContext(RecipesContext);
  const { id } = useParams();
  const [recipeDetails, setRecipeDetails] = useState(null);

  useEffect(() => {
    // Find the selected recipe details based on the id
    const selectedRecipe = recipes.find((recipe) => recipe.id === parseInt(id));

    // Fetch the full recipe details using the id from the Spoonacular API (or any other source)
    const fetchFullRecipe = async () => {
      try {
        const response = await axios.get(
          `https://api.spoonacular.com/recipes/${id}/information?apiKey=fab7982aaa8b44e3809eb0f85c74f923&`
        );
        setRecipeDetails(response.data);
      } catch (error) {
        console.error('Error fetching full recipe:', error);
      }
    };

    // Fetch the full recipe details only if the selected recipe is found
    if (selectedRecipe) {
      fetchFullRecipe();
    }
  }, [id, recipes]);

  const removeHtmlTags = (html) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    return doc.body.textContent;
  };

  if (!recipeDetails) {
    return <div>Loading...</div>;
  }

  const cleanDescription = removeHtmlTags(recipeDetails.summary);
  const cleanInstructions = removeHtmlTags(recipeDetails.instructions);


  return (
    
  <div className="Full">
    {/* BLOCK 1*/}
     <div className="recipe-container">
    <div className="recipe-image">
      <img src={recipeDetails.image} alt={recipeDetails.title} />
    </div>
    <div className="recipe-details">
      <h2 >{recipeDetails.title}</h2>
      <div className="recipe-info">
        <p>Difficulty: {recipeDetails.difficulty}</p>
        <p>Prep Time: {recipeDetails.readyInMinutes} minutes</p>
        <p>Cooking Time: {recipeDetails.cookingMinutes} minutes</p>
        <p>Servings: {recipeDetails.servings}</p>
        <p>Price: {recipeDetails.pricePerServing} USD</p>
      </div>
    </div>
  </div>

      {/* Block 2 */}
      <div className="recipe-description">
      <h3>Description:</h3>
      <p>{cleanDescription}</p>
    </div>

     {/*Block 3*/}
    <div className="ingredients-instructions-container">
  <div className="ingredients-container">
    <h3>Ingredients:</h3>
    <ul className="ingredients-list">
      {recipeDetails.extendedIngredients.map((ingredient) => (
        <li key={ingredient.id}>{ingredient.original}</li>
      ))}
    </ul>
  </div>
  <div className="instructions-container">
    <h3>Instructions:</h3>
    <p>{cleanInstructions}</p>
  </div>
</div>
      
    </div>
  );
};

export default FullRecipe;