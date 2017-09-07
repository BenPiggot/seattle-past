import React, { Component } from 'react';
import PropTypes from 'prop-types';
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

    this.handleRoutes = this.handleRoutes.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  static contextTypes = {
    router: PropTypes.object
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

  handleRoutes(e, route) {
    this.context.router.history.push(route)
    this.handleClose()
  }

  render() {
    return (
      <AppBar
        style={{backgroundColor: grey300, color: '#999', fontFamily: 'Raleway'}}
        title="Seattle Past"
        onLeftIconButtonTouchTap={this.handleToggle}
        iconClassNameRight="muidocs-icon-navigation-expand-more"
      >
        { this.props.auth ? <Tab onClick={this.handleClick} label={`Welcome ${this.props.auth.username}`} /> : null }
        <Drawer
          docked={false}
          width={250}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
          <MenuItem onClick={(e) => this.handleRoutes(e, '/')}>Home</MenuItem>
          <MenuItem onClick={(e) => this.handleRoutes(e, '/capitol-hill')}>Capitol Hill and the Central Area</MenuItem>
          <MenuItem onClick={(e) => this.handleRoutes(e, '/rainier-valley')}>Rainier Valley</MenuItem>
          <MenuItem onClick={(e) => this.handleRoutes(e, '/west-seattle')}>West Seattle</MenuItem>
          <MenuItem onClick={(e) => this.handleRoutes(e, '/north-seattle')}>North Seattle</MenuItem>
          <MenuItem onClick={(e) => this.handleRoutes(e, '/ballard')}>Ballard</MenuItem>
          <MenuItem onClick={(e) => this.handleRoutes(e, '/udistrict')}>The U District and Fremont</MenuItem>
          <MenuItem onClick={(e) => this.handleRoutes(e, '/downtown')}>Downtown and Queen Anne</MenuItem>
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