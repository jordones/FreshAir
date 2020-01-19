import React from 'react';
import {SafeAreaView, Text} from 'react-native';

export default ({city}) => {
  return (
    <SafeAreaView>
      <Text>{city.name}</Text>
    </SafeAreaView>
  );
};
