import React, { useContext, useState } from 'react'
import { RecipesContext } from './recipesContext'

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
          <a href="#" className="green-button">View Recipe</a>
        </li>
      ))}
    </ul>
  </div>
  )
}

export default Cards
