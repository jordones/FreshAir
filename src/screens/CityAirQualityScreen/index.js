import React, {useState, useEffect} from 'react';
import CityAirQualityView from './view';
import {getAirQualityFeatureData} from '../../services/AirQuality';

const useHealthRecommendations = (lat, lon) => {
  const [healthRecommendations, setHealthRecommendations] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {


    const fetchHealthRecommendations = async (lat, lon) => {
      try {
        setLoading(true);
        const {data: {health_recommendations: healthRecs}} = await getAirQualityFeatureData(lat, lon, ['health_recommendations']);
        setHealthRecommendations(healthRecs);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchHealthRecommendations(lat, lon);
  }, [lat, lon]);

  return [healthRecommendations, loading, error];
};

export default ({navigation}) => {
  const name = navigation.getParam('name');
  const lat = navigation.getParam('lat');
  const lon = navigation.getParam('lon');
  const data = navigation.getParam('data');

  const [selectedRecommendation, setSelectedRecommendation] = useState('active');
  const [healthRecommendations, loading, error] = useHealthRecommendations(lat, lon);

  const notFound = !data;
  const aqi = data?.indexes?.baqi?.aqi_display;
  const category = data?.indexes?.baqi?.category;
  const dominantPollutant = data?.indexes?.baqi?.dominant_pollutant;

  const onSelectedRecommendationChange = (value) => {
    setSelectedRecommendation(value);
  };

  return <CityAirQualityView
    aqi={aqi}
    category={category}
    dominantPollutant={dominantPollutant}
    error={error}
    healthRecommendation={healthRecommendations[selectedRecommendation]}
    loading={loading}
    onSelectedRecommendationChange={onSelectedRecommendationChange}
    name={name}
    notFound={notFound}
    selectedRecommendation={selectedRecommendation}
  />;
};
