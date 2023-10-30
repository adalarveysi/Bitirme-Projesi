import React from "react";
import { useWeather } from "../Context/WeatherContext";
const Province = () => {
  const { province, setProvince } = useWeather();
  console.log(province);
  const handleLocationChange = (event) => {
    setProvince(event.target.value);
  };
  

  return (
    <>
      <div className="app-container">
        <h1 className="app-title">Weather APP</h1>
        <div className="input-container">
          {" "}
          <input
            className="location-input"
            type="text"
            placeholder="Şehir Giriniz!"
            value={province}
            onChange={handleLocationChange}
          />
        </div>
      </div>
    </>
  );
};

export default Province;
