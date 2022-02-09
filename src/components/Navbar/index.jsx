import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <Link to='/'>Accueil</Link> <br/>
    <Link to='/about'>Agence</Link> <br/>
    <Link to='/works'>Projects</Link> <br/>
  </nav>
);

export default Navbar;