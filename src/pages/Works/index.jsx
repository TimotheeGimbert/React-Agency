import React from 'react';
import { Link } from 'react-router-dom';

const Works = () => {

  return (
    <>
      <h1>Au fil des années, nous avons pu accompagner les meilleurs.</h1>
      <p>Découvrez pas à pas comment nous avons été présent pour lancer vos marques préférées.</p>
      <Link to='/works/platon-study-case'>Platon</Link>
      <Link to='/works/solane-study-case'>Solane</Link>
      <Link to='/works/sedal-study-case'>Sedal</Link>
    </>
  )
};

export default Works;