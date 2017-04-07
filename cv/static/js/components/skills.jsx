import React from 'react';
import {Grid, Row,Col,code} from 'react-bootstrap';
import {getDefaultSkill } from '../actions/action'
import { connect } from 'react-redux';



class Skills extends React.Component {
  constructor(props){
    super(props);
  }
  componentWillMount(){
    this.props.getDefaultSkill();

  }
  render() {
    return (
      <div className="section">


      </div>
    )
  }
}
const mapStateToProps  = ({skills}) => {
  return   {skills};
};


export default connect(mapStateToProps,{getDefaultSkill} )(Skills);
