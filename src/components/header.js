import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {

  return (
    <header>
      <Link to={`/`}>
     <h1>Veggy-Plate</h1>
     <p>(click here to go back at home)</p>
      </Link>
    </header>
    
  )
}

export default Header
