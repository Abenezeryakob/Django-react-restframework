import React from 'react';
import {Grid, Row,Col,code} from 'react-bootstrap';
import {getDefaultEducation } from '../actions/action'
import { connect } from 'react-redux';
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
                <td>
                  <h6 className="table-text">{data.title}</h6>
                </td>
                <td><h6 className="table-text">{data.name}</h6></td>
                <td>
                  {data.progrress}
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
