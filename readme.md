# FreshAir 🌬️

A simple React Native application integrating the [Breezeometer](https://breezometer.com/) api.

## Usage

To run this app on your own machine (assuming macOS):

_note: you must have cocoapods and npm installed on your machine to install FreshAir's dependencies_

### Clone the Repo

```
$ git clone https://github.com/jordones/FreshAir.git
```

### Swap the API Key

I've included my test API key for the Breezometer API in `/src/services/AirQuality.js`,
to use this app, sign up for [Breezeometer](https://breezometer.com/) and input your key here.

_note: API keys should not be stored in production code in practice_

### Install dependencies
```
$ cd FreshAir
$ npm i
$ cd ./ios
$ pod install
```
### Start the app

```
cd ..
npx react-native run-ios
```