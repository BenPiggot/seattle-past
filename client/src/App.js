import React, { Component } from 'react';
import { Provider } from 'react-redux';
import SeattleMap from './components/Map';
import Navbar from './components/Navbar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

class App extends Component {
  render() {
    return (
      <Provider>
        <MuiThemeProvider>
          <div>
            <Navbar />
            <SeattleMap />
          </div>
        </MuiThemeProvider>
      </Provider>
    )
  }
}

export default App;