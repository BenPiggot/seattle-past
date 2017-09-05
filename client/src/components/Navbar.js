import React from 'react';
import AppBar from 'material-ui/AppBar';
import {grey800} from 'material-ui/styles/colors.js'

/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */
const Navbar = () => (
  <AppBar
    style={{background: grey800, fontFamily: 'Raleway'}}
    title="Title"
    iconClassNameRight="muidocs-icon-navigation-expand-more"
  />
);

export default Navbar;