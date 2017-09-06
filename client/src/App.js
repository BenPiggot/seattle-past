import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import SeattleMap from './components/Map';
import Landing from './components/Landing';
import Navbar from './components/Navbar';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Route exact path="/" component={Landing} />
          <Route exact path="/map" component={SeattleMap} />
        </div>
      </BrowserRouter>
    )
  }
}

export default App;