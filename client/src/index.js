import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import logger from 'redux-logger';

import reducers from './reducers';
import App from './App';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const store = createStore(reducers, {}, applyMiddleware(logger, reduxThunk));

render(<Provider store={store}>
        <MuiThemeProvider>
          <App />
        </MuiThemeProvider>
      </Provider>, document.getElementById('root'));