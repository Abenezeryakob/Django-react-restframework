import {Nav, Image,Navbar,NavItem,Button, ButtonGroup,Jumbotron} from 'react-bootstrap';
import {navbarClicked } from '../actions/action'

import React from 'react';
var FontAwesome = require('react-fontawesome');
export default class NavigationBar extends React.Component {
  constructor(props){
  super(props);
  console.log(this.props)
  }

  render() {
    return (
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem onClick={() => this.props.props.navbarClicked(1)} eventKey={1} href="#"><h4><FontAwesome name='bar-chart' /> Skills</h4></NavItem>
            <NavItem onClick={() => this.props.props.navbarClicked(2)} eventKey={2} href="#"><h4><FontAwesome name='briefcase' />  Work</h4></NavItem>
            <NavItem onClick={() => this.props.props.navbarClicked(3)} eventKey={3} href="#"><h4><FontAwesome name='graduation-cap' /> Education</h4></NavItem>
            <NavItem onClick={() => this.props.props.navbarClicked(4)} eventKey={4} href="#"><h4><FontAwesome name='user-circle-o' /> About me</h4></NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

    )
  }
}
