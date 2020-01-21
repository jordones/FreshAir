import axios from 'axios';

// Hack to avoid writing a backend service
// Never expose secrets in application code
const API_KEY = '8cbe8425f5e949c8946f560f57d79838';
const breezometerApi = axios.create({
  baseURL: 'https://api.breezometer.com/air-quality/v2/current-conditions/',
});

export const getAirQualityData = async (lat, lon) => {
  const {data} = await breezometerApi.get('/', {
    params: {
      lat,
      lon,
      key: API_KEY,
    },
  });
  return data;
};
