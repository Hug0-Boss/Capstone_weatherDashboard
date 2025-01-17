import axios from "axios";


const API_KEY = "c7320f64e5275cc8cda1632c8f38e5cc"; // Replace with your OpenWeather API key
const BASE_URL = "https://api.openweathermap.org/data/2.5";


export const fetchCurrentWeather = async (location) => {
  try {
    const response = await axios.get(`${BASE_URL}/weather`, {
      params: {
        q: location,
        units: "metric",
        appid: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching current weather:", error);
    throw new Error("Unable to fetch current weather.");
  }
};


export const fetchForecastWeather = async (location) => {
  try {
    const response = await axios.get(`${BASE_URL}/forecast`, {
      params: {
        q: location,
        units: "metric",
        appid: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching forecast weather:", error);
    throw new Error("Unable to fetch forecast weather.");
  }
};
