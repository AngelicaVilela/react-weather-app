import React,{useState} from "react";
import axios from "axios";
import "./Weather.css";
import FormattedDate from "./FormattedDate.js";
import WeatherInfo from "./WeatherInfo.js";

export default function Weather(props){
    const[city, setCity] = useState(props.defaultCity);
    const[weatherData,setWeatherData] = useState({ready : false});
    function handleResponse(response){
        console.log(response.data);
        setWeatherData({
            ready: true,
            tempeature: response.data.main.temp,
            wind: response.data.wind.speed,
            city: response.data.name,
            humidity: response.data.main.humidity,
            description:response.data.weather[0].description,
            icon: response.data.weather[0].icon,
            date:new Date(response.data.dt * 1000),

        })
    } 
    function search(){
    const apiKey= "5d86e59e72e3a8a557375a5c5452a236";
    let apiUrl= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    }

    function handleSubmit(event){
        event.preventDefault();
        search(city);
    }
    function handleCityChange(event){
        setCity(event.target.value);
    }
    

    if(weatherData.ready){
    return (<div className="Weather">
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter City Name" autoComplete="off" autoFocus="on"
            onChange={handleCityChange}/>
            <input type="submit" value="Search" />
        </form>
        <WeatherInfo data={weatherData}/>
       <FormattedDate date={weatherData.date}/>
        </div>) 
} else { 
    search()
    return "Loading. . .";
}
}