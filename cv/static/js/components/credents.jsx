import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import defaultdata from '../actions/action'
class Credents extends React.Component {

  componentWillMount(){
    this.props.defaultdata();
      console.log('lalallalallalalallala')
      console.log(this.props.defaultdata())

  }
  render() {
    return (
      <div className="section">
        <div className="section-header">
          <div className="credent_title">
            <h2> Title</h2>
          </div>
          <div className="credent_date">
            <h3> date </h3>
          </div>
        </div>
        <div className="section-content">
          <div className="credent_text">
           <p> Text </p>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps({results}) {
  return {
    results
  };
}

export default connect(mapStateToProps, { defaultdata  })(Credents);
