import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity, ImageBackground } from 'react-native';
import React from 'react';
import { Icon } from 'react-native-paper';

const HotelView = ({ route }) => {
  const screenHeight = Dimensions.get('window').height;
  const imageHeight = screenHeight * 0.35; // 40% of the screen height

  return (
    <View style={{ flex: 1 }}>
      <View>
        <ImageBackground
          source={require("../../assets/Image/1.jpg")}
          style={[styles.imageStyle, { height: imageHeight }]}
          resizeMode="contain"
        >
          <TouchableOpacity >

            <Icon source="less-than" />
          </TouchableOpacity>
        </ImageBackground>
      </View>
      <View style={styles.mainHeader}>

        <Text style={styles.text}>Sangam Restaurant</Text>
        <View style={{ flexDirection: 'row', gap: 10 }}>
          <Text>Star</Text>
          <Text>4.7</Text>
          <Text>(104)</Text>
          <Text>Revies</Text>
        </View>
        <View>
          <Text>North Indian . Chinese . Jain</Text>
          <Text>7:00 AM - 11:00 PM</Text>
          <Text>Serves : Breakfast , Lunch and Dinner</Text>
        </View>
        <View style={{ flexDirection: "row", width: "100%", justifyContent: "space-between" }}>
          <TouchableOpacity style={[styles.ordernow, { backgroundColor: "orange", width: "50%", paddingHorizontal: 18, paddingVertical: 18, }]}>
            <Text style={{ color: "white" }}>Order now</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.Subscribe, { backgroundColor: "black", width: "50%", paddingVertical: 18, paddingHorizontal: 18, }]}>
            <Text style={{ color: "white" }}>Subscribe</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.text}>Breakfast</Text>
          <View>
            <View>
              <Text>
                Mini Tiffin
              </Text>
            </View>
            <TouchableOpacity>
              <Text>-ADD+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default HotelView;

const styles = StyleSheet.create({
  imageStyle: {
    // Other image styles can be added here if needed
  },
  mainHeader: {
    flex: 1,
    backgroundColor: "white",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    paddingHorizontal: 25,
    paddingVertical: 25
  },
  text: {
    fontSize: 22,
    color: "#141414",
    fontWeight: "500"
  },
  Subscribe: {
    borderBottomEndRadius: 10,
    borderTopEndRadius: 10,
    alignItems: "center",

  },
  ordernow: {
    borderTopStartRadius: 10,
    borderBottomStartRadius: 10,
    alignItems: "center",
  }
});
