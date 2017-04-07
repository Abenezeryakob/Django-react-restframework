import React from 'react';
import { connect } from 'react-redux';
import { Button, ButtonGroup} from 'react-bootstrap';
import {getDefaultAdress } from '../actions/action'
import {Image} from 'react-bootstrap';
var FontAwesome = require('react-fontawesome');
var styles = {
  center:{
    textAlign:'center'
  }
};

class Adress extends React.Component {

 constructor(props){
  super(props);
 }
 componentWillMount(){
    this.props.getDefaultAdress();

  }

  createListItems(){
      return (
        this.props.adress.adress.map((data)=>{
         return(
           <div>
           <div key={1}>
             <h6 className="adress-text"><FontAwesome className="adress-text" name='user' />   {data.name}</h6>
           </div>
            <div key={3}>
              <h6 className="adress-text"><FontAwesome name='phone-square' />   {data.phone}</h6>
           </div>
            <div key={4}>
              <h6 className="adress-text"><FontAwesome name='envelope' />   {data.email}</h6>
           </div>
             <div key={2}>
              <h6 className="adress-text"><FontAwesome name='map-marker' />   {data.street} <br/>{data.post}</h6>
           </div>
         </div>
         )
         })
      )
  }
  render() {
    return (
      <div className="adress-container">
        <div className="adress-image-container">
          <div className="image-cropper">
            <img className="my-picture" src="https://scontent-arn2-1.xx.fbcdn.net/v/t1.0-9/10438557_650388721742058_145228249471181096_n.jpg?oh=46dd42d542c6abcd30b97770867e0993&oe=594E70C4" alt="This is a picture of me"/>
          </div>
         </div>
        <ul>
          {this.createListItems()}
        </ul>
      </div>
    )
  }
}

const mapStateToProps  = ({adress}) => {

  return   {adress};
};

export default connect(mapStateToProps,{getDefaultAdress} )(Adress);
