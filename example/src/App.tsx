import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import Navbar from './Navbar';
import Footer from './Footer';
import Home from './Home';
import Documentation from './Documentation';

import { PageNotFound } from './reactComponentLib';



class App extends Component {


  render() {

    const NotFound = () => (<PageNotFound style={{marginTop:"50px"}} text="Page not found" />);

    return (
      <HashRouter basename='/'>
      <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/docs" component={Documentation} />
          <Route component={NotFound} />
        </Switch>
      <Footer />
      </HashRouter>
    );
  }
}

export default App;
