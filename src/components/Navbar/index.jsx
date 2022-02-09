import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ThemeContext from '../../contexts/ThemeContext';

const Navbar = () => {
  const darkTheme = useContext(ThemeContext);

  return (
    <header>
      <nav className={darkTheme.darkTheme ? "dark" : "light"}>
        <h1>WebSitic Agency</h1>
        <Link to='/'>Accueil</Link> <br/>
        <Link to='/about'>Agence</Link> <br/>
        <Link to='/works'>Projects</Link> <br/>
      </nav>
      <button onClick={darkTheme.toggleTheme}>Changer le thème</button>
    </header>
  )
};

export default Navbar;