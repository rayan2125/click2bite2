import { Image, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import colors from '../../assets/config/colors';
import { Icon, TextInput } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { callAxios, callAxiosGet } from '../../services/api';
import { API_CONSTANTS } from '../../assets/config/constant';
import { useDispatch, useSelector } from 'react-redux';
import AddressCard from '../../component/Card/addressCard';
import { addAdress, removeAllAddresses } from '../../redux/Reducers/addressReducers';

const Address = ({ }) => {
    let dispatch = useDispatch()
    let selector = useSelector(state=>state.addressLiting)
   

    useEffect(() => {
        viewAddress()
       dispatch(removeAllAddresses())
    }, [])
    const [addressData, setAddressData] = useState()
    {
        addressData != undefined && addressData.length > 0 ?

            console.log("data is minnig") : console.log("not is mininig")
    }

    const navigation = useNavigation()
    const handleAddress = () => {
        setOpenModal(!openModal)
    }

    const [openModal, setOpenModal] = useState(false)
    const [state, setState] = useState({
        street: '',
        city: '',
        state: '',
        zipCode: ''
    })
    const handleSubmit = (state) => {
        // let req= {
        //     userId:userId
        // }
        callAxios(API_CONSTANTS.address, state).then(res => console.log("data is::", res.data)).catch(err => console.log(err))
    }


    let viewAddress = () => {
        callAxiosGet(API_CONSTANTS.viewAddress).then(res => {
            let data = res.data?.data?.c2bAddresses
            console.log(data.length)
            // dispatch(addAdress(data))
            setAddressData(data)
        }).catch(err => console.log(err))
    }

    return (
        <View style={{ flex: 1, margin: 10 }}>
            <View>
                <TouchableOpacity
                    onPress={() => navigation.pop()}
                    style={{ backgroundColor: colors.Primary, height: 45, width: 45, borderRadius: 100, justifyContent: 'center', alignItems: 'center' }}>
                    <Icon source="chevron-left" size={25} color={colors.White} />
                </TouchableOpacity>
            </View>
            {/* 
            {
                addressData.length >= 0 ?
                    <View style={{ flex: 1 }} >

                        <AddressCard />
                        <TouchableOpacity
                            onPress={() => handleAddress()}
                            style={{
                                position: "absolute", right: 0, bottom: 0,
                                backgroundColor: colors.Primary, height: 40, width: 40, borderRadius: 100, alignItems: "center",
                                justifyContent: 'center'
                            }}>
                            <Icon source="plus" color={colors.White} size={25} />
                        </TouchableOpacity>
                    </View> :
                    <>
                        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                            <Image
                                source={require("../../assets/Image/address.png")}
                                style={{ resizeMode: "contain", height: 400, width: 350 }}
                            />
                        </View>
                        <View style={{ alignItems: "center", marginBottom: 20 }}>
                            <TouchableOpacity
                                onPress={() => handleAddress()}
                                style={{ backgroundColor: colors.Primary, paddingHorizontal: 10, paddingVertical: 10, borderRadius: 18, marginVertical: 5, width: "90%", alignItems: "center" }}>
                                <Text style={{ color: colors.White, fontSize: 16, fontWeight: '400' }}>Add Your Address </Text>
                            </TouchableOpacity>
                        </View>
                    </>




            } */}

            <Modal
                transparent={true}
                visible={openModal}
            >
                <View style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.8)", justifyContent: "center", alignItems: "center" }}>
                    <View style={{ backgroundColor: colors.White, justifyContent: "center", width: '75%', borderRadius: 10, paddingHorizontal: 10, paddingVertical: 10, gap: 10 }}>

                        <TextInput
                            mode='outlined'
                            label="Street"
                            keyboardType="default"
                            value={state.street}
                            onChangeText={(text) => setState({ ...state, street: text })}
                        />
                        <TextInput
                            mode='outlined'
                            label="City"
                            keyboardType="default"
                            value={state.city}
                            onChangeText={(text) => setState({ ...state, city: text })}
                        />
                        <TextInput
                            mode='outlined'
                            label="State"
                            keyboardType="default"
                            value={state.state}
                            onChangeText={(text) => setState({ ...state, state: text })}
                        />
                        <TextInput
                            mode='outlined'
                            label="ZipCode"
                            keyboardType="numeric"
                            value={state.zipCode}
                            onChangeText={(text) => setState({ ...state, zipCode: text })}
                        />

                        <TouchableOpacity
                            onPress={() => handleSubmit(state)}
                            style={{ backgroundColor: colors.Primary, marginTop: 10, paddingHorizontal: 10, paddingVertical: 10, justifyContent: "center", alignItems: "center", borderRadius: 10 }}>
                            <Text>
                                Submit
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => setOpenModal(!openModal)}
                            style={{ backgroundColor: colors.cancel, position: "absolute", right: -10, top: -10, height: 20, width: 20, borderRadius: 100, justifyContent: "center", alignItems: "center" }}>
                            <Text>
                                X
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

export default Address;

const styles = StyleSheet.create({});
