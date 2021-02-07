import React from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(){
    function handleResponse(response){
        console.log(response.data);
    }
    const apiKey= "5d86e59e72e3a8a557375a5c5452a236";
    let city = "Modena";
    let apiUrl= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return (<div className="Weather">

        <form id="search-form">
            <input type="text" placeholder="Enter City Name" autocomplete="off" autofocus="on"
            id="search-text-input"/>
            <input type="submit" value="Search" />
        </form>
        <h1>Current City</h1>
        <h2>Temperature 25°C</h2>
        <div className="row">
            <div className="col-6">
                <img src="https://ssl.gstatic.com/onebox/weather/64/sunny.png" alt="sun" class="float-left" id="icon"></img>
            </div>
            <div className="col-6">
                <ul>
                    <li>
                        Clear Sky
                    </li>
                    <li>
                        Wind Speed
                    </li>
                    <li>
                        Humidity
                    </li>
                </ul>
            </div>
        </div>
        <h3>Date 00:00 </h3>
        </div>) 
}