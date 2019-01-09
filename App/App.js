

import { LoginScreen } from './src/screens/LoginScreen';
import { RegisterScreen } from './src/screens/RegisterScreen';
import { HomeScreen } from './src/screens/HomeScreen';
import { ThankyouScreen } from './src/screens/ThankyouScreen';
import { ListProductScreen } from './src/screens/ListProductScreen';
import { ListTypeOfProductScreen } from './src/screens/ListTypeOfProductScreen';
import { CartScreen } from './src/screens/CartScreen';
import { createBottomTabNavigator, createStackNavigator, createAppContainer } from "react-navigation";


const AppTabNavigator = createBottomTabNavigator({
  Home: HomeScreen,
  MatHang: ListTypeOfProductScreen,
  User: LoginScreen,
  Cart: CartScreen,
});


const App = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  Login: {
    screen: LoginScreen
  },
  Register: {
    screen: RegisterScreen
  },
  ListProduct: {
    screen: ListProductScreen
  },
  ListTypeOfProduct: {
    screen: ListTypeOfProductScreen
  },
  Tabs: {
	screen: AppTabNavigator  
  }
}, {
   initialRouteName: "Tabs"
});

export default createAppContainer(App);


