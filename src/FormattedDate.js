import React from "react";
import "./Weather.css";

export default function FormattedDate(props){
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days [props.date.getDay()];
    let hours = props.date.getHours();
    let minutes = props.date.getMinutes();
    return <div>
        <h3>{day} {hours}:{minutes}</h3></div>
}