import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import bindeActionCreators from 'react'
import {defaultdata } from '../actions/action'
class Credents extends React.Component {

constructor(props){
  super(props);
  console.log(this.props)
}
  componentWillMount(){
    this.props.defaultdata();

    console.log('will mount');
    console.log(this.props.results);
  }
  componentDidMount(){
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
        <Button className ='buttons'>button</Button>
        <ul>
          {this.createListItems()}
        </ul>
      </div>
    )
  }
}


const mapStateToProps  = ({results}) => {
  console.log(results)
  return   {results};
};
const mapDispatchToProps = (dispatch) => {
  return bindeActionCreators({defaultdata:defaultdata},dispatch)
};

export default connect(mapStateToProps,{defaultdata} )(Credents);
