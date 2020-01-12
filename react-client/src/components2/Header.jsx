import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  hashHistory
} from "react-router-dom";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from "reactstrap";

const Header = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar  navbar-expand-lg navbar-dark grey scrolling-navbar">
      <Link to="/" className="navbar-brand">
        <strong>GeekGhost</strong>
      </Link>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link to="/" className="nav-link waves-effect waves-light">
              Home <span className="sr-only"></span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/women" className="nav-link waves-effect waves-light">
              Women
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/men" className="nav-link waves-effect waves-light">
              Men
            </Link>
          </li>
        </ul>
        <ul className="navbar-nav nav-flex-icons">
          <li className="nav-item">
            <Link to="/cart" className="nav-link waves-effect waves-light">
              <i className="fas fa-cart-arrow-down"></i>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/account" className="nav-link waves-effect waves-light">
              <i className="fas fa-user-alt"></i>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
