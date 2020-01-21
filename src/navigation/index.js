import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import CityListScreen from '../../src/screens/CityListScreen';
import CityAirQualityScreen from '../../src/screens/CityAirQualityScreen';

const MainNavigator = createStackNavigator(
  {
    CityList: {
      screen: CityListScreen,
      navigationOptions: {
        title: 'Fresh Air 🌬️'
      }
    },
    CityAirQuality: {
      screen: CityAirQualityScreen,
      navigationOptions: ({navigation}) => {
        return {
          title: navigation.getParam('name', 'City'),
          headerBackTitle: 'back'
        };
      }
    },
  },
  {
    initialRouteName: 'CityList',
  },
);

const App = createAppContainer(MainNavigator);

export default App;
