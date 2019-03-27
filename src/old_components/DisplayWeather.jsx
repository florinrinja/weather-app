import React from "react";
import {Col, Row} from 'react-bootstrap';

const DisplayWeather = ({temp_max, temp_min, wind_speed, icon }) => (
  
    <div>
        <div className="" id="">
        <img src={icon} alt={temp_max} id="" />
        </div>
        <div className="" id="">
        <label className="">Temp max: {temp_max} ºC</label>
        </div>
        <div className="" id="">
        <label className="">Temp min: {temp_min} ºC</label>
        </div>
        <div className="" id="">
        <label className="">Wind: {wind_speed} km/h</label>
        </div>
    </div>
  
);


export  default  DisplayWeather;


