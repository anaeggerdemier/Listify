import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderWrapper, Title, Nav } from './Header.styled';

const NavItem = ({ to, children }) => (
  <li>
    <Link to={to}>{children}</Link>
  </li>
);

const Header = () => (
  <HeaderWrapper>
    <Title>Listify</Title>
    <Nav>
      <ul>
        {['/', '/login', '/register'].map((path, index) => (
          <NavItem key={index} to={path}>
            {index === 0 ? 'Home' : index === 1 ? 'Login' : 'Register'}
          </NavItem>
        ))}
      </ul>
    </Nav>
  </HeaderWrapper>
);

export default Header;
