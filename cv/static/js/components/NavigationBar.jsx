import {Nav, Image,Navbar,NavItem,Button, ButtonGroup,Jumbotron} from 'react-bootstrap';
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
            <NavItem onClick={() => this.props.props.navbarClicked(1)} eventKey={1} href="#"><h5 className="navbar-text"><FontAwesome name='bar-chart' /> Skills</h5></NavItem>
            <NavItem onClick={() => this.props.props.navbarClicked(2)} eventKey={2} href="#"><h5 className="navbar-text"><FontAwesome name='briefcase' />  Work</h5></NavItem>
            <NavItem onClick={() => this.props.props.navbarClicked(3)} eventKey={3} href="#"><h5 className="navbar-text"><FontAwesome name='graduation-cap' /> Education</h5></NavItem>
            <NavItem onClick={() => this.props.props.navbarClicked(4)} eventKey={4} href="#"><h5 className="navbar-text"><FontAwesome name='user-circle-o' /> About me</h5></NavItem>
          </Nav>
          <Nav pullRight>
            <NavItem eventKey={1} href="#"><h5 className="navbar-text"><FontAwesome name='download' /> Save cv as PDF</h5></NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

    )
  }
}
