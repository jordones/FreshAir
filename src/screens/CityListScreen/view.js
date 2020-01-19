import React from 'react';
import {SafeAreaView, Text, Button} from 'react-native';

export default ({openCityAirQualityScreen}) => {
  return (
    <SafeAreaView>
      <Text>City List Screen</Text>
      <Button title={'Go To City View'} onPress={openCityAirQualityScreen} />
    </SafeAreaView>
  );
};
