import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import colors from '../../assets/config/colors'
import { useDispatch } from 'react-redux'
import { removeCart } from '../../redux/Reducers/cartReducers'
import { useNavigation } from '@react-navigation/native'

const CartComponent = ({ planType, perfer, price, id,item }) => {
    const navigation = useNavigation()
    let dispatch = useDispatch()
    const handleRemove = (id) => {
        dispatch(removeCart(id))
    }
    const handleCart =(item)=>{
navigation.navigate("Order",item)
        console.log("checking +++",item)
    }
    return (
        <View>
            <View style={{
                elevation: 5,
                zIndex: 10,
                marginHorizontal: 10,
                marginVertical: 10,
                backgroundColor: colors.White,
                borderRadius: 15,
                paddingHorizontal: 20,
                paddingVertical: 20,
                marginTop: 20
            }}>
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <Text style={{ color: colors.textColor, fontSize: 16, fontWeight: '600' }}>Product Name</Text>
                    <Text style={{ color: colors.textColor, fontSize: 16, fontWeight: '600' }}>Combo with Rice </Text>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <Text style={{ color: colors.textColor, fontSize: 16, fontWeight: '600' }}>Prefer By</Text>
                    <Text style={{ color: colors.textColor, fontSize: 16, fontWeight: '600' }}>{perfer}</Text>
                </View>
                {/* <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <Text style={{ color: colors.textColor, fontSize: 16, fontWeight: '600' }}>Quantity</Text>
                    <View style={{ flexDirection: "row", borderColor: colors.textColor, borderWidth: 1, borderRadius: 100 }}>
                        <TouchableOpacity>
                            <Text style={{ marginHorizontal: 10 }}>-</Text>
                        </TouchableOpacity>
                        <Text style={{ color: colors.textColor, fontSize: 16, fontWeight: '600' }}>1</Text>
                        <TouchableOpacity>
                            <Text style={{ marginHorizontal: 10 }}>+</Text>
                        </TouchableOpacity>
                    </View>
                </View> */}
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <Text style={{ color: colors.textColor, fontSize: 16, fontWeight: '600' }}>Plan Type</Text>
                    <Text style={{ color: colors.textColor, fontSize: 16, fontWeight: '600' }}>{planType}</Text>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <Text style={{ color: colors.textColor, fontSize: 16, fontWeight: '600' }}>Price</Text>
                    <Text style={{ color: colors.textColor, fontSize: 16, fontWeight: '600' }}>{price}Rs/-</Text>
                </View>

                <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 10 }}>

                    <TouchableOpacity
                        onPress={() => handleRemove(id)}
                        style={{
                            width: "40%",
                            zIndex: 99, borderRadius: 20, justifyContent: 'center', alignItems: 'center',
                            borderColor: colors.Primary,
                            borderWidth: 1,
                            paddingHorizontal: 5, paddingVertical: 5
                        }}>
                        <Text style={{ color: colors.Primary, fontSize: 18, fontWeight: "600", }}>Cancel</Text>

                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => handleCart(item)}
                        style={{
                            width: "40%",
                            zIndex: 99, backgroundColor: colors.Primary, borderRadius: 20, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 5, paddingVertical: 5
                        }}>

                        <Text style={{ color: colors.White, fontSize: 18, fontWeight: "600" }}>Order</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default CartComponent

const styles = StyleSheet.create({})