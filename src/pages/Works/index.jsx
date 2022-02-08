import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import ThemeContext from '../../contexts/ThemeContext';

const Works = () => {
  const theme = useContext(ThemeContext);

  return (
    <>
      <h1>Au fil des années, nous avons pu accompagner les meilleurs.</h1>
      <p>Découvrez pas à pas comment nous avons été présent pour lancer vos marques préférées.</p>
    </>
  )
};

export default Works;