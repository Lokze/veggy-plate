import React, { useContext } from 'react';
import { RecipesContext } from './recipesContext';
import { Link } from 'react-router-dom';

const Cards = () => {
  const { recipes } = useContext(RecipesContext);


  return (
    <div>
      <ul id='cards' className='card-container'>
        {recipes.map((recipe) => (
          <li className='card' key={recipe.id}>
            <p><span>{recipe.title}</span></p>
            <img src={recipe.image} alt={recipe.title} />
            <Link to={`/full-recipe/${recipe.id}`}>
              <button className="green-button">View Recipe</button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cards;


/*import React, { useContext, useState } from 'react'
import { RecipesContext } from './recipesContext'
import { Link } from 'react-router-dom';
import FullRecipe from './FullRecipe';

const Cards = () => {
    const {recipes} = useContext(RecipesContext);

    console.log('Recipes data in Cards.js:', recipes);

  return (
    <div>
    <h2>Recipes in Another Component</h2>
    {recipes ? (
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id}>{recipe.title}</li>
        ))}
      </ul>
    ) : (
      <p>Waiting...</p>
    )}
  </div>
  )
}

export default Cards*/
