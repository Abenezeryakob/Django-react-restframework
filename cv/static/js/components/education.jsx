import React from 'react';
import {Grid, Row,Col,code} from 'react-bootstrap';
import {getDefaultEducation } from '../actions/action'
import { connect } from 'react-redux';
import { Line } from 'rc-progress';

import ReactStars from 'react-stars'
import FilterComponent from './filter'


class Education extends React.Component {
  constructor(props){
    super(props);
  }
  componentWillMount(){
    this.props.getDefaultEducation();
    //console.log(this.props)
  }
  renderTableBody(){
    return(

      this.props.education.education.map((data)=>{

        return(
              <tr>
                <td className="education-td-1">
                  <h6 className="table-text">{data.title}</h6>
                </td>
                <td className="education-td-2">
                  <h6 className="credent-site-link-name"> </h6>
                  <a href={'https://'+data.site}>
                    <img className="credent-site-link-image" height="20" width="20" src={'http://www.google.com/s2/favicons?domain='+data.site} />
                    <h6 className="credent-site-link-name">{data.name}</h6>
                  </a>
                </td>
                <td className="education-td-3">
                  <Line className="education-progress-bar" percent={data.progrress} strokeWidth="4" strokeColor="#afdcd1" /> {data.progrress}%
                </td>
            </tr>

        )
        }
      )
    )
  }
  render() {
    console.log(this.props)
    return (
      <div className="section">
        <table>

        <tbody>
        {this.renderTableBody()}
        </tbody>
      </table>
      </div>
    )
  }
}
const mapStateToProps  = ({education}) => {
  console.log(education)
  return   {education};
};


export default connect(mapStateToProps,{getDefaultEducation} )(Education);
