import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import CityListScreen from '../../src/screens/CityListScreen';
import CityAirQualityScreen from '../../src/screens/CityAirQualityScreen';

const MainNavigator = createStackNavigator(
  {
    CityList: {screen: CityListScreen},
    CityAirQuality: {screen: CityAirQualityScreen},
  },
  {
    initialRouteName: 'CityList',
  },
);

const App = createAppContainer(MainNavigator);

export default App;
