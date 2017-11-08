import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>EasyZign</h1>
    <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
    <NavLink to="/startprosedyre" activeClassName="is-active">Startprosedyre</NavLink>
  </header>
);

export default Header;
