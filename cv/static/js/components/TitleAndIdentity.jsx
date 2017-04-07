import {Nav, Image,Navbar,NavItem,Button, ButtonGroup,Jumbotron} from 'react-bootstrap';
import NavigationBar from './NavigationBar'
import React from 'react';
var FontAwesome = require('react-fontawesome');
var styles = {
  center:{
    textAlign:'center'
  }
};
export default class TitleAndIdentity extends React.Component {

  render() {
    return (
      <Jumbotron>
        <div className="jumbotron-title">
        <h1 style={styles.center}>CV</h1>
        <p  style={styles.center}>Built with Django,React-Redux, RestApi, Bootstrap </p>
        <h5  style={styles.center}>Yes, it's overkill :)</h5>
         </div>
      </Jumbotron>

    )
  }
}
