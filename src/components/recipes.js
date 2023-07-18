import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Recipes = () => {

    const [recipes, setRecipes]= useState([]);

    useEffect(() =>{
        const fetchRecipes  = async () =>{
            try{let response;
                response= await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=fab7982aaa8b44e3809eb0f85c74f923&query=${document.getElementById("query").value}&diet=vegetarian`)
                .catch(function(error){
                    if (error.response) {
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                    }
                });

                setRecipes(response.data.results);}

            catch (error) {
             console.error('Error fetching recipes:', error);
            }
        };

        document.getElementById('submit').addEventListener("click", function(event){event.preventDefault()});
        document.getElementById('submit').addEventListener('click', fetchRecipes)

        return () => {
            document.getElementById('submit').removeEventListener('click', fetchRecipes);
        };
   
    }, []);


  return (
    <div>
      <form>
        <h3>Search your vegetarian plate</h3>
        <input type="text" id="query" defaultValue="Search" />
        <button id="submit">Submit</button>
      </form>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id}>{recipe.title}</li>
        ))}
      </ul>
    </div>
  )
}


export default Recipes

/*fab7982aaa8b44e3809eb0f85c74f923*/