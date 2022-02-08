import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Works from './pages/Works';
import Navbar from './components/Navbar';
import CaseStudies from './components/StudyCases';
import ThemeContext from './contexts/ThemeContext';


const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <ThemeContext.Provider value={{
      darkTheme,
      toggleTheme: () => setDarkTheme(darkTheme => !darkTheme)
    }}>

      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/about' element={ <About /> } />
          <Route path='/works' element={ <Works /> } />
          <Route path='/works/study-cases/:client' element={ <CaseStudies /> } />
        </Routes>
      </Router>

    </ThemeContext.Provider>
  )
}

export default App;