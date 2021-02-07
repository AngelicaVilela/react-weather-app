import React from "react";
import "./Weather.css";

export default function FormattedDate(props){
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let months = ["Jan", "Feb", "March","Apr","May","Jun","Jul","Aug","Sep","Oct", "Nov", "Dec"];
    let day = days [props.date.getDay()];
    let hours = props.date.getHours();
    let minutes = props.date.getMinutes();
    let month = months[props.date.getMonth()];
    let year = props.date.getFullYear();
    let date = props.date.getDate()
    return <div>
        <h3>{day} {date} {month} {year} {hours}:{minutes}</h3></div>
}