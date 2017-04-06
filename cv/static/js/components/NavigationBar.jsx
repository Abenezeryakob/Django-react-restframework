import {Nav, Image,Navbar,NavItem,Button, ButtonGroup,Jumbotron} from 'react-bootstrap';
import React from 'react';
var FontAwesome = require('react-fontawesome');
export default class NavigationBar extends React.Component {
  render() {
    return (
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={3} href="#"><h4><FontAwesome name='bar-chart' /> Skills</h4></NavItem>
            <NavItem eventKey={1} href="#"><h4><FontAwesome name='briefcase' />  Work</h4></NavItem>
            <NavItem eventKey={2} href="#"><h4><FontAwesome name='graduation-cap' /> Education</h4></NavItem>
            <NavItem eventKey={2} href="#"><h4><FontAwesome name='user-circle-o' /> About me</h4></NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

    )
  }
}
