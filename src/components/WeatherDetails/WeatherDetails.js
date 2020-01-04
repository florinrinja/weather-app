import React, { useEffect, useState } from 'react';

import classes from './WeatherDetails.module.css';
import Icon from '../Icon/Icon';
import Temperature from './Temperature/Temperature';
import Description from './Description/Description';
import FeelsLike from './FeelsLike/FeelsLike';
import Humidity from './Humidity/Humidity';
import Wind from './Wind/Wind';
import Date from './Date/Date';

const WeatherDetails = (props) => {

  const [eventsProps, setEventsProps] = useState({});
  const [current, setCurrent] = useState();

  useEffect(() => {
    setEventsProps(props);
  }, [props]);

  useEffect(() => {
    if (eventsProps.data) {
      setCurrent(eventsProps.data);
    }
  }, [eventsProps.data]);

  if (!current) {
    return null;
  }
  return (
    <div className={classes.WeatherDetailsWrapper}>
      <div className={classes.WeatherIconWrapper}>
        <Date />
        <Icon type={current.weather[0].main} />
      </div>
      <div className={classes.WeatherDataWrapper}>
        <Temperature degrees={current.main.temp} />
        <Description type={current.weather[0].main} />
        <FeelsLike feelsLike={current.main.feels_like} />
        <Humidity humidity={current.main.humidity} />
        <Wind windSpeed={current.wind.speed} direction={current.wind.deg} />
      </div>
    </div>
  );
}

export default WeatherDetails;
