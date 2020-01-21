import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default ({name}) => {
  return (
    <View style={styles.card}>
        <Text style={styles.notFoundText}>{`We couldn't find any data for ${name}. How embarassing! 😅`}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#c9c9c9',
    borderRadius: 3
  },
  notFoundText: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 5,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});