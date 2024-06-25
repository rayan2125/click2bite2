import { StyleSheet, Text, TouchableOpacity, View, FlatList, Image } from 'react-native'
import React, { useState } from 'react'
import { Icon } from 'react-native-paper'
import { callAxiosWithFormData } from '../../services/api'
import { API_CONSTANTS } from '../../assets/config/constant'
import CartComponent from '../../component/Custom/cartComponent'
import colors from '../../assets/config/colors'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'

const Cart = ({ route }) => {
    const selector = useSelector(state => state?.cartListing?.cartList)

    const navigation = useNavigation()
    // Destructure the params object from route
    // const { c2bSubcriptionFoods } = route.params;


    return (
        <View style={{ flex: 1, backgroundColor: colors.Primary }}>

            <View style={{ margin: 10, padding: 10, flexDirection: "row", alignItems: "center" }}>
                <TouchableOpacity onPress={() => navigation.pop()}>
                    <Icon source="arrow-left" size={28} />
                </TouchableOpacity>
                <Text style={{ marginHorizontal: 10, fontSize: 20, color: "black" }}>Your Cart</Text>
            </View>
            <View style={{ flex: 1, }}>
                <View style={{ flex: 1 }}>
                    {
                        selector.length > 0 ?
                            <FlatList
                                data={selector}
                                renderItem={({ item, index }) => {
                                    return (
                                        <CartComponent
                                            key={index}
                                            planType={item?.planType}
                                            perfer={item?.prefer}
                                            price={item?.price}
                                            id={item?.id}
                                            item={item}
                                        />
                                    )
                                }} /> :
                            <View style={{ backgroundColor: colors.Primary, justifyContent: "center", alignItems: "center" }}>
                                <Image source={require("../../assets/Image/cart.png")} style={{ height: '100%', width: 400, resizeMode: 'contain' }} />
                            </View>
                    }



                </View>

            </View>
        </View>
    )
}

export default Cart

const styles = StyleSheet.create({})
