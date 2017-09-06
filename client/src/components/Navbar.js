import React from 'react';
import AppBar from 'material-ui/AppBar';
import {grey300} from 'material-ui/styles/colors.js'

/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */
const Navbar = () => (
  <AppBar
    style={{backgroundColor: grey300, color: '#999', fontFamily: 'Raleway'}}
    title="Seattle Past"
    iconClassNameRight="muidocs-icon-navigation-expand-more"
  />
);

export default Navbar;