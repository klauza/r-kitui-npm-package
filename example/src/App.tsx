import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from './Navbar';
import Documentation from './Documentation';
import Home from './Home';

const Content = styled.div`
  width: 100%;
  height: 100%;
`;

class App extends Component {
  render() {
    return (
      <HashRouter basename='/'>
        <Content>
          <Navbar />

          <Route exact path="/" component={Home} />
          <Route path="/docs" component={Documentation} />
        </Content>
      </HashRouter>
    );
  }
}

export default App;
