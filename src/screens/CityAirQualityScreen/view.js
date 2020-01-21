import React from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';
import NotFound from '../../components/NotFound';

export default ({aqi, category, dominantPollutant, name, notFound}) => {

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