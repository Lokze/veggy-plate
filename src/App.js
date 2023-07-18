import './App.css';
import axios from 'axios';
import Header from './components/header';
import Recipes from './components/recipes';
import { Component } from 'react';

function App() {
  return (
   
    <div className="App">
      <Header/>
      <Recipes/>
    </div>
  );
}

export default App;
