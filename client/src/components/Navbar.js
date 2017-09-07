import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Modal from 'react-modal';

import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import { Tab } from 'material-ui/Tabs';
import {grey300} from 'material-ui/styles/colors.js';
import * as actions from '../actions';

import LocationForm from './LocationForm';

/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */
 const customStyles = {
    content: {
    position: 'absolute',
    top: '100px',
    left: '100px',
    right: '100px',
    bottom: '100px',
    border: '1px solid #ccc',
    background: '#fff',
    overflow: 'auto',
    WebkitOverflowScrolling: 'touch',
    borderRadius: '4px',
    outline: 'none',
    padding: '20px'
  }
}

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      modalIsOpen: false
    }; 

    this.handleRoutes = this.handleRoutes.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
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

  openModal() {
    this.setState({ modalIsOpen: true })
  }

  closeModal() {
    this.setState({ modalIsOpen: false })
  }

  handleRoutes(e, route) {
    this.context.router.history.push(route)
    this.handleClose()
  }

  handleLogout() {
    document.location = '/api/logout';
  }

  render() {
    return (
      <AppBar
        style={{backgroundColor: grey300, color: '#999', fontFamily: 'Raleway'}}
        title="Seattle Past"
        onLeftIconButtonTouchTap={this.handleToggle}
        iconClassNameRight="muidocs-icon-navigation-expand-more"
      >
        { this.props.auth ? <Tab onClick={this.handleLogout} label={`Logout`} /> : null }
        { this.props.auth ? <Tab style={{ margin: '0 20px' }} onClick={this.openModal} label={`Add a Location`} /> : null }
        { this.props.auth ? <Tab onClick={this.handleClick} label={`Welcome ${this.props.auth.username}`} /> : null }        

        <Drawer
          docked={false}
          width={250}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
          <MenuItem onClick={(e) => this.handleRoutes(e, '/map')}>Home</MenuItem>
          <MenuItem onClick={(e) => this.handleRoutes(e, '/capitol-hill')}>Capitol Hill and the Central Area</MenuItem>
          <MenuItem onClick={(e) => this.handleRoutes(e, '/rainier-valley')}>Rainier Valley</MenuItem>
          <MenuItem onClick={(e) => this.handleRoutes(e, '/west-seattle')}>West Seattle</MenuItem>
          <MenuItem onClick={(e) => this.handleRoutes(e, '/north-seattle')}>North Seattle</MenuItem>
          <MenuItem onClick={(e) => this.handleRoutes(e, '/ballard')}>Ballard</MenuItem>
          <MenuItem onClick={(e) => this.handleRoutes(e, '/udistrict')}>The U District and Fremont</MenuItem>
          <MenuItem onClick={(e) => this.handleRoutes(e, '/downtown')}>Downtown and Queen Anne</MenuItem>
        </Drawer>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          contentLabel="Example Modal"
          style={customStyles}
        >

          <h1 style={{float: 'left'}}>Add a Place or Event</h1>
          <div style={{float: 'right'}}>
            <FlatButton onClick={this.closeModal} label="Close" />
          </div>
          <LocationForm />
        </Modal>
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