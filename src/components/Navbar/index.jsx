import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <Link to='/'>Home</Link> <br/>
    <Link to='/about'>About the agency</Link> <br/>
    <Link to='/works'>Our projects</Link> <br/>
  </nav>
);

export default Navbar;