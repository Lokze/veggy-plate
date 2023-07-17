import './App.css';
import axios from 'axios';
import Header from './components/header';
import Search from './components/search';
import { Component } from 'react';

function App() {
  return (
   
    <div className="App">
      <Header/>
      <Search/>
    </div>
  );
}

export default App;
