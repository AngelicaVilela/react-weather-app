import React from "react";

export default function WeatherInfo(props){
    return(
        <div>
             <h1>{props.data.city}</h1>
        <h2>{Math.round(props.data.tempeature)}°C</h2>
        <div className="row">
            <div className="col-6">
                <img src={props.data.iconUrl} alt="sun" className="float-left" id="icon"></img>
            </div>
            <div className="col-6">
                <ul>
                    <li className="text-capitalize">
                        {props.data.description}
                    </li>
                    <li>
                        Wind Speed: {props.data.wind}
                    </li>
                    <li>
                        Humidity: {props.data.humidity}
                    </li>
                </ul>
            </div>
        </div>
        </div>
    )
}
