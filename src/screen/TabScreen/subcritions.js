import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon from "react-native-vector-icons/FontAwesome5"
import { Button, Divider } from 'react-native-paper'
const Subcritions = () => {
  return (
    <View style={{flex:1,margin:10,padding:5}}>
      <View>
        <TouchableOpacity>
          <Icon name="arrow-left"/>
        </TouchableOpacity>
      </View>
      <Text>Create subscription plan</Text>
      <View>
        <Text>Lunch</Text>
        <View style={{flexDirection:"row", justifyContent:"space-between",alignItems:'center'}}>
          <View>  
          <Text>Chole kulche,Paratha, Mini Thali,Paneer curry</Text>
          <Text>Chole kulche,Paratha, Mini Thali,Paneer curry</Text>
          </View>
          <View>
            <Text>img</Text>
          </View>
        </View>
        <Divider
        style={{backgroundColor:"orange",height:2,marginTop:5}}
        bold={true}/>
        <View>
          <View>
            <Text>Create subcritions plan</Text>
            <Text style={{color:"orange", fontSize:15}}>Renew subcritions on a weekly/monthly basis </Text>
          </View>
          <View style={{marginTop:16}}>
            <TouchableOpacity style={{flexDirection:"row", alignItems:"center",justifyContent:"space-around",width:"80%"}}>
              <Text style={{backgroundColor:"white",zIndex:5,elevation:9,paddingVertical:10,paddingHorizontal:10,borderRadius:12,width:80,textAlign:"center"}}>weekly</Text>
              <Text style={{backgroundColor:"white",zIndex:5,elevation:9,paddingVertical:10,paddingHorizontal:10,borderRadius:12,width:80,textAlign:"center"}}>Monthly</Text>
              <Text style={{backgroundColor:"white",zIndex:5,elevation:9,paddingVertical:10,paddingHorizontal:10,borderRadius:12,width:80,textAlign:"center"}}>Custom</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  )
}

export default Subcritions

const styles = StyleSheet.create({})