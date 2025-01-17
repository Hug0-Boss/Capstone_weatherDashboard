// components/CurrentWeather.jsx
import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";


const CurrentWeather = ({ weather }) => {
  const { darkMode } = useContext(ThemeContext);


  if (!weather) return null;


  const {
    name,
    weather: [{ description, icon }],
    main: { temp, humidity, pressure },
    wind: { speed },
    visibility,
    sys: { sunrise, sunset },
  } = weather;


  return (
    <div
      className={`current-weather p-6 rounded-md shadow-md text-center ${
        darkMode ? "bg-gray-800 text-white" : "bg-blue-100 text-black"
      }`}
    >
      <h2 className="text-2xl font-semibold">{name}</h2>
      <p className="text-lg capitalize">{description}</p>
      <p className="text-4xl font-bold">{temp}°C</p>
      <img
        src={`https://openweathermap.org/img/wn/${icon}.png`}
        alt={description}
        className="mx-auto"
      />
      <div className="details mt-4 grid grid-cols-2 gap-2">
        <p>Humidity: {humidity}%</p>
        <p>Pressure: {pressure} hPa</p>
        <p>Wind: {speed} m/s</p>
        <p>Visibility: {visibility / 1000} km</p>
        <p>Sunrise: {new Date(sunrise * 1000).toLocaleTimeString()}</p>
        <p>Sunset: {new Date(sunset * 1000).toLocaleTimeString()}</p>
      </div>
    </div>
  );
};


export default CurrentWeather;