import React from "react";
import DisplayWeather from "./DisplayWeather";
import './Weather.css';

const Weathers = (props) => {
  console.log(props.forecast)
  
return (
  <div className="secondary">
    {props.forecast.map((forecasts,index) => (
      <DisplayWeather key={index} date={forecasts.date} temp_max={forecasts.day.maxtemp_c} temp_min={forecasts.day.mintemp_c} wind_speed={forecasts.day.maxwind_kph} icon={forecasts.day.condition.icon}  />
    ))}
  </div>
)
};


export default Weathers;

