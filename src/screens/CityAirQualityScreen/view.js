import React from 'react';
import {SafeAreaView, Text} from 'react-native';

export default ({name, data}) => {
  return (
    <SafeAreaView>
      <Text>{name}</Text>
    </SafeAreaView>
  );
};
