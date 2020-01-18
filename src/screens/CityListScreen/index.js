import React from 'react';
import CityListView from './view';

export default ({navigation}) => {
  const openCityAirQualityScreen = () => {
    navigation.navigate('CityAirQuality', {
      city: 'Toronto',
    });
  };

  return <CityListView openCityAirQualityScreen={openCityAirQualityScreen} />;
};
