import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ThemeContext from '../../contexts/ThemeContext';

const Navbar = () => {
  const theme = useContext(ThemeContext);

  return (
    <header>
      <nav>
        <h1>WebSitic Agency</h1>
        <Link to='/'>Accueil</Link> <br/>
        <Link to='/about'>Agence</Link> <br/>
        <Link to='/works'>Projects</Link> <br/>
      </nav>
      <button onClick={theme.toggleTheme}>Changer le thème</button>
    </header>
  )
};

export default Navbar;