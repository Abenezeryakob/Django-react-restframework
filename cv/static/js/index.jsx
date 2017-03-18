import React from 'react';
import ReactDOM from 'react-dom';
import Credents from './components/credents'
var NewComponent = React.createClass({
  render: function() {
    return (
      <div>
        <div className="awesome" style={{border: '1px solid red'}}>
          Test of simple working komponent
        </div>
        <p>Enter your HTML here</p>

      </div>
    );
  }
});



  ReactDOM.render(
    <div>
      <Credents></Credents>
    </div>,


    document.getElementById('root')
  );
