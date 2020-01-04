import React from 'react';
import classes from './IconForecast.module.css';

const IconForecast = (props) => {
  return (
    <img
      src={require(`../../assets/images/${props.type}.svg`)}
      alt={props.type}
      className={classes.Icon} />
  );
}

export default IconForecast;
