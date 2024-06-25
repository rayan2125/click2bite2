import { StyleSheet, Image, Text, View, StatusBar } from 'react-native';
import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import colors from './assets/config/colors';
import { useSelector } from 'react-redux';

const SlashScreen = () => {
  const navigation = useNavigation();
  const selector = useSelector(state => state.auth.authData)

  let data = selector === null ? 'Login' : 'Home'
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate(data)
    }, 3000);
  }, []);

  return (
    <>
      <View style={{ flex: 1, alignItems: "center", backgroundColor: colors.White }}>
        {/* Set status bar color */}
        <StatusBar backgroundColor={colors.White} />
        <View style={{ borderColor: colors.Primary, flex: 1, justifyContent: "center" }}>
          <Image
            source={require('./assets/Image/C2Blogo.png')}
            resizeMode='contain'
            style={{ height: 200 }}
          />
        </View>
        <View style={{ alignItems: "center", }}>

          <Text style={{ color: colors.textColor, fontSize: 20, fontWeight: '500' }}>SAKSHAM@2024</Text>
        </View>
      </View>
    </>
  );
};

export default SlashScreen;

const styles = StyleSheet.create({});
