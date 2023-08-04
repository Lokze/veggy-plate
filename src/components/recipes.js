import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import { RecipesContext } from './recipesContext';

const Recipes = () => {
  const {recipes ,setRecipes } = useContext(RecipesContext);
  
  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get(
          `https://api.spoonacular.com/recipes/complexSearch?apiKey=fab7982aaa8b44e3809eb0f85c74f923&query=vegetarian&diet=vegetarian`
        );
        setRecipes(response.data.results);
      } catch (error) {
        console.error('Error fetching recipes:', error);
      }
    };

    const handleSubmit = async (event) => {
      event.preventDefault(); // Prevent form submission

      // Fetch recipes
      await fetchRecipes();
    };

    const submitButton = document.getElementById('submit');
    submitButton.addEventListener('click', handleSubmit);

    return () => {
      submitButton.removeEventListener('click', handleSubmit);
    };
  }, [setRecipes]);


  return (
   <div>
      <form>
        <h3>Search your vegetarian plate</h3>
        <input type="text" id="query" placeholder="Search" />
        <button id="submit">Submit</button>
      </form>
    </div>
  )
}


export default Recipes

/*fab7982aaa8b44e3809eb0f85c74f923*/

/*<ul>
{recipes.map((recipe) => (
  <li key={recipe.id}>{recipe.title}</li>
))}
</ul>*/