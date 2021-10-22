import React from 'react';
import { Link } from 'react-router-dom';
import './header.css'
const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary w-100">
              <Link id="link" to="/" className="nav-link">
                Home
              </Link>            
      
              <Link to="/cadastro" id="link" className="nav-link">
                Cadastro
              </Link>
            
     
    </nav>
  )
}

export default Header;
