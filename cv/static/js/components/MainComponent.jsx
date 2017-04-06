import NavigationBar from './NavigationBar'
import TitleAndIdentity from './TitleAndIdentity'
import Credents from './credents'
import Education from './education'
import AboutMe from './about'
import React from 'react';
import { connect } from 'react-redux';
import { Button, ButtonGroup} from 'react-bootstrap';
import {navbarClicked } from '../actions/action'

export class MainContainer extends React.Component {

  constructor(props){
  super(props);
  }
  renderView(){
    if(this.props.navbar.skill){
      return('skill component')
    }
    if(this.props.navbar.work){
      return(<Credents/>)
    }
    if(this.props.navbar.education){
      return(<Education/>)
    }
    if(this.props.navbar.about){
      return(<AboutMe/>)
    }

  }
  render() {
    return (
    <div className="main-content">
      <TitleAndIdentity/>
      <NavigationBar props = {this.props}/>
      <div className="container">
        {this.renderView()}
      </div>
	  </div>
    )
  }
}

const mapStateToProps  = ({navbar}) => {
  console.log(navbar)
  return   {navbar};
};

export default connect(mapStateToProps,{navbarClicked} )(MainContainer);
