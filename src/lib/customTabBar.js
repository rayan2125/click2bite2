import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const CustomTabBar = ({ state, navigation, activeTextColor, inactiveTextColor, indicatorColor }) => {
  const { routes, index: activeIndex } = state;

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
      {routes.map((route, index) => {
        const isRouteActive = index === activeIndex;
        const textColor = isRouteActive ? activeTextColor : inactiveTextColor;
        const tabIndicatorColor = isRouteActive ? indicatorColor : 'grey';
         const tabheight = isRouteActive? 5 : 3 

        return (
          <TouchableOpacity
            key={route.key}
            onPress={() => navigation.navigate(route.key)}
            style={{ padding: 16 }}
          >
            <Text style={{ color: textColor, width: 187,fontSize:20,textAlign:"center" }}>{route.title}</Text>
            
            <View style={{ backgroundColor: tabIndicatorColor, height: tabheight, marginTop: 5, width: '100%', }} />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default CustomTabBar;
