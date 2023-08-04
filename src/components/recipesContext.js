import React, { createContext, useState } from 'react'

const RecipesContext = createContext();

const RecipesProvider = ({children}) => {
const [recipes, setRecipes] = useState([]);

  return (
    <RecipesContext.Provider value={{recipes, setRecipes}}>
    {children}
    </RecipesContext.Provider>
  )
}

export { RecipesContext, RecipesProvider };
