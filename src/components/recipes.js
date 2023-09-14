import React, { useContext, useState } from 'react';
import axios from 'axios';
import { RecipesContext } from './recipesContext';
import './recipesContext'

const Recipes = () => {
  const [query, setQuery] = useState('');
  const { setRecipes } = useContext(RecipesContext);

  const handleSubmit = async (event) => {
    event.preventDefault(); 

    try {
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API}=${query}&diet=vegetarian`
      );
      setRecipes(response.data.results);
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  };

  return (
    <div>
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



