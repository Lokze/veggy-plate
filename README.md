Hello this is Veggy-Plate a site that uses the spooncolar API to find vegetarian recipes
![image](https://github.com/Lokze/veggy-plate/assets/51636003/e0921838-67db-4726-9235-0dd1a49892c2)

You can insert the name of the recipe you're looking for or an ingridient to find different recipes with that ingridient
Ingridient            |  Recipe full name
:-------------------------:|:-------------------------:
![image](https://github.com/Lokze/veggy-plate/assets/51636003/1b38b694-f971-4007-ba5e-c896dd601943) | ![image](https://github.com/Lokze/veggy-plate/assets/51636003/756fa6e8-40d7-4ee9-a046-e13756398c72)

To work this site uses the library React to call different components in a single page:

Content of App.js
:-------------------------:
![image](https://github.com/Lokze/veggy-plate/assets/51636003/eb00f373-6b3d-4a3f-bba2-a92a7f0bb222)


This is the first component Recipes
recipes.js|Result
:-------------------------:|:-------------------------:
![image](https://github.com/Lokze/veggy-plate/assets/51636003/77da4640-407c-48c6-9656-a5fd392caf81) | ![image](https://github.com/Lokze/veggy-plate/assets/51636003/f7ec0b08-1b0d-4c0e-8f49-9716a686e5f0)


What it does is crating a html part where the user can input what is searching, the input of the user then get used with the help of the axios library to get the data from the API.
Once the data is taken it use the Context API libary to send the data to a component, called recipesContext.js, that is used as a storege to let other components acces it.

JSX to create html         | Api call and Context
:-------------------------:|:-------------------------:
![image](https://github.com/Lokze/veggy-plate/assets/51636003/3d2e0502-34c7-405e-af41-9416efedbd23)|![image](https://github.com/Lokze/veggy-plate/assets/51636003/847936b1-97e8-4e05-bad1-3059a1be2d9c)

recipesContext.js
:-------------------------:
![image](https://github.com/Lokze/veggy-plate/assets/51636003/6bcf0fa2-7d15-42e7-9f54-9afef972762d)

This is the second component that App.js use cards.js

cards.js|Result
:-------------------------:|:-------------------------:
![image](https://github.com/Lokze/veggy-plate/assets/51636003/e291ee50-9ddc-4a98-9163-3b381924006e)|![image](https://github.com/Lokze/veggy-plate/assets/51636003/70fb3eef-848a-46c1-90b4-b4961db4cc3d)


Here the component get the data from recipeContext.js and creates creates a HTML to put the data in .

App.js then with the use of React Routes creates a new page to see the full recipe when the user clicks the view recipe button
React Routes
:-------------------------:
![image](https://github.com/Lokze/veggy-plate/assets/51636003/0f085a97-d3b8-4d17-937b-cfb190616382)

When the button is pressed and the new page is created the component FullRecipe.js is called to print the all the details of the recipe

FullRecipe.js JSX | Result
:-------------------------:|:-------------------------:
![image](https://github.com/Lokze/veggy-plate/assets/51636003/f854ab59-b157-4903-bc63-5a4d95346288)|![image](https://github.com/Lokze/veggy-plate/assets/51636003/212285c3-7916-4d16-bef2-610b33a35cdd)

It does that by using the Link component, of the Route library, inside cards.js to save the id of the recipe and take it in the new page
where its used to call the spooncolar API again to get the specific recipe details

cards.js Link component| FullRecpie.js API call
:-------------------------:|:-------------------------:
![image](https://github.com/Lokze/veggy-plate/assets/51636003/b83248a1-ec4d-4d33-b7f9-2e0791ca000b)|![image](https://github.com/Lokze/veggy-plate/assets/51636003/6f665d1c-2899-49b9-9d27-47794b60fa84)

When the user has no more use for the recipe it can just sumply click th Veggy-Plate title on the Header to go beack to the starting page and search for a new recipe.


