import "./App.css"
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Recipes from './components/recipes';
import Cards from './components/cards';
import FullRecipe from './components/FullRecipe';
import { RecipesProvider } from './components/recipesContext';

function App() {
  return (
    <div className="App">
      <RecipesProvider>
        <Router>
          <Header />
          <Routes>
           <Route path="/" element={<Recipes />} />
            <Route path="/cards" element={<Cards/>} />
            <Route path="/full-recipe" element={<FullRecipe />} />
          </Routes>
          <Cards/>
        </Router>
      </RecipesProvider>
    </div>
  );
}

export default App;
