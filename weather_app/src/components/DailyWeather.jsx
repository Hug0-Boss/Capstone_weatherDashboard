import React from "react";


const DailyWeather = ({ forecast }) => {
  const dailyData = forecast.list.filter((_, idx) => idx % 8 === 0).slice(0, 10);


  return (
    <div className="daily-weather mt-6">
      <h3 className="text-xl font-bold mb-4">10-Day Forecast</h3>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {dailyData.map((day) => (
          <div
            key={day.dt}
            className="day bg-blue-50 p-4 text-center rounded-md shadow-md"
          >
            <p>{new Date(day.dt * 1000).toLocaleDateString()}</p>
            <img
              src={`https://openweathermap.org/img/wn/${day.weather[0].icon}.png`}
              alt={day.weather[0].description}
              className="mx-auto"
            />
            <p>{day.main.temp}°C</p>
          </div>
        ))}
      </div>
    </div>
  );
};


export default DailyWeather;