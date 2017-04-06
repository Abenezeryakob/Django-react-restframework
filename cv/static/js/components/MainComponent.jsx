import NavigationBar from './NavigationBar'
import TitleAndIdentity from './TitleAndIdentity'
import React from 'react';
import { connect } from 'react-redux';
import { Button, ButtonGroup} from 'react-bootstrap';
import bindeActionCreators from 'react'
import {navbarClicked } from '../actions/action'

export class MainContainer extends React.Component {

  constructor(props){
  super(props);
  }
  componentWillMount(){


  }

  render() {
    return (
    <div className="main-content">
      <TitleAndIdentity/>
      <NavigationBar/>
      <div className="container">


      </div>
	  </div>
    )
  }
}

const mapStateToProps  = ({navbar}) => {
  console.log(navbar)
  return   {navbar};
};

export default connect(mapStateToProps )(MainContainer);
