import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, hashHistory } from 'react-router-dom';


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
} from 'reactstrap';

const Bar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (

        <nav className="navbar  navbar-expand-lg navbar-dark grey scrolling-navbar">
            <Link to="/"className="navbar-brand" ><strong>GeekGhost</strong></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link to="home"className="nav-link waves-effect waves-light">Home <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                    <Link to="Women" className="nav-link waves-effect waves-light">Women</Link>
                    </li>
                    <li className="nav-item">
                    <Link to="Men" className="nav-link waves-effect waves-light" >Men</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link waves-effect waves-light" >Children</Link>
                    </li>
                </ul>
                <ul className="navbar-nav nav-flex-icons">

                    <li className="nav-item">
                        <a className="nav-link waves-effect waves-light"><i class="fas fa-cart-arrow-down"></i></a>
                    </li>
                    <li className="nav-item">
                        <Link to="signup" className="nav-link waves-effect waves-light"><i class="fas fa-user-alt"></i></Link>
                    </li>
                </ul>
            </div>
        </nav>
  );
}

export default Bar;
