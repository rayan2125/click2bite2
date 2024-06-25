import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import AddressCard from '../../component/Card/addressCard'
import colors from '../../assets/config/colors'
import { callAxios } from '../../services/api'
import { API_CONSTANTS } from '../../assets/config/constant'

const Order = ({route}) => {
  const handleOder = ()=>{
    let req={
      productId:3,
      addressId:9
    }
callAxios(API_CONSTANTS.order,req).then(res=>console.log("checking ::",res)).catch(err=>console.log(err))
  }
  return (
    <View style={{flex:1,margin:10}}>
      <View>
        <View>
          <Text>
            products 
          </Text>
        </View>
      </View>
      <AddressCard/>
      {/* <Text>Order</Text> */}
      <TouchableOpacity onPress={()=>handleOder()} style={{backgroundColor:colors.Primary,marginTop:10}} >
        <Text>Order</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Order

const styles = StyleSheet.create({})