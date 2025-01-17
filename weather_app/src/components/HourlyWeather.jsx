// components/HourlyWeather.jsx
import React from "react";


const HourlyWeather = ({ forecast }) => {
  if (!forecast || !forecast.list) return null;


  const hourlyData = forecast.list.slice(0, 24); // Display the next 24 hours


  return (
    <div className="hourly-weather mt-6">
      <h3 className="text-xl font-bold mb-4">Hourly Forecast</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {hourlyData.map((hour) => {
          const date = new Date(hour.dt * 1000); // Convert Unix timestamp
          const day = date.toLocaleDateString(undefined, { weekday: "short" });
          const time = date.toLocaleTimeString(undefined, { hour: "2-digit", minute: "2-digit" });
          const temp = hour.main.temp;
          const weatherDesc = hour.weather[0].description;
          const icon = hour.weather[0].icon;
          const precipitation = hour.pop * 100; // Probability of precipitation (in %)


          return (
            <div
              key={hour.dt}
              className="hour bg-blue-50 dark:bg-gray-800 p-4 text-center rounded-md shadow-md"
            >
              <p className="font-bold">{day}</p>
              <p className="text-sm">{date.toLocaleDateString()}</p>
              <p className="text-sm">{time}</p>
              <img
                src={`https://openweathermap.org/img/wn/${icon}.png`}
                alt={weatherDesc}
                className="mx-auto"
              />
              <p className="text-lg font-semibold">{temp}°C</p>
              <p className="capitalize">{weatherDesc}</p>
              {precipitation > 0 && <p>Precipitation: {precipitation}%</p>}
            </div>
          );
        })}
      </div>
    </div>
  );
};


export default HourlyWeather;