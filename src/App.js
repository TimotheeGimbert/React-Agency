import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Works from './pages/Works';
import Navbar from './components/Navbar';
import StudyCase from './components/StudyCase';
import ThemeContext from './contexts/ThemeContext';


const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <ThemeContext.Provider value={{
      darkTheme,
      toggleTheme: () => setDarkTheme(darkTheme => !darkTheme)
    }}>

      <Router basename="/React-Agency">
        <div className={darkTheme ? "App theme--dark" : "App"}>
          <Navbar />
          <Routes>
            <Route path='/' element={ <Home /> } />
            <Route path='/about' element={ <About /> } />
            <Route path='/works' element={ <Works /> } />
            <Route path='/works/:client-study-case' element={ <StudyCase /> } />
          </Routes>
        </div>
      </Router>

    </ThemeContext.Provider>
  )
}

export default App;