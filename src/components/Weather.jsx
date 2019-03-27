import React, { Component } from 'react';
import  Weathers  from  './Weathers';
import './Weather.css';
import {Row, Col} from 'react-bootstrap';


const forecastUrl = 'https://api.apixu.com/v1/forecast.json?key=';
const APIKey='ed44ed84f3c94b9587f191053181909';
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
                <div id="appContainer">
                    <div className="principal">
                        <Row id="locationRow">
                            <label className="bigText" >{this.state.city}</label>
                            <label className="regularText" > {this.state.country}</label>
                        </Row>
                        <Row id="imgRow">
                            <img src={this.state.icon_url} alt="" id="weatherImage"/>
                        </Row>
                        <Row id="tempRow">
                            <label className="bigText">{this.state.current_weather_c} ºC</label>
                        </Row>
                        <Row id="tempRow">
                            <label className="regularText">Humidity: </label>
                            <label className="regularText">{this.state.relative_humidity} %</label>
                        </Row>
                        <Row id="tempRow">
                            <label className="regularText">Wind: </label>
                            <label className="regularText">{this.state.wind} km/h</label>
                        </Row>
                        <Row id="tempRow">
                            <label className="regularText">Wind direction: </label>
                            <label className="regularText">{this.state.wind_dir}</label>
                        </Row>      
                    </div>
                </div>
                <div >
                    <Weathers forecast={this.state.forecast}/>
                </div>           
             </div> 
        );
    }
 }

