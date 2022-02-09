import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ThemeContext from '../../contexts/ThemeContext';

const Navbar = () => {
  const darkTheme = useContext(ThemeContext);

  return (
    <nav className={darkTheme.darkTheme ? "dark" : "light"}>
      <Link to='/'>Accueil</Link> <br/>
      <Link to='/about'>Agence</Link> <br/>
      <Link to='/works'>Projects</Link> <br/>
      <button onClick={darkTheme.toggleTheme}>Changer le thème</button>
    </nav>
  )
};

export default Navbar;