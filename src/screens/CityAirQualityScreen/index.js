import React from 'react';
import CityAirQualityView from './view';

export default ({navigation}) => {
  const name = navigation.getParam('name');
  const data = navigation.getParam('data');

  return <CityAirQualityView name={ name } data={ data } />;
};
