import React, { useEffect, useState } from "react";
import DisplayWeather from "./DisplayWeather";
import classes from './Weathers.module.css';

const Weathers = (props) => {

  const [eventsProps, setEventsProps] = useState({});
  const [forecast, setForecast] = useState();

  useEffect(() => {
    setEventsProps(props);
  }, [props]);

  useEffect(() => {
    if (eventsProps.forecast) {
      setForecast(excludeToday(eventsProps.forecast));
    }
  }, [eventsProps.forecast]);

  const excludeToday = (array) => {
    return array
      .filter(obj => new Date(obj.dt_txt).getDate() !== new Date().getDate())
      .filter(obj => new Date(obj.dt_txt).getHours() === 12)
      .slice(0, 3)
  };

  if (!forecast) {
    return null;
  }

  return (
    <div className={`row ${classes.Secondary}`}>
      {forecast.map((forecast, index) => (
        <DisplayWeather key={index} date={forecast.dt_txt} temp_avg={forecast.main.temp} feels_like={forecast.main.feels_like} humidity={forecast.main.humidity} wind_speed={forecast.wind.speed} icon={forecast.weather[0].icon} icon_2={forecast.weather[0].main} direction={forecast.wind.deg} />
      ))}
    </div>
  )
};

export default Weathers;
