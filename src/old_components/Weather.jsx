import React, { Component } from 'react';
import  Weathers  from  './Weathers';
// import DisplayWeather from "./DisplayWeather";
import {Row} from 'react-bootstrap';
import './Weather.css';

const forecastUrl = 'https://api.apixu.com/v1/forecast.json?key=';
const APIKey='ed44ed84f3c94b9587f191053181909';
// let lat=0;
// let lon=0;
let url='';

export default class Weather extends Component {
    constructor(props){
        super(props);
        this.state={
            latitude:0,
            longitude:0,
            current_weather_c:0,
            relative_humidity:0,
            feels_like:0,
            country:'',
            city:'',
            wind:0,
            wind_dir:'',
            icon_url:'',
            forecast:[]
        }
    }

    setWeather=(position)=> {
        this.lat=position.coords.latitude;
        this.lon=position.coords.longitude;
        this.setState({
            latitude:this.lat,
            longitude:this.lon
        });
    url=`${forecastUrl}${APIKey}&q=${this.lat},${this.lon}&days=4`;
    fetch(url)
    .then(data=>data.json())
    .then(parsedData=> this.setState({
        country: parsedData.location.country,
        city:parsedData.location.name,
        current_weather_c:parsedData.current.temp_c,
        relative_humidity:parsedData.current.humidity,
        feelslike:parsedData.current.feelslike_c,
        icon_url:parsedData.current.condition.icon,
        wind:parsedData.current.wind_kph,
        wind_dir:parsedData.current.wind_dir,
        forecast: parsedData.forecast.forecastday     
    }));
    }
    
    getLocation=()=> {
        navigator.geolocation.getCurrentPosition(this.setWeather);
    }
    componentWillMount() {
        this.getLocation();
    }
    
    render(){
        return (
            <div>
                <Row className="principal">
                    <Row>
                        <label >{this.state.city}</label>
                        <label > {this.state.country}</label>
                    </Row>
                    <Row>
                    <img src={this.state.icon_url} alt=""  />
                    </Row>
                    <Row >
                    <label >{this.state.current_weather_c} ºC</label>
                    </Row>
                    <Row >
                    <label>Humidity: </label>
                    <label>{this.state.relative_humidity} %</label>
                    </Row>
                    <Row>
                    <label>Wind: </label>
                    <label>{this.state.wind} km/h</label>
                    </Row>
                    <Row>
                    <label>Wind direction: </label>
                    <label>{this.state.wind_dir}</label>
                    </Row>      
                </Row>
                <Row>
                    <Weathers forecast={this.state.forecast}/>
                </Row>           
             </div> 
        );
    }
 }