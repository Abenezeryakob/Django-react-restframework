import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import {changeSkillFilter} from '../actions/action'
import { connect } from 'react-redux';
import {getDefaultSkill } from '../actions/action'

class FilterComponent extends React.Component {
  constructor(props){
    super(props)

  }
  render() {
    return (
      <div className="filter-button-group">
        <h4 className="table-text"> Filter</h4>
        <ButtonGroup>
          <Button onClick={() => this.props.changeSkillFilter('Programming')}>Programming</Button>
          <Button onClick={() => this.props.changeSkillFilter('Software framework')}>Software framework</Button>
          <Button onClick={() => this.props.changeSkillFilter('Self taught')}>Self taught</Button>
          <Button onClick={() => this.props.changeSkillFilter('Language')}>Language</Button>
          <Button onClick={() => this.props.changeSkillFilter('Other')}>Other</Button>
        </ButtonGroup>
    </div>)
  }
}
const mapStateToProps  = ({skills}) => {
  return   {skills};
};

export default connect(mapStateToProps,{changeSkillFilter})(FilterComponent);
