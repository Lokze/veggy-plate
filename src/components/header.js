import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {

  return (
    <header>
      <Link to={`/`}>
      <h1 ><a id='home' href='/'>Veggy-Plate</a></h1>
      </Link>
    </header>
    
  )
}

export default Header
