import React, {useState} from 'react';
import {SafeAreaView, Text, StyleSheet, Picker} from 'react-native';
import NotFound from '../../components/NotFound';
import ContentCard from '../../components/ContentCard';
import {healthRecommendationToTitleMap} from './constants';

export default ({aqi, category, dominantPollutant, error, healthRecommendation, loading, name, notFound, selectedRecommendation, onSelectedRecommendationChange}) => {
  const renderPickerOptions = () => {
    return Object.keys(healthRecommendationToTitleMap).map((item) => (
      <Picker.Item
        key={item}
        label={healthRecommendationToTitleMap[item]}
        value={item}
        />
    ))
  };

  return (
    <SafeAreaView style={styles.container}>
      {notFound &&
        <NotFound name={name} />
      }
      {!notFound &&
        <>
          <Text style={styles.airQuality}>{aqi}</Text>
          <Text style={styles.label}>{category}</Text>
          <Text style={styles.pollutant}>The dominant pollutant is: <Text style={{fontWeight: 'bold'}}>{dominantPollutant}</Text></Text>
          <Text style={styles.pollutant}>See health warnings below</Text>

          <Picker
            style={{width: '100%', backgroundColor: '#c9c9c9', borderTopLeftRadius: 3, borderTopRightRadius: 3, borderBottomColor: 'white', borderBottomWidth: 1}}
            selectedValue={selectedRecommendation}
            onValueChange={(itemValue) => onSelectedRecommendationChange(itemValue)}
          >
          {renderPickerOptions()}
          </Picker>
          <ContentCard
            error={error}
            healthRecommendation={healthRecommendation}
            loading={loading}
          />
        </>
      }
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  airQuality: {
    fontSize: 124,
    fontWeight: 'bold'
  },
  container: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20
  },
  notFoundText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  label: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 5,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#c9c9c9'
  },
  pollutant: {
    paddingVertical: 15,
    paddingVertical: 5
  }
});