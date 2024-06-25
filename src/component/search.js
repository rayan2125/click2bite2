import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from "react-native-vector-icons/FontAwesome5"
import { Searchbar, TextInput } from 'react-native-paper'

const Search = () => {
  return (
    <View style={{margin:9}}>
      <Searchbar
      style={{backgroundColor:"#FF8A00"}}
      placeholderTextColor="white"
        iconColor='white'
        placeholder='What you would like to eat ?'
        />
      
    </View>
  )
}

export default Search

const styles = StyleSheet.create({})