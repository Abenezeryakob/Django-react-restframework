import React from 'react';
import { connect } from 'react-redux';
import {  ButtonGroup} from 'react-bootstrap';
import bindeActionCreators from 'react'
import {defaultdata } from '../actions/action'
import { Accordion, AccordionItem } from 'react-sanfona';


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
           <AccordionItem className='react-sanfona-item-body' title={`Item ${ data.title }`} slug={data.id} key={data.id}>
                    <div className="credent-accordion-item">
                      <img height="16" width="16" src='http://www.google.com/s2/favicons?domain=www.edocuments.co.uk' />
                      {`Item ${ data.text } content`}
                       <p><img src="https://cloud.githubusercontent.com/assets/38787/8015584/2883817e-0bda-11e5-9662-b7daf40e8c27.gif" /></p>
                    </div>
           </AccordionItem>)
         })
      )
  }
  render() {
    return (
      <div className="section">
        <ul>
          	<Accordion className= 'react-sanfona' activeItems={0}>
              {this.createListItems()}
            </Accordion>

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
