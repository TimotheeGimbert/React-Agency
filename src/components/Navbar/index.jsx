import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <Link to='/'>Home</Link> <br/>
    <Link to='/works/2021'>Works 2021</Link> <br/>
    <Link to='/works/2022'>Works 2022</Link> <br/>
  </nav>
);

export default Navbar;