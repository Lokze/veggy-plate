import './App.css';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Recipes from './components/recipes';
import Cards from './components/cards';
import FullRecipe from './components/FullRecipe';
import { Component } from 'react';
import { RecipesContext } from './components/recipesContext';


function App() {
  return (
   
    <div className="App">
      <Router>
      <Header/>
      <Routes>
          <Route path="/" element={<Recipes />} />
          <Route path="/cards" element={<Cards />} />
          <Route path="/full-recipe" element={<FullRecipe />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
