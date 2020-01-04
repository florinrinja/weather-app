import React from 'react';

import classes from './FeelsLike.module.css';

const feelsLike = (props) => {
  return (
    <div className={classes.FeelsLikeWrapper}>
      <span className={classes.FeelsLikeText}>Feels like </span>{Math.round(props.feelsLike)}<span className={classes.UnitsText}>°C</span>
    </div>
  );
}

export default feelsLike;