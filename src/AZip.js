import React from 'react';
import './Global.css';

const AZip = props => {
  let {
    City,
    Zipcode,
    State,
    Country,
    EstimatedPopulation,
    TotalWages,
    Lat,
    Long
  } = props.data;

  return (
    <div className="OneCity">
      <div className="Zipcode">Zip: {Zipcode}</div>
      <div className="CityName">City: {City}</div>
      <div className="State">State: {State}</div>
      <div className="Country">Country: {Country}</div>
      <div className="TotalWages">Total Wages: {TotalWages}</div>
      <div className="EstimatedPopulation">
        Estimated Population: {EstimatedPopulation}
      </div>
      <div className="Lat">Latitude: {Lat}</div>
      <div className="Long">Logitude: {Long}</div>
    </div>
  );
};

export default AZip;
