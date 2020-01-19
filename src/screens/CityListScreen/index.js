import React from 'react';
import CityListView from './view';

const mockCity = {
  name: 'Toronto',
  lat: '',
  lon: '',
};

export default ({navigation}) => {
  const openCityAirQualityScreen = city => {
    return navigation.navigate({
      routeName: 'CityAirQuality',
      key: `${city.name}`,
      params: {
        city,
      },
    });
  };

  return (
    <CityListView
      openCityAirQualityScreen={() => openCityAirQualityScreen(mockCity)}
    />
  );
};
