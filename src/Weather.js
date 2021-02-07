import React,{useState} from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(){
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
            iconUrl:"https://ssl.gstatic.com/onebox/weather/64/sunny.png",
            date: "Date 00:00",

        })
    }
    if(weatherData.ready){
    return (<div className="Weather">
        <form id="search-form">
            <input type="text" placeholder="Enter City Name" autocomplete="off" autofocus="on"
            id="search-text-input"/>
            <input type="submit" value="Search" />
        </form>
        <h1>{weatherData.city}</h1>
        <h2>{Math.round(weatherData.tempeature)}°C</h2>
        <div className="row">
            <div className="col-6">
                <img src={weatherData.iconUrl} alt="sun" class="float-left" id="icon"></img>
            </div>
            <div className="col-6">
                <ul>
                    <li>
                        {weatherData.description}
                    </li>
                    <li>
                        Wind Speed: {weatherData.wind}
                    </li>
                    <li>
                        Humidity: {weatherData.humidity}
                    </li>
                </ul>
            </div>
        </div>
        <h3>{weatherData.date} </h3>
        </div>) 
} else { 
    const apiKey= "5d86e59e72e3a8a557375a5c5452a236";
    let city = "Modena";
    let apiUrl= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading. . .";
}

}