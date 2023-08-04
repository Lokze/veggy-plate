import React, { useContext, useState } from 'react'
import { RecipesContext } from './recipesContext'
import { Link } from 'react-router-dom';
import FullRecipe from './FullRecipe';

const Cards = () => {
    const {recipes} = useContext(RecipesContext);

    console.log(recipes);

  return (
    <div>
    <ul id='cards' className='card-container'>
      {recipes.map((recipe) => (
        <li className='card' key={recipe.id}>
          <p><span>{recipe.title}</span></p>
          <img src={recipe.image} alt={recipe.title} />
          <Link to="./FullRecipe.js">
          <a  className="green-button">View Recipe</a>
          </Link>
        </li>
      ))}
    </ul>
  </div>
  )
}

export default Cards
