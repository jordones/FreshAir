import React from 'react';
import {SafeAreaView, ActivityIndicator, FlatList, StyleSheet, Text} from 'react-native';
import CityCard from '../../components/CityCard';

export default ({cityList, loading, error, openCityAirQualityScreen}) => {
  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <ActivityIndicator />
      </SafeAreaView>
    );
  } else if (error) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.error}>Something went wrong!</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView>
      <FlatList
        contentContainerStyle={styles.list}
        data={cityList}
        renderItem={({item: {name, data, error, imageUrl}}) => (
          <CityCard
            key={name}
            name={name}
            data={data}
            error={error}
            imageUrl={imageUrl}
            onPress={() => openCityAirQualityScreen(name, data)}
          />
       )}
        keyExtractor={city => city.name}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center'
  },
  list: {
    marginHorizontal: 20,
    marginVertical: 40
  },
  error: {
    fontSize: 16,
    color: 'red'
  }
});