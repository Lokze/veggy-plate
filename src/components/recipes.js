import React, { useContext, useState } from 'react';
import axios from 'axios';
import { RecipesContext } from './recipesContext';

const Recipes = () => {
  const [query, setQuery] = useState(''); // State to store the search query
  const { setRecipes } = useContext(RecipesContext);

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent form submission

    try {
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=fab7982aaa8b44e3809eb0f85c74f923&query=${query}&diet=vegetarian`
      );
      setRecipes(response.data.results);
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  };

  return (
    <div className="recipes-container">
      <form onSubmit={handleSubmit}>
        <h3>Search your vegetarian plate</h3>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search"
        />
        <button type="submit" id="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Recipes;

/*fab7982aaa8b44e3809eb0f85c74f923*/

/*<ul>
{recipes.map((recipe) => (
  <li key={recipe.id}>{recipe.title}</li>
))}
</ul>*/