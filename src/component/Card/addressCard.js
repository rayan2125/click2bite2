import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import colors from '../../assets/config/colors'
import { Icon } from 'react-native-paper'

const AddressCard = () => {
    return (
        <View style={{}}>
            <View style={{ backgroundColor: colors.White, paddingHorizontal: 25, paddingVertical: 25, elevation: 5, marginTop: 10, borderRadius: 10 }}>

                <View>
                    <View >
                        <Text style={{ fontSize: 16, color: colors.textColor, fontWeight: '500' }}>Dhananjay Dubey</Text>
                    </View>
                    <Text style={{ fontSize: 16, color: colors.textColor, fontWeight: '400' }}>B/309 ,Sai Shiv Amrut Nagar,Talav Road</Text>
                    <Text style={{ fontSize: 16, color: colors.textColor, fontWeight: '400' }}>Bhayander(East)</Text>
                    <Text style={{ fontSize: 16, color: colors.textColor, fontWeight: '400' }}>Mira-Bhayander,Maharstra,401105</Text>
                    <Text style={{ fontSize: 16, color: colors.textColor, fontWeight: '400' }}>Phone Number:8104781464</Text>
                </View>
                <View style={{flexDirection:"row",marginTop:10}}>

                <TouchableOpacity style={{borderRadius:10,paddingHorizontal:10,paddingVertical:10,elevation:5,backgroundColor:colors.White,width:50}}>
                    <Text style={{fontSize:14,fontWeight:"400",color:colors.textColor,textAlign:'center'}}>Edit</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{borderRadius:10,paddingHorizontal:10,paddingVertical:10,elevation:5,backgroundColor:colors.White,marginHorizontal:20}}>
                    <Text style={{fontSize:14,fontWeight:"400",color:colors.textColor}}>Remove</Text>
                </TouchableOpacity>
                </View>

            </View>
        </View>
    )
}

export default AddressCard

const styles = StyleSheet.create({})