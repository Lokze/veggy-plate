import './App.css';
import Header from './components/header';
import Recipes from './components/recipes';
import Cards from './components/cards';
import FullRecipe from './components/FullRecipe';
import { RecipesProvider } from './components/recipesContext';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
   
    <div className="App">
      <RecipesProvider>
      <Router>
          <Header />
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
