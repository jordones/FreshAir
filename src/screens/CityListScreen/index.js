import React, {useEffect, useState} from 'react';
import CityListView from './view';

// Service
import {getAirQualityData} from '../../services/AirQuality';

// City data
import {constantCityData} from './constants';

const useAirQualityData = cities => {
  const [cityData, setCityData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const refreshCityData = async () => {
      try {
        setLoading(true);
        setError(false);
        const airQualityData = await Promise.all(
          cities.map(({lat, lon}) =>
            getAirQualityData(lat, lon).catch(error => null)
          )
        );
        const copyOfCityData = [...cities];

        // Map air quality data to city data
        for (let i = 0; i < copyOfCityData.length; i++) {
          copyOfCityData[i].error = false;
          airQualityData[i]
            ? (copyOfCityData[i].data = { ...airQualityData[i].data })
            : (copyOfCityData[i].error = true);
        }
        setCityData(copyOfCityData);
      } catch (error) {
        setError(true)
      } finally {
        setLoading(false);
      }
    };

    refreshCityData();
  }, [cities]);

  return [cityData, loading, error];
};

export default ({ navigation }) => {
  const [cityList, loading, error] = useAirQualityData(constantCityData);

  const openCityAirQualityScreen = (name, lat, lon, data) => {
    return navigation.navigate({
      routeName: 'CityAirQuality',
      key: `${name}`,
      params: {
        name,
        lat,
        lon,
        data
      },
    });
  };

  return (
    <CityListView
      cityList={cityList}
      loading={loading}
      error={error}
      openCityAirQualityScreen={openCityAirQualityScreen}
    />
  );
};
