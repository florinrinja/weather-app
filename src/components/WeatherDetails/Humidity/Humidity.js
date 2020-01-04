import React from 'react';

import classes from './Humidity.module.css';

const humidity = (props) => {
  return (
    <div className={classes.HumidityWrapper}>
      <span className ={classes.HumidityText}>Humidity </span>{Math.round(props.humidity)}<span className={classes.UnitsText}>%</span>
    </div>
  );
}

export default humidity;