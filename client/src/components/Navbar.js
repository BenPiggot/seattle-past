import React, { Component } from 'react';
import { connect } from 'react-redux';
import AppBar from 'material-ui/AppBar';
import { Tab } from 'material-ui/Tabs';
import {grey300} from 'material-ui/styles/colors.js';
import * as actions from '../actions';

/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */
class Navbar extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.props.fetchUser()
  }

  handleClick() {
    console.log('clicked')
  }

  render() {
    return (
      <AppBar
        style={{backgroundColor: grey300, color: '#999', fontFamily: 'Raleway'}}
        title="Seattle Past"
        iconClassNameRight="muidocs-icon-navigation-expand-more"
      >
        { this.props.auth ? <Tab onClick={this.handleClick} label={`Welcome ${this.props.auth.username}`} /> : null }
      </AppBar>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps, actions)(Navbar);