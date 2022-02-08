import React, { useContext, useEffect } from 'react';
import ThemeContext from '../../contexts/ThemeContext';

const StudyCases = () => {
  const theme = useContext(ThemeContext);

  useEffect(() => {
    setTimeout(() => {
      theme.toggleTheme();
    }, 1000);
  });

  return (
    <>
      <p>This is a list of case-studies </p>
      <p>The current theme is changing with useEffect ! {theme.darkTheme.toString()} </p>
      <button onClick={theme.toggleTheme}>Changer le theme</button>
    </>
  )
};

export default StudyCases;