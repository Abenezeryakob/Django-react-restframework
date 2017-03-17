import React from 'react';
import ReactDOM from 'react-dom';
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
    <NewComponent/>,

    document.getElementById('root')
  );
