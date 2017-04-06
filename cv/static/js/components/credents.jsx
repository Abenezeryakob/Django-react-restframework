import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Button, ButtonGroup} from 'react-bootstrap';
import bindeActionCreators from 'react'
import {defaultdata } from '../actions/action'





class Credents extends React.Component {

 constructor(props){
  super(props);
 }
  componentWillMount(){
    this.props.defaultdata();

  }

  createListItems(){
      return (
        this.props.results.creds.map((data)=>{
         return(
         <li key={data.id}>
           {data.title}
         </li>)
         })
      )
  }
  render() {
    return (
      <div className="section">
          <ButtonGroup>
            <Button>test</Button>
            <Button>test</Button>
            <Button>test</Button>
          </ButtonGroup>
        <ul>
          {this.createListItems()}
        </ul>
      </div>
    )
  }
}


const mapStateToProps  = ({results}) => {
  return   {results};
};
const mapDispatchToProps = (dispatch) => {
  return bindeActionCreators({defaultdata:defaultdata},dispatch)
};

export default connect(mapStateToProps,{defaultdata} )(Credents);
