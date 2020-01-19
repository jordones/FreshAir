import React from 'react';
import CityAirQualityView from './view';

export default ({navigation}) => {
  const city = navigation.getParam('city');

  return <CityAirQualityView city={city} />;
};
