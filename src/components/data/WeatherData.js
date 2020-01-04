import axios from 'axios';
import url from './configUrl';
import APIKey from './configApiKey';

const WeatherData = (callback) => {
  navigator.geolocation.getCurrentPosition((success) => {
    const urlApi = `${url}lat=${success.coords.latitude}&lon=${success.coords.longitude}&appid=${APIKey}&units=metric`;
    axios.get(urlApi)
      .then(response => {
        callback(response.data);
      })
      .catch(error => {
        console.log(error);
        callback(error);
      })
  })
}

export default WeatherData;
