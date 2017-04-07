import React from 'react';
import { connect } from 'react-redux';
import {  ButtonGroup} from 'react-bootstrap';
import bindeActionCreators from 'react'
import {defaultdata } from '../actions/action'
import { Accordion, AccordionItem } from 'react-sanfona';
import {Grid, Row,Col,code} from 'react-bootstrap';
import $ from '../jquery.min'

class Credents extends React.Component {

 constructor(props){
  super(props);
 }
  componentWillMount(){
    this.props.defaultdata();

  }
  showimage(img){
    if(img){
      return(
        <img src={'../../ing/'+img} height="100" width="100" />
      )
    }
  }
  createHtmlelement(data){

  }
  createListItems(){
      return (
        this.props.results.creds.map((data)=>{
         return(
           <AccordionItem className='react-sanfona-item-body' title={` ${ data.title }`} slug={data.id} key={data.id}>
                    <div className="credent-accordion-item">
                      <div className="credent-site-link">
                            <Row className="show-grid">
                              <a href={'https://'+data.site}>
                              <Col xs={7} md={7}>
                                <h6 className="credent-site-link-name">At: </h6>
                                  <img className="credent-site-link-image" height="20" width="20" src={'http://www.google.com/s2/favicons?domain='+data.site} />
                                <h6 className="credent-site-link-name">{data.name}</h6>
                              </Col>
                               </a>
                               <Col xs={5} md={5}>
                                 <h6>
                                    From: {data.fromdate}  To: {data.todate}
                                 </h6>
                               </Col>
                            </Row>
                      </div>
                      <div className="crednt-text">
                        {this.showimage(data.image)}
                        <td dangerouslySetInnerHTML={{__html:  data.text }} />
                      </div>
                    </div>
           </AccordionItem>)
         })
      )
  }
  render() {
    return (
      <div className="section">
          	<Accordion className= 'react-sanfona' activeItems={0}>
              {this.createListItems()}
            </Accordion>
      </div>
    )
  }
}


const mapStateToProps  = ({results}) => {
  return   {results};
};

export default connect(mapStateToProps,{defaultdata} )(Credents);
