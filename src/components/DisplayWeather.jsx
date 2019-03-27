import React from "react";
import './Weather.css';


const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const DisplayWeather = ({date, temp_max, temp_min, wind_speed, icon }) => (
  
    <div className="element">
        <div className="" id="">
        <label className="regularText">{weekDays[(new Date(date)).getDay()]}</label>
        </div>
        <div className="" id="">
        <img src={icon} alt={temp_max} id="" />
        </div>
        <div className="" id="">
        <label className="regularText">Temp max: {temp_max} ºC</label>
        </div>
        <div className="" id="">
        <label className="regularText">Temp min: {temp_min} ºC</label>
        </div>
        <div className="" id="">
        <label className="regularText">Wind: {wind_speed} km/h</label>
        </div>
    </div>
  
);


export  default  DisplayWeather;
