import React, { useState } from 'react';
import { View, Text, useWindowDimensions } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import CustomTabBar from '../../lib/customTabBar';
import Restaurant from './restaurant';
import Dishes from './dishes';

const FirstRoute = () => (
    <Restaurant/>
);

const SecondRoute = () => (
   <Dishes/>
);

const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
});

const MyFavourites = () => {
    const layout = useWindowDimensions();
    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: 'first', title: 'Restaurant' },
        { key: 'second', title: 'Dishes' },
    ]);




    return (
        <View style={{ flex: 1, backgroundColor: "white" }}>
            <View style={{ flex: 1 / 8, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ color: "black", }}>My Favourites</Text>
            </View>
            <View style={{ flex: 1, margin: 10 }}>
                <TabView
                    navigationState={{ index, routes }}
                    renderScene={renderScene}
                    onIndexChange={setIndex}
                    initialLayout={{ width: layout.width }}
                    renderTabBar={(props) => (
                        <CustomTabBar
                            {...props}
                            state={{ index, routes }}
                            navigation={{ navigate: (routeName) => setIndex(routes.findIndex(route => route.key === routeName)) }}
                            activeTextColor="#FF8A00"
                            inactiveTextColor="black"
                            indicatorColor="#FF8A00" 
                        />
                    )}
                />


            </View>
        </View>
    );
};

export default MyFavourites;

