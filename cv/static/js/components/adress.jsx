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
             <h6 className="adress-text"><FontAwesome name='user' />   {data.name}</h6>
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
