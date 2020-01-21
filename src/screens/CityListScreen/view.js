import React from 'react';
import { SafeAreaView, ActivityIndicator, FlatList, StyleSheet } from 'react-native';
import CityCard from '../../components/CityCard';

export default ({ cityList, loading, openCityAirQualityScreen }) => {
  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <ActivityIndicator />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        contentContainerStyle={styles.list}
        data={cityList}
        renderItem={({ item: { name, data, error, imageUrl } }) => (
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
    backgroundColor: 'transparent'
  },
  list: {
    marginHorizontal: 20,
    marginVertical: 40
  }
});