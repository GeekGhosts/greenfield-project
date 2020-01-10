import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, hashHistory } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import FooterPage from './Footer.jsx'
import Article from '../Article.jsx'
import ListItem from '../Listitem.jsx'
import {
  Collapse,
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

const Acceuil = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <ListItem/>
      <FooterPage/>
    </div>
  );
}

export default Acceuil;
