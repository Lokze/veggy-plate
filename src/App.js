import './App.css';
import axios from 'axios';
import Header from './components/header';
import Recipes from './components/recipes';
import Cards from './components/cards';
import { Component } from 'react';
import { RecipesContext } from './components/recipesContext';

function App() {
  return (
   
    <div className="App">
      <Header/>
      <Recipes/>
      <Cards/>
    </div>
  );
}

export default App;
