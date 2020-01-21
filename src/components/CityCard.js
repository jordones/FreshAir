import React from 'react';
import {
  Text,
  ImageBackground,
  StyleSheet,
  View
} from "react-native";
import {TouchableOpacity} from "react-native-gesture-handler";

export default ({name, data, error, imageUrl, onPress}) => {

  const cardBackgroundColor = data?.indexes?.baqi?.color
    ? data?.indexes?.baqi?.color
    : '#d9d9d9';
  
  const cityCardStyle = StyleSheet.compose(
    styles.card, {backgroundColor: cardBackgroundColor}
  );

  const category = data?.indexes?.baqi?.category;

    return (
      <TouchableOpacity
        onPress={onPress}
        style={cityCardStyle}
      >
        <ImageBackground
          style={styles.imageBg}
          source={{uri: imageUrl}}
        >
          <View style={styles.row}>
            <Text style={styles.cityName}>{name}</Text>
            {!error && <Text style={styles.categoryText}>{category}</Text>}
            {error && <Text style={styles.categoryText}>Not found</Text>}

          </View>
        </ImageBackground>
      </TouchableOpacity>
    );
  }

const styles = StyleSheet.create({
  card: {
    marginVertical: 15,
    borderRadius: 3,
    height: 215
  },
  categoryText: {
    fontSize: 14
  },
  cityName: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  imageBg: { 
    width: '100%',
    height: '100%'
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15
  }
});