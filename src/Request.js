import React, { Component } from 'react';
import AZip from './AZip.js';
import axios from 'axios';
import './Global.css';

class Request extends Component {

	constructor(props) {
        super(props);
        this.state = {
            error: "",
            data: []
        };
    }

    componentDidMount() {
        this.fetchZipCity();
    }

    componentWillReceiveProps(){
        this.fetchZipCity();
    }

    //Maybe fetchZipCity doesn't get called after initial mount?
    fetchZipCity = () => {
        let x = "http://ctp-zip-api.herokuapp.com/zip/" + String(this.props.requestZip) + "";
        console.log(x);
        axios.get("http://ctp-zip-api.herokuapp.com/zip/" + String(this.props.requestZip) + "")
            .then(response => {
            	this.setState({
            		data: response.data,
            	});
            })
            .catch( err => {
                this.setState({
                    error: err,
                });
                console.log(err)
            });
    }

    render(){
        if(String(this.state.error) === "Error: Request failed with status code 404") {
            this.setState({
                error: "",
            });
            return (
                <div className="cities-container">
                    <div className="cities">None Found!</div>
                </div>
            );
        } else {
            const Cities = this.state.data.map((city, index) =>
                <AZip data={city} key={index}/>
            );
            //console.log(Cities);
            return (
                <div className="cities-container">
                    <div className="cities">{Cities}</div>
                </div>
            );

        }
    }
}

export default Request;
