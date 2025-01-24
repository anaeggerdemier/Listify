import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderWrapper, Title, Nav } from './HeaderStyle';

const Header = () => (
  <HeaderWrapper>
    <Title>Todo App</Title>
    <Nav>
      <ul>
        <NavItem to="/">Home</NavItem>
        <NavItem to="/login">Login</NavItem>
        <NavItem to="/register">Register</NavItem>
      </ul>
    </Nav>
  </HeaderWrapper>
);

const NavItem = ({ to, children }) => (
  <li>
    <Link to={to}>{children}</Link>
  </li>
);

export default Header;
