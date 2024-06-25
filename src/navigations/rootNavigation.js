import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import Home from '../screen/home'
import SlashScreen from '../slashScreen'
import Login from '../screen/Auth/login'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Subcritions from '../screen/TabScreen/subcritions'
import Order from '../screen/TabScreen/order'
import Profile from '../screen/TabScreen/profile'
import Icon from "react-native-vector-icons/MaterialIcons"
import HotelView from '../screen/Hotel/hotelView'
import MyFavourites from '../screen/MyFab/myFavourites'
import Cart from '../screen/Cart/cart'
import RestaurantsViews from '../screen/Restaurants/restaurantsViews'
import FoodView from '../screen/Restaurants/foodView'
import Address from '../screen/Cart/address'
const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

export const TabNavi = () => {
  return (
    <Tab.Navigator 
    
    screenOptions={({ route }) => ({
        headerShown: false,
        tabBarLabelStyle: {
          fontSize: 12,

        },
        tabBarIcon: ({ color, size }) => {
          let iconName;


          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Subcribe') {
            iconName = 'comments';
          } else if (route.name === 'Profile') {
            iconName = 'user';
          } else if( route.name === 'Order'){
            iconName = 'order';
          }

          return <Icon name={iconName} color={color} size={size} />;
        },
        tabBarActiveTintColor: '#14213d',
        tabBarInactiveTintColor: '#eb5e28', 
        tabBarActiveBackgroundColor: '#e5e5e5', 
        tabBarInactiveBackgroundColor: 'white', 
        tabBarShowLabel: true, 
      })}
    >
      <Tab.Screen name='Home' component={Home}
       options={{
        tabBarLabel: 'Home',
      }} />
      <Tab.Screen name='Subcribe' component={Subcritions}
       options={{
        tabBarLabel: 'Subcribe',
      }} />
      <Tab.Screen name='Order' component={Order}
        options={{
            tabBarLabel: 'Order',
          }}
       />
      <Tab.Screen name='Profile' component={Profile}
        options={{
            tabBarLabel: 'Profile',
          }} />
    </Tab.Navigator>
  )
}

const RootNavigation = () => {
  return (
    <Stack.Navigator initialRouteName='SlashScreen' screenOptions={{ headerShown: false }}>
      <Stack.Screen name='SlashScreen' component={SlashScreen} />
      <Stack.Screen name='Home' component={TabNavi} />
      <Stack.Screen name='Login' component={Login} />
      <Stack.Screen name='HotelView' component={HotelView}/>
      <Stack.Screen name='MyFavourites' component={MyFavourites}/>
      <Stack.Screen name='Cart' component={Cart}/>
      <Stack.Screen name='RestaurantsViews' component={RestaurantsViews}/>
      <Stack.Screen  name='FoodView' component={FoodView}/>
      <Stack.Screen name='Address' component={Address}/>
    </Stack.Navigator>
  )
}

export default RootNavigation
