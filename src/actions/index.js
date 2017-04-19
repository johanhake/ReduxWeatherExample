import axios from 'axios';

const API_KEY = 'e706436c36dcfbddf1a589321917ecab';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},no`;
  const request = axios.get(url);

  return {
    type : FETCH_WEATHER,
    payload: request
  };
}