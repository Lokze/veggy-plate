import React, { useContext, useState } from 'react'
import { RecipesContext } from './recipesContext'

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

export default Cards
