import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <div className="header-container">
          <nav className="nav">
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
            <NavLink className="nav-link" to="/about">
              About
            </NavLink>
            <NavLink className="nav-link" to="/form">
              Form
            </NavLink>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
