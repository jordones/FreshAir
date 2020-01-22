import React from 'react';
import {ActivityIndicator, StyleSheet, View, Text} from 'react-native';

export default ({error, healthRecommendation, loading}) => {

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>We're having trouble finding that right now.. 🤔</Text>
      </View>
    );
  } else if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator color={'white'}/>
      </View>
    );
  }
  
  return (
    <View style={styles.container}>
      <Text adjustsFontSizeToFit>{healthRecommendation}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    minHeight: 150,
    backgroundColor: '#c9c9c9',
    borderBottomRightRadius: 3,
    borderBottomLeftRadius: 3,
    paddingHorizontal: 10,
    paddingVertical: 5
  },
  errorText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});