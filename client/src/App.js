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
          <Route exact path="/map" render={(props) => <SeattleMap zoom={12} neighborhoods={true} />} />
          <Route exact path="/capitol-hill" render={(props) => <SeattleMap zoom={14} lat={47.6253} long={-122.3022} />} />
          <Route exact path="/rainier-valley" render={(props) => <SeattleMap zoom={14} lat={47.5361} long={-122.2752} />} />
          <Route exact path="/west-seattle" render={(props) => <SeattleMap zoom={14} lat={47.5667} long={-122.3868} />} />
          <Route exact path="/north-seattle" render={(props) => <SeattleMap zoom={14} lat={47.7086} long={-122.3232} />} />
          <Route exact path="/downtown" render={(props) => <SeattleMap zoom={14} lat={47.6147} long={-122.3448} />} />
          <Route exact path="/ballard" render={(props) => <SeattleMap zoom={14} lat={47.6687} long={-122.3736} />} />
          <Route exact path="/udistrict" render={(props) => <SeattleMap zoom={14} lat={47.6628} long={-122.3139} />} />
        </div>
      </BrowserRouter>
    )
  }
}

export default App;