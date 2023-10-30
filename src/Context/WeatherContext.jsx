import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
export const WeatherContext = createContext();


export const WeatherProvider = ({ children }) => {
  const [province, setProvince] = useState("");
  const [weatherData,setweatherData] = useState(null)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response =
          await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=abc6d7b90f5942468d7155039233010&q=${province}&days=7&aqi=yes&alerts=yes`);
          setweatherData(response.data)
          console.log(response)
      } catch (error) {
        console.log(error);
      }
    };
    if(province){
      fetchData()
    }
  },[province]);
  const values = {
    province,
    setProvince,
    weatherData,
    setweatherData,
  };
  return (
    <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
  );
};

export const useWeather = () => useContext(WeatherContext);
