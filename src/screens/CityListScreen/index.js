import React, {useEffect, useState} from 'react';
import CityListView from './view';

// Service
import {getAirQualityData} from '../../services/AirQuality';

// Mock Data
const mockCityData = [
  {
      name: 'Toronto',
      lat: '43.6532',
      lon: '79.3832',
      data: {},
      error: false,
      imageUrl: 'https://user-images.githubusercontent.com/9268926/72698951-3ba39500-3afb-11ea-87eb-871d849fa531.png' 
  },
  {
      name: 'Montreal',
      lat: '45.5017',
      lon: '73.5673',
      data: {},
      error: false,
      imageUrl: 'https://user-images.githubusercontent.com/9268926/72698952-3ba39500-3afb-11ea-8756-3ec4f194b27d.png'
  },
  {
      name: 'Vancouver',
      lat: '49.2827',
      lon: '123.1207',
      data: {},
      error: false,
      imageUrl: 'https://user-images.githubusercontent.com/9268926/72698950-3ba39500-3afb-11ea-941c-8ce80903bad9.png'
  },
];

// Toronto (43.6532° N, 79.3832° W)
// Montreal (45.5017° N, 73.5673° W)
// Vancouver (49.2827° N, 123.1207° W)

const useAirQualityData = cities => {
  const [cityData, setCityData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const refreshCityData = async () => {
      try {
        setLoading(true);

        const airQualityData = await Promise.all(
          cities.map(({ lat, lon }) =>
            getAirQualityData(lat, lon).catch(error => null)
          )
        );
        console.log(airQualityData);
        const copyOfCityData = [...cities];
        for (let i = 0; i < copyOfCityData.length; i++) {
          copyOfCityData[i].error = false;
          airQualityData[i]
            ? (copyOfCityData[i].data = airQualityData[i])
            : (copyOfCityData[i].error = true);
        }

        setCityData(copyOfCityData);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    refreshCityData();
  }, [cities]);

  return [cityData, loading];
};

export default ({ navigation }) => {
  const [cityList, loading] = useAirQualityData(mockCityData);

  const openCityAirQualityScreen = (name, data) => {
    return navigation.navigate({
      routeName: 'CityAirQuality',
      key: `${name}`,
      params: {
        name,
        data
      },
    });
  };
  console.log(cityList);

  return (
    <CityListView
      cityList={cityList}
      loading={loading}
      openCityAirQualityScreen={openCityAirQualityScreen}
    />
  );
};
