import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <div className="nav-container">
    <h1>
      <Link className="head-link" to="/Calculator">
        Math Magicians
      </Link>
    </h1>
    <ul className="pages">
      <li><Link className="nav-items" to="/">Home</Link></li>
      <li><Link className="nav-items" to="Calculator">Calculator</Link></li>
      <li><Link className="nav-items" to="Quote">Quote</Link></li>
    </ul>
  </div>
);
export default Navbar;
