import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar: React.FunctionComponent = () => {
  return (
    <nav>
      <div className="nav-wrapper px-1 blue accent-1">
        <NavLink to="/" className="brand-logo">
          React + Typescript
        </NavLink>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/posts">Posts</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
