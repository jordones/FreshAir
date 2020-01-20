import React from "react";
import {
  SafeAreaView,
  Text,
  Button,
  ActivityIndicator,
  ImageBackground
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const CityCard = ({ name, data, error, imageUrl, onPress }) => {
  if (error) {
    return (
      <TouchableOpacity
        onPress={onPress}
        style={{
          backgroundColor: "grey",
          marginVertical: 15,
          borderRadius: 3,
          height: 215,
        }}
      >
        <ImageBackground
          style={{ width: "100%", height: "100%" }}
          source={{ uri: imageUrl }}
        >
          <Text style={{ fontSize: 24, fontWeight: "bold", padding: 15 }}>{name}</Text>
        </ImageBackground>
      </TouchableOpacity>
    );
  } else {
    const {
      data: {
        indexes: {
          baqi: { aqi_display, color, category, dominant_pollutant }
        }
      }
    } = data;

    return (
      <TouchableOpacity
        onPress={onPress}
        style={{
          backgroundColor: color,
          marginVertical: 15,
          borderRadius: 3,
          height: 215
        }}
      >
        <ImageBackground
          style={{ width: "100%", height: "100%" }}
          source={{ uri: imageUrl }}
        >
          <Text style={{ fontSize: 24, fontWeight: "bold", padding: 15 }}>{name}</Text>
        </ImageBackground>
      </TouchableOpacity>
    );
  }
};

export default ({ cityList, loading, openCityAirQualityScreen }) => {
  if (loading) {
    return (
      <SafeAreaView
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <ActivityIndicator />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={{ marginHorizontal: 20, marginVertical: 40 }}>
      {cityList.map(({ name, data, error, imageUrl }) => {
        console.log(name);
        return (
          <CityCard
            key={name}
            name={name}
            data={data}
            error={error}
            imageUrl={imageUrl}
            onPress={() => openCityAirQualityScreen(name, data)}
          />
        );
      })}
    </SafeAreaView>
  );
};
