import './App.css';
import Header from './components/header/header';
import Recipes from './components/recipes';
import Cards from './components/cards/cards';
import FullRecipe from './components/FullRecipe/FullRecipe';
import { RecipesProvider } from './components/recipesContext';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Helmet } from 'react-helmet';


function App() {
  return (
   
    <div className="App">
      <RecipesProvider>
      <Router>
          <Header />
          <Helmet>
            <title>Veggy-Plate</title>
            <meta name='description' content='Get recipes for your vegetarian dishes'/>
            <meta name='keywords' content='Recipes, Vegetarian, Vegetarian Recipes'/>
          </Helmet>
          <Routes>
          <Route path="/" element={<Recipes/>}/>
          </Routes>
          <Routes>
            <Route path="/" element={<Cards/>}/>
            <Route path="/full-recipe/:id" element={<FullRecipe />} />
          </Routes>
        </Router>
      </RecipesProvider>
    </div>
  );
}

export default App;
