import { StyleSheet, Text, View, TouchableOpacity, FlatList, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Icon } from 'react-native-paper'
import colors from '../../assets/config/colors'
import { callAxiosGet } from '../../services/api'
import { API_CONSTANTS } from '../../assets/config/constant'
import { Skeleton } from 'native-base'
import SkeletonC from '../../component/skeleton'

const FoodView = ({ route }) => {
    let item = route?.params
    useEffect(() => {

        setTimeout(() => {
            foodData()
        }, 2000);
    }, []);
    let navigation = useNavigation()
    const [foodies, setFoodies] = useState('')


    const handleOrder = (item) => {
        console.log(item)
    }
    let foodData = async () => {

        let data = item?.name
        console.log(data)
        await callAxiosGet(`${API_CONSTANTS.searchFood}?foodName=${data}`).then(res => {
            let foodata = res?.data?.foods
            console.log("checking",foodData)
            setFoodies(foodata)
        }).
            catch(err => console.log(err))
    }

    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 1, margin: 10 }}>
                <TouchableOpacity
                    onPress={() => navigation.pop()}
                    style={{ backgroundColor: colors.Primary, height: 45, width: 45, borderRadius: 100, justifyContent: 'center', alignItems: 'center' }}>
                    <Icon source="chevron-left" size={25} color={colors.White} />
                </TouchableOpacity>

                {foodies? (
                    <FlatList

                        data={foodies}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item, index }) => {
                            return (
                                <View key={index} style={{ backgroundColor: colors.White, paddingHorizontal: 5, paddingVertical: 5, borderRadius: 10, marginTop: 10 }}>
                                    <Image source={require("../../assets/Image/rice.jpg")} resizeMode='contain' style={{ width: 100, height: 100 }} />
                                    <Text style={{ color: colors.textColor, fontSize: 18, letterSpacing: .5 }}>{item?.name}</Text>
                                    <Text style={{ color: colors.textColor, fontSize: 18, letterSpacing: .5 }}>{item?.price}</Text>
                                    <TouchableOpacity onPress={() => handleOrder(item)} style={{ position: "absolute", bottom: 10, right: 10 }}>
                                        <Text style={{}}>Order Now</Text>
                                    </TouchableOpacity>
                                </View>
                            )
                        }} />
                ) : (
                    <View style={{flex:1,alignItems:"center"}}>

                        <SkeletonC />
                        <SkeletonC />
                        <SkeletonC />
                    </View>
                )}
            </View>
        </View>
    )
}


export default FoodView

const styles = StyleSheet.create({})