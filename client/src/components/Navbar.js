import React, { Component } from 'react';
import { connect } from 'react-redux';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
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
    this.state = {open: false};

    this.handleToggle = this.handleToggle.bind(this);

    this.handleClose = this.handleClose.bind(this);

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.props.fetchUser()
  }

  handleClick() {
    console.log('clicked')
  }

  handleToggle() {
    this.setState({ open: !this.state.open })
  }

  handleClose() {
    this.setState({ open: false })
  }

  render() {
    return (
      <AppBar
        style={{backgroundColor: grey300, color: '#999', fontFamily: 'Raleway'}}
        title="Seattle Past"
        iconClassNameRight="muidocs-icon-navigation-expand-more"
      >
        { this.props.auth ? <Tab onClick={this.handleClick} label={`Welcome ${this.props.auth.username}`} /> : null }
        <Drawer
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
          <MenuItem onClick={this.handleClose}>Menu Item</MenuItem>
          <MenuItem onClick={this.handleClose}>Menu Item 2</MenuItem>
        </Drawer>
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