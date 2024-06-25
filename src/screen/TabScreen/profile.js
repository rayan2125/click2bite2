import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import IconWithText from '../../component/iconWithText'

const Profile = () => {
  const data = ["Edit Profile", "Payment", "Address", "Notification", "Security", "Language", "Help Center", "Pravacy Policy", "LogOut"]
  return (
    <View style={{ margin: 10, flex: 1 }}>
      <View style={{ justifyContent: "center", alignItems: 'center' }}>
        <Text> My Profile</Text>
      </View>
      <View style={{ backgroundColor: "black", height: 80, borderRadius: 18 }}>
        <View style={{
          backgroundColor: "grey", position: 'absolute', height: 60,
          justifyContent: 'center', alignItems: "center",
          width: 60, borderRadius: 100, left: 25, top: -20, borderColor: "black", borderWidth: 5
        }}>
          <Text style={{ color: 'white' }}>img</Text>
        </View>
        <Text style={{ color: "white" }}>tttt</Text>
      </View>
      <FlatList
        data={data}
        renderItem={({ item, index }) => {
          return (

            <IconWithText
              title={item}
            />
          )
        }}
      />
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({})