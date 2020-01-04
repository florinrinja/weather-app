import React, { useState, useEffect } from 'react';
import { BarLoader } from 'react-spinners';
import Weathers from './Weathers';
import Card from './Card/Card';
import ErrorNotice from './ErrorNotice/ErrorNotice';
import WeatherDetails from './WeatherDetails/WeatherDetails';
import WeatherData from './data/WeatherData';
import Preview from './Preview/Preview';
import Header from './Header/Header';
import classes from './Weather.module.css';
import assetMapping from '../assets/assetMapping.json';

const Weather = () => {

  const [current, setCurrent] = useState([]);
  const [error, setError] = useState(false);
  const [location, setLocation] = useState([]);
  const [forecast, setForecast] = useState([]);

  useEffect(() => {
    
    WeatherData((result) => {
      if (result.message === 'Request failed with status code 400') {
        setError(true);
      } else if (result.list) {
        setCurrent(result.list[0]);
        setLocation(result.city);
        setForecast(result.list);
      }
    });
  }, []);

  let style = {
    height: '400px'
  };

  let bannerColor;
  let cardContent = <Preview />;
  if (!current.main && !error) {
    cardContent = <BarLoader width={200}/>;
  } else if (!current.main && error) {
    cardContent = <ErrorNotice />;
  } else if (current.weather) {
    cardContent = <WeatherDetails data={current} />;
    bannerColor = current.weather[0].main;
  }

  return (
    <div className={`container-fluid ${classes.AppWrapper}`}>
      <Header
        location={location}
        color={assetMapping.colors[
          error && !bannerColor ? "error" : bannerColor
        ]}
      />
      <main className={`row ${classes.AppMain}`} style={(!current.main && !error) ? style : {}}>
        <Card>
          {cardContent}
        </Card>
      </main>
      <Weathers forecast={forecast} />
    </div>
  );
}

export default Weather;
