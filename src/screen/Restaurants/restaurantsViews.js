import React, { useEffect, useState } from 'react';
import { FlatList, Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import colors from '../../assets/config/colors';
import { Icon } from 'react-native-paper';
import icons from '../../assets/config/icons';
import { callAxiosGet } from '../../services/api';
import { API_CONSTANTS } from '../../assets/config/constant';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { addCart, } from '../../redux/Reducers/cartReducers';

const RestaurantsViews = ({ route }) => {
  const navigation = useNavigation()
  let dispatch = useDispatch()
  const { params } = route;
  const { userId, image } = params;
  const [imageUrl, setImageUrl] = useState();
  const [alldata, setAllData] = useState('')
  const [expandId, setExpandId] = useState('')
  useEffect(() => {
    hotelDetails()
    const fetchImage = async () => {
      try {
        const response = await fetch(`https://click2bite-d08bc9143b9c.herokuapp.com/api/merchant/read/${userId}/${image}`);

        setImageUrl(response.url);
      } catch (error) {
        console.error('Failed to fetch image:', error);
      }
    };

    fetchImage();
  }, [userId, image]);


  let handleCart = (item) => {
    dispatch(addCart(item))
    navigation.navigate('Cart', item)
  }
  let hotelDetails = async () => {
    await callAxiosGet(`${API_CONSTANTS.detailsHotel}?userId=${userId}`).then(res => {
      let { subscriptions } = res?.data
      console.log("checking data is ",subscriptions)
      setAllData(subscriptions)
    }).catch(err => console.log(err))
  }
  const handleExpand = (itemId) => {
    setExpandId(prevExpandId => prevExpandId === itemId ? '' : itemId);
  };
  return (
    <View style={{ flex: 1 }}>
      <View style={{ alignSelf: 'center' }}>
        <TouchableOpacity
          onPress={() => navigation.pop()}
          style={{ position: "absolute", left: 10, top: 10, zIndex: 99, backgroundColor: colors.Primary, height: 45, width: 45, borderRadius: 100, justifyContent: 'center', alignItems: 'center' }}>
          <Icon source="chevron-left" size={25} color={colors.White} />
        </TouchableOpacity>
        <Image source={{ uri: imageUrl }} style={{ height: 200, resizeMode: "cover", width: 400 }} />
      </View>
      <View style={{ margin: 10, flex: 1 }}>
        <Text style={{ color: colors.textColor, fontSize: 18 }}>{params.name}</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Icon source={icons.location} />
          <Text style={{ color: colors.textColor, fontSize: 14 }}>{params.address}</Text>
        </View>
        <View style={{ flex: 1 }}>
          <FlatList
            key="flatlist1"
            showsVerticalScrollIndicator={false}
            data={alldata}
            renderItem={({ item, index }) => {


              let listItem = item?.c2bSubcriptionFoods

              return (
                <>

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
                      <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>

                        <Text style={{ fontSize: 20, color: colors.textColor, }}>{item?.planType}</Text>
                        <Text style={{ fontSize: 18, color: colors.textColor, }}>{item?.price} Rs/-</Text>
                      </View>

                      <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 10, marginTop: 15, marginBottom: 20 }}>
                        {


                          listItem.slice(0, 3).map((items, indexs) => (

                            <View key={indexs} style={{
                              width: '30.33%',
                              flexWrap: "wrap",
                              paddingHorizontal: 10,
                              justifyContent: "space-around",
                              alignItems: "center",
                              borderColor: colors.textColor,
                              borderWidth: 1,
                              borderRadius: 100
                            }}>

                              <Text style={{ fontSize: 12, color: colors.textColor, textAlign: "center" }}>{items?.c2bFood?.name}</Text>

                            </View>
                          ))}
                      </View>
                      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>

                        <TouchableOpacity

                          style={{
                            width: "40%",
                            zIndex: 99, borderRadius: 20, justifyContent: 'center', alignItems: 'center',
                            borderColor: colors.Primary,
                            borderWidth: 1,
                            paddingHorizontal: 5, paddingVertical: 5
                          }}>
                          {/* <Text style={{ color: colors.Primary, fontSize: 18, fontWeight: "600", }}>Details</Text> */}
                          <Icon source="clipboard-search" color={colors.Primary} size={25} />
                        </TouchableOpacity>
                        <TouchableOpacity
                          onPress={() => handleCart(item)}
                          style={{
                            width: "40%",
                            zIndex: 99, backgroundColor: colors.Primary, borderRadius: 20, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 5, paddingVertical: 5
                          }}>
                          <Icon source="cart" color={colors.White} size={25} />
                          {/* <Text style={{ color: colors.White, fontSize: 18, fontWeight: "600" }}>Add Cart</Text> */}
                        </TouchableOpacity>
                      </View>

                    </View>
                  </View>
                </>
              )
            }} />
        </View>
      </View>
    </View>
  );
};

export default RestaurantsViews;

const styles = StyleSheet.create({});
