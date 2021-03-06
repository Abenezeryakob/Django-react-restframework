import NavigationBar from './NavigationBar'
import TitleAndIdentity from './TitleAndIdentity'
import Credents from './credents'
import Education from './education'
import AboutMe from './about'
import Adress from './adress'
import Skills from './skills'
import React from 'react';
import { connect } from 'react-redux';
import { Button, ButtonGroup} from 'react-bootstrap';
import {navbarClicked } from '../actions/action'
import {Grid, Row,Col,code} from 'react-bootstrap';

export class MainContainer extends React.Component {

  constructor(props){
  super(props);
  }
  renderView(){
    if(this.props.navbar.skill){
      return(<Skills/>)
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
      <div className="">
          <Grid>
            <Row className="show-grid">
              <Col xs={10} md={9}>{this.renderView()}</Col>
              <Col className="adress-container" xs={6} md={3}><Adress/> </Col>
            </Row>
          </Grid>

      </div>
	  </div>
    )
  }
}

const mapStateToProps  = ({navbar}) => {

  console.log(navbar)
  return   {navbar};
};

export default connect(mapStateToProps,{navbarClicked})(MainContainer);
