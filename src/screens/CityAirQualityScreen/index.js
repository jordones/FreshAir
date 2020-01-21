import React from 'react';
import CityAirQualityView from './view';

export default ({navigation}) => {
  const name = navigation.getParam('name');
  const data = navigation.getParam('data');

  const notFound = !data;
  const aqi = data?.indexes?.baqi?.aqi_display;
  const category = data?.indexes?.baqi?.category;
  const dominantPollutant = data?.indexes?.baqi?.dominant_pollutant;

  return <CityAirQualityView
    aqi={aqi}
    category={category}
    dominantPollutant={dominantPollutant}
    name={name}
    notFound={notFound}
  />;
};
