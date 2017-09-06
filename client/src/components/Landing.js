import React, { Component } from 'react';
import SeattleMap from './Map';
import './Landing.css';

class Landing extends Component {
  render() {
    return (
      <div>
        <SeattleMap zoom={12}/>
        <div className="overlay" />
        <div className="sign-in">
          <h1 className="title">Ghosts of Seattle Past</h1>
          <h1><a href='/auth/facebook'>Sign in with Facebook</a></h1>
          <h1><a href='/auth/twitter'>Sign in with Twitter</a></h1>
          <h1><a href='/auth/instagram'>Sign in with instagram</a></h1>
        </div>
      </div>
    )
  }
}

export default Landing;