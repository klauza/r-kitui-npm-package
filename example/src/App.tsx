import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import DocMain from './components/DocPages/DocMain';
import Examples from './components/Examples';
// doc pages
import Buttons from './components/DocPages/Buttons';
import Carousels from './components/DocPages/Carousels';
import NotFounds from './components/DocPages/NotFounds';
import Images from './components/DocPages/Images';

import { PageNotFound } from './reactComponentLib';



class App extends Component {


  render() {

    const NotFound = () => (<PageNotFound style={{marginTop:"50px"}} text="Page not found" />);

    return (
      <HashRouter basename='/'>
      <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/docs" component={DocMain} />
          <Route exact path="/docs/buttons" component={Buttons} />
          <Route exact path="/docs/carousels" component={Carousels} />
          <Route exact path="/docs/not-founds" component={NotFounds} />
          <Route exact path="/docs/images" component={Images} />
          <Route exact path="/examples" component={Examples} />
          
          <Route component={NotFound} />
        </Switch>
      <Footer />
      </HashRouter>
    );
  }
}

export default App;
