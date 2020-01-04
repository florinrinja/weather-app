import React from 'react';
import IconForecast from './Icon forecast/IconForecast';

import classes from './DisplayWeather.module.css';


const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const DisplayWeather = ({ date, temp_avg, feels_like, humidity, wind_speed, icon, icon_2, direction }) => {
  const degrees = (value) => {
    if (value) {
      let val = Math.floor((value / 22.5) + 0.5);
      let arr = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
      return arr[(val % 16)];
    }
  };

  return (
    <div className={classes.Element}>
      <div className={classes.DivWrapper}>
        <span className={classes.DateText}>{weekDays[(new Date(date)).getDay()]}</span>
      </div>
      <div className={classes.IconElement}>
        <IconForecast type={icon_2} />
        <div className={classes.TempElement}>
          <div className={classes.ValueElement}>{Math.round(temp_avg)}<span className={classes.UnitsText}>ºC</span></div>
          <div className={classes.TypeElement}>{icon_2}</div>
        </div>
        {/* <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt='icon' /> */}
      </div>
      <div className={classes.DivWrapper}>
        <span className={classes.regularText}>Feels like </span>{Math.round(feels_like)}<span className={classes.UnitsText}>ºC</span>
      </div>
      <div className={classes.DivWrapper}>
        <span className={classes.regularText}>Humidity </span>{Math.round(humidity)}<span className={classes.UnitsText}>%</span>
      </div>
      <div className={classes.DivWrapper}>
        <span className={classes.regularText}>Wind </span>{Math.round(wind_speed * 3.6)}<span className={classes.UnitsText}>km/h</span><span className={classes.regularText}> from </span>{degrees(direction)}
      </div>
    </div>
  )
};

export default DisplayWeather;


