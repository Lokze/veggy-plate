import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { RecipesContext } from '../recipesContext';
import axios from 'axios';
import { Helmet } from 'react-helmet';
import './FullRecipe.css'

const FullRecipe = () => {
  const { recipes } = useContext(RecipesContext);
  const { id } = useParams();
  const [recipeDetails, setRecipeDetails] = useState(null);

  useEffect(() => {
   
    const selectedRecipe = recipes.find((recipe) => recipe.id === parseInt(id));

    
    const fetchFullRecipe = async () => {
      try {
        const response = await axios.get(
          `https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.REACT_APP_API}`
        );
        setRecipeDetails(response.data);
      } catch (error) {
        console.error('Error fetching full recipe:', error);
      }
    };

    
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
    <Helmet>
      <title>{recipeDetails.title}</title>
      <meta name='description' content={'Find all about '+recipeDetails.title}/>
      <meta name='keywords' content={'Recipes, Vegetarian, Vegetarian Recipes,'+recipeDetails.title}/>
    </Helmet>
     <div className="recipe-container">
    <div className="recipe-image">
      <img src={recipeDetails.image} alt={recipeDetails.title} />
    </div>
    <div className="recipe-details">
      <h2 >{recipeDetails.title}</h2>
      <div className="recipe-info">
        <p>Difficulty: {recipeDetails.difficulty}</p>
        <p>Prep Time: {recipeDetails.readyInMinutes} minutes</p>
        <p>Servings: {recipeDetails.servings}</p>
        <p>Price: {recipeDetails.pricePerServing} USD</p>
      </div>
    </div>
  </div>

    
      <div className="recipe-description">
      <h3>Description:</h3>
      <p>{cleanDescription}</p>
    </div>

  
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