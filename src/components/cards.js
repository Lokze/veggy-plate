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
            <p>{recipe.title}</p>
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
