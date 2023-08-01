import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { RecipesContext } from './recipesContext';
import axios from 'axios';

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

  if (!recipeDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="Full">
      {/* Display the full recipe details */}
      <h2>{recipeDetails.title}</h2>
      <img src={recipeDetails.image} alt={recipeDetails.title} />
      <p>{recipeDetails.instructions}</p>
      {/* Add any other relevant recipe details */}
    </div>
  );
};

export default FullRecipe;