import React, { Component } from 'react';
import './App.css';

import axios from 'axios';
import AZip from './AZip';

class App extends Component {
  constructor() {
    super();
    this.state = {
      requestedZip: '11234',
      data: []
    };
  }

  // componentDidMount() { // If we want the app to render a default zip initially;
  //   this.fetchZipCity(this.state.requestedZip);
  // }

  updateZip = event => {
    this.setState({requestedZip: event.target.value});
    this.fetchZipCity(event.target.value);
  };

  fetchZipCity = requestZip => {
    axios
      .get('http://ctp-zip-api.herokuapp.com/zip/' + String(requestZip))
      .then(response => {
        this.setState({data: response.data});
      })
      .catch(err => {
        this.setState({data: []});
        console.log(err);
      });
  };

  render() {
    return (
      <div className="main">
        <div className="navigation">
          <div className="Title">Zip City Search</div>
          <input
            type="number"
            onChange={this.updateZip}
            value={this.state.requestedZip}
          />
          <div className="empty"> Zip City Search </div>
        </div>
        <div className="allResults">
          <div className="cities-container">
            <div className="cities">
              {this.state.data.map((city, index) => (
                <AZip data={city} key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
