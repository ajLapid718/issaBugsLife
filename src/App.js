import React, { Component } from 'react';
import Request from './Request.js';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      requestedZip: ""
    }
  }

  updateZip = (event) => {
      this.setState({
        requestedZip: event.target.value
    })
    // alert("event.target.value: " + String(event.target.value) + ", requestedZip: " + String(this.state.requestedZip))
  }

  render() {
    return (
      <div className="main">
        <div className="navigation">
          <div className="Title">Zip City Search</div>
          <input type="number" onChange={this.updateZip} defaultValue="11234" />
          <div className="empty"> Zip City Search </div>
        </div>
        <div className="allResults">
          <Request requestZip={this.state.requestedZip} />
        </div>
      </div>
    );
  }
}

export default App;
