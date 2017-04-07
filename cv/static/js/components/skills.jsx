import React from 'react';
import {Grid, Row,Col,code} from 'react-bootstrap';
import {getDefaultSkill } from '../actions/action'
import { connect } from 'react-redux';
import ReactStars from 'react-stars'


class Skills extends React.Component {
  constructor(props){
    super(props);
  }
  componentWillMount(){
    this.props.getDefaultSkill();
    console.log(this.props)

  }

  renderTableBody(){
    return(
      this.props.skills.skill.map((data)=>{

        return(
              <tr>
                <td><h6  className="table-text">{data.id}</h6></td>
                <td>
                  <img className="credent-site-link-image" height="40" width="50" src={data.img} />
                  <h6 className="table-text">{data.name}</h6>
                </td>
                <td><h6 className="table-text">{data.type}</h6></td>
                <td> <ReactStars value={parseInt(data.grade)} onChange={1} edit={false} count={5}  size={15} color2={'#ffd700'} />
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
          <thead>
            <tr>
              <th className = "position" >
                <p>#</p>
              </th>
              <th  className = 'table-img' >
                <p>Name</p>
              </th>
              <th className = "type" >
                <p>Type</p>
              </th>
              <th  className ='grade' >
                <p>Grade</p>
              </th>
            </tr>
          </thead>
        <tbody>
        {this.renderTableBody()}
        </tbody>
      </table>
      </div>
    )
  }
}
const mapStateToProps  = ({skills}) => {
  console.log(skills)
  return   {skills};
};


export default connect(mapStateToProps,{getDefaultSkill} )(Skills);
