import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon from "react-native-vector-icons/FontAwesome5"
import MaterialIcons from "react-native-vector-icons/MaterialCommunityIcons"
import { useDispatch } from 'react-redux'
import { logout, } from '../redux/Reducers/authReducers'
import { useNavigation } from '@react-navigation/native'
const IconWithText = ({ title, nameOFIcon }) => {
  let navigation = useNavigation()
  let dispatch = useDispatch()
  const handleNavigation = (title) => {
    console.log("",title)
    if(title==="Address"){
      navigation.navigate("Address")
    }
    if (title === "LogOut") {
      dispatch(logout())
      navigation.navigate("Login")
      
    }
  }
  return (
    <TouchableOpacity

      onPress={() => handleNavigation(title)}
      style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 5 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>

        <Icon name={nameOFIcon} color="black" size={20} />
        <Text style={{ marginHorizontal: 30, color: "black", fontWeight: "600" }}>{title}</Text>
      </View>
      <MaterialIcons name="greater-than" color="black" size={20} />
    </TouchableOpacity>
  )
}

export default IconWithText

const styles = StyleSheet.create({})