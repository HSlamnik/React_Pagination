import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import styled from 'styled-components';

import { ROUTES } from 'utils/constants';
import Navbar from './components/Navbar/Navbar';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <Wrapper>
        <Navbar />
        {Object.keys(ROUTES).map(function(key) {
          const route = ROUTES[key];
          return <Route path={route.path} component={route.Component} exact={route.exact} key={route.title} />;
        })}
      </Wrapper>
    </BrowserRouter>
  );
}

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
`;

export default App;
