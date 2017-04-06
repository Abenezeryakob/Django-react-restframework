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
    console.log(this.props.adress)

  }

  createListItems(){
      return (
        this.props.adress.adress.map((data)=>{
         return(
           <div>
           <div key={1}>
             <h5><FontAwesome name='user' />   {data.name}</h5>
           </div>
            <div key={3}>
              <h5><FontAwesome name='phone-square' />   {data.phone}</h5>
           </div>
            <div key={4}>
              <h5><FontAwesome name='envelope' />   {data.email}</h5>
           </div>
             <div key={2}>
              <h5><FontAwesome name='map-marker' />   {data.street} <br/>{data.post}</h5>
           </div>
         </div>
         )
         })
      )
  }
  render() {
    return (
      <div className="section">
        <Image href="../../img/prfile.jpg" circle responsive />
        <ul>
          {this.createListItems()}
        </ul>
      </div>
    )
  }
}

const mapStateToProps  = ({adress}) => {
  console.log(adress)

  return   {adress};
};

export default connect(mapStateToProps,{getDefaultAdress} )(Adress);
