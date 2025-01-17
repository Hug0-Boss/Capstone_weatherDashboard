import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import CurrentWeather from "../components/CurrentWeather";
import HourlyWeather from "../components/HourlyWeather";
import DailyWeather from "../components/DailyWeather";
import { fetchCurrentWeather, fetchForecastWeather } from "../utils/api.js";

const Dashboard = () => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecastWeather, setForecastWeather] = useState(null);
  const [location, setLocation] = useState("Auto");
  const [error, setError] = useState("");
  
  const fetchWeatherData = async (loc) => {
    try {
      const weatherData = await fetchCurrentWeather(loc);
      const forecastData = await fetchForecastWeather(loc);

      setCurrentWeather(weatherData);
      setForecastWeather(forecastData);
      setError("");
    } catch (error) {
      console.error("Error fetching weather data", error);
      setError("Unable to fetch weather data. Please check your location or try again.");
    }
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const coords = `${position.coords.latitude},${position.coords.longitude}`;
          fetchWeatherData(coords);
        },
        () => fetchWeatherData("New York") // Fallback location
      );
    } else {
      fetchWeatherData("New York");
    }
  }, []);

  const handleSearch = (searchLocation) => {
    fetchWeatherData(searchLocation);
    setLocation(searchLocation);
  };

  return (
    <div className="container mx-auto p-4">
      <Header onSearch={handleSearch} />
      {error && <p className="text-red-500 text-center">{error}</p>}
      {currentWeather && <CurrentWeather weather={currentWeather} />}
      {forecastWeather && <HourlyWeather forecast={forecastWeather} />}
      {forecastWeather && <DailyWeather forecast={forecastWeather} />}
    </div>
  );
};

export default Dashboard;
