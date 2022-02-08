import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import ThemeContext from '../../contexts/ThemeContext';

const Works = () => {
  const { year } = useParams();
  const theme = useContext(ThemeContext);

  return (
    <>
      <Link to='/works/case-studies/'>Case Studies {year}</Link> <br/>
      <p>The current theme is dark ? {theme.darkTheme.toString()}</p>
      <button onClick={theme.toggleTheme}>Changer le theme</button>
    </>
  )
};

export default Works;