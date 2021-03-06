
import { LoginScreen } from './src/screens/LoginScreen';
import { RegisterScreen } from './src/screens/RegisterScreen';
import { HomeScreen } from './src/screens/HomeScreen';
import { ThankyouScreen } from './src/screens/ThankyouScreen';
import { ListProductScreen } from './src/screens/ListProductScreen';
import { ListTypeOfProductScreen } from './src/screens/ListTypeOfProductScreen';
import { SingleProductScreen } from './src/screens/SingleProductScreen';
import { CartScreen } from './src/screens/CartScreen';
import { CheckoutScreen } from './src/screens/CheckoutScreen';
import { UserScreen } from './src/screens/UserScreen';
import { DonHangScreen } from './src/screens/DonHangScreen';
import { SearchResultScreen } from './src/screens/SearchResultScreen';
import { createBottomTabNavigator, createStackNavigator, createAppContainer } from "react-navigation";
import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const AppTabNavigator = createBottomTabNavigator({
  Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarLabel:"Home",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="home" size={25} color="#000" />
        )
      },
    },
  MatHang:{
      screen: ListTypeOfProductScreen,
      navigationOptions: {
        tabBarLabel:"Mặt Hàng",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="shopping-bag" size={20} color="#000" />
        )
      },
    },
  User: {
      screen: UserScreen,
      navigationOptions: {
        tabBarLabel:"User",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="user" size={25} color="#000" />
        )
      },
    },
  Cart: {
      screen: CartScreen,
      navigationOptions: {
        tabBarLabel:"Giỏ hàng",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="shopping-cart" size={25} color="#000" />
        )
      },
    },
});


const App = createStackNavigator({
	Thanks: {
		screen: ThankyouScreen
		
	},
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
  SingleProduct:{
	screen: SingleProductScreen
  },
  SearchResult:{
	  screen: SearchResultScreen
  },
  Checkout:{
	screen: CheckoutScreen
  },
  DonHang:{
	screen: DonHangScreen
  },
  Tabs: {
	screen: AppTabNavigator,
	navigationOptions: {
		header:null
	},	
  }
}, {
   initialRouteName: "Tabs"
});

export default createAppContainer(App);


