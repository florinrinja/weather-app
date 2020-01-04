import React from 'react';

import classes from './Wind.module.css';

const wind = ({ windSpeed, direction }) => {
  const degrees = (value) => {
    if (value) {
      let val = Math.floor((value / 22.5) + 0.5);
      let arr = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
      return arr[(val % 16)];
    }
  };
  return (
    <div className={classes.WindWrapper}>
      <span className={classes.WindText}>Wind </span>{Math.round(windSpeed*3.6)}<span className={classes.UnitsText}>km/h</span><span className={classes.WindText}> from </span>{degrees(direction)}
    </div>
  );
}

export default wind;