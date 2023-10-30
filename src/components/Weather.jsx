import React from "react";
import { useWeather } from "../Context/WeatherContext";

const Weather = () => {
  const { weatherData } = useWeather();
  return (
    <div>
      {weatherData && (
  <div className="weather-container">
    {weatherData.forecast.forecastday.map((day) => (
      <div className="day-container" key={day.date}>
        <h2 className="date">{day.date}</h2>
        <img  className ="weather-icon"src={day.day.condition.icon} alt={day.day.condition.text}></img>
        <p className="temperature">{day.day.avgtemp_c}C</p>
        <p className="temperature">{day.day.condition.text}</p> 
      </div>
    ))}
        </div>
      )}
    </div>
  );
};

export default Weather;
