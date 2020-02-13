import React from 'react';
import Flexbox from '../Flexbox/Flexbox';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { props } from 'utils/theme';
import { ROUTES } from 'utils/constants';

const Navbar = () => {
  return (
    <Header flex="100" justifyContent="center" alignItems="center">
      {Object.keys(ROUTES).map(function(key) {
        const route = ROUTES[key];
        return (
          <NavbarElement key={route.title}>
            <NavLink to={route.path}>{route.title}</NavLink>
          </NavbarElement>
        );
      })}
    </Header>
  );
};

const Header = styled(Flexbox)`
  background-color: ${props.background.primary};
  padding: 10px;
  margin-bottom: 2%;
`;

const NavbarElement = styled.div`
  margin-right: 2%;
  color: black;
  font-size: 20px;
`;

export default Navbar;
