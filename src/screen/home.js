import { FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View, Modal, Image, PermissionsAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'
import Search from '../component/search'
import { useNavigation } from '@react-navigation/native'
import { Divider, Icon, Checkbox, Review } from 'react-native-paper'
import { Picker } from '@react-native-picker/picker';
import { callAxiosGet } from '../services/api'
import { API_CONSTANTS } from '../assets/config/constant'
import { allFoodCat } from '../services/Data/allFoodCat'
import colors from '../assets/config/colors'
import Geolocation from 'react-native-geolocation-service';
import icons from '../assets/config/icons'
import { Rating } from 'react-native-ratings'
import SkeletonC, { SkeletonCircle } from '../component/skeleton'
const Home = () => {

  const navigation = useNavigation()
  const [selectedFilter, setSelectedFilter] = useState(false)
  const [checked, setChecked] = useState(false);
  const [imageUrls, setImageUrls] = useState([])
  const [hotels, setHotels] = useState('')

  useEffect(() => {
    foodList()
    requestCameraPermission()
  }, [])

  const foodList = () => {
    callAxiosGet(API_CONSTANTS.listingItem).then(res => {
      let data = res?.data?.list

      // setallFoodCat(data)
      fetchAllImages(data)
    }).catch(err => console.log(err))
  }
  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Cool Photo App Camera Permission',
          message:
            'Cool Photo App needs access to your camera ' +
            'so you can take awesome pictures.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {

        Geolocation.getCurrentPosition(
          (position) => {
            
            let coo = position.coords

            let radius = 5
            callAxiosGet(`${API_CONSTANTS.findingHotel}?latitude=${coo?.latitude}&longitude=${coo?.longitude}&radius=${radius}`).then(res => {
              let hotel = res?.data?.hotels
              setHotels(hotel)
            }).catch()



          },
          (error) => {
            console.log(error.code, error.message);
          },
          { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
        );


      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const fetchAllImages = async (list, userId) => {
    const urls = await Promise.all(
      list.map(async (item, index) => {
        const imageUrl = `https://click2bite-d08bc9143b9c.herokuapp.com/api/merchant/read/${item.userId}/${item.image}`;
        const imageData = await fetch(imageUrl);
        return imageData.url;
      })
    );
    setImageUrls([...imageUrls, ...urls]);
  };



  const handleNavigate = async (item) => {
    // let data = item?.name
    // callAxiosGet(`${API_CONSTANTS.searchFood}?foodName=${data}`).then(res => {

    //   let foodata = res?.data ?? foods

    // }).catch(err => console.log(err))
    navigation.navigate("FoodView", item)

  }
  const handleModal = () => {

  }
  const handleFilter = () => {
    setSelectedFilter(true)
  }
  const handleCross = () => {
    setSelectedFilter(false)
  }
  const handlehotel = (item) => {
    navigation.navigate("RestaurantsViews", item)

  }
  return (
    <>
      <View style={{ flex: 1 }}>
        {/* header section */}
        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: 'space-between', paddingHorizontal: 10, paddingVertical: 10 }}>
          <TouchableOpacity onPress={() => navigation.navigate("addresses")} style={{ flexDirection: "row", alignItems: "center" }}>
            <Icon source="map-marker" size={30} color="green" />
            <Text>Mira Road</Text>
          </TouchableOpacity>


          <View style={{ width: "70%", flexDirection: "row", justifyContent: "space-around", alignItems: "center" }}>
            <TouchableOpacity
              style={{ backgroundColor: "red", height: 45, justifyContent: 'center', width: "60%", alignItems: 'center', borderRadius: 30 }} onPress={() => navigation.navigate("Itemsmenu")}>
              <Text style={{ color: "white", fontWeight: 'bold' }}>
                Subcriptions
              </Text>
            </TouchableOpacity>
            <View style={{ gap: 5 }}>
              <TouchableOpacity
                onPress={() => navigation.navigate("MyFavourites")}
                style={{ borderColor: "black", borderWidth: 1, height: 40, width: 40, borderRadius: 99, justifyContent: "center", alignItems: "center" }}>
                <Icon source="cards-heart" size={30} color='#FF8A00' />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => navigation.navigate("Cart")}
                style={{ borderColor: "black", borderWidth: 1, height: 40, width: 40, borderRadius: 99, justifyContent: "center", alignItems: "center" }}>
                <Icon source="cart" size={30} color='#FF8A00' />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={{ backgroundColor: "green", paddingVertical: 10, paddingHorizontal: 10, borderRadius: 10, height: "25%", margin: 9 }}>
          <Text>Slider</Text>
        </View>

        <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={true}>
          <Search />


          <View style={{ marginTop: 10, width: "100%", padding: 10, }}>
            <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
              <Text>Find By Category</Text>

              <TouchableOpacity onPress={handleModal}>
                <Text>View All</Text>
              </TouchableOpacity>

            </View>


            {
              hotels.length > 0 ?
                <FlatList
                  data={allFoodCat}
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  renderItem={({ item, index }) => (

                    <TouchableOpacity key={index} onPress={() => handleNavigate(item)}>
                      <View style={{ width: 130, margin: 5, paddingHorizontal: 10, paddingVertical: 10, borderRadius: 10 }}>
                        <Image source={item.img} style={{ width: 100, height: 100, borderRadius: 100 }} resizeMode='contain' />
                        <Text style={{ textAlign: "center", color: colors.textColor, fontSize: 16 }}>{item.name}</Text>
                      </View>
                    </TouchableOpacity>
                  )}
                /> :
                <FlatList
                  data={allFoodCat}
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  renderItem={({ item, index }) => (

                    <View style={{ marginHorizontal: 10, marginTop: 6 }}>

                      <SkeletonCircle />
                    </View>
                  )
                  }
                />
            }
          </View>
          <View style={{ marginTop: 10, width: "100%", padding: 10, margin: 4 }}>
            <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
              <Text> Top Restaurants </Text>
              <TouchableOpacity onPress={handleFilter}>

                <Text>Filter</Text>
              </TouchableOpacity>
            </View>

            {
              hotels.length > 0 ?
                <FlatList
                  showsVerticalScrollIndicator={false}
                  data={hotels}
                  renderItem={({ item, index }) => {
                    return (
                      <TouchableOpacity
                        onPress={() => handlehotel(item)}
                        key={index}
                        style={{ backgroundColor: colors.White, marginTop: 10, elevation: 1, marginBottom: 10, paddingHorizontal: 10, paddingVertical: 10, borderRadius: 10 }}>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                          <View style={{ backgroundColor: "red", borderRadius: 100, height: 50, width: 50 }}></View>

                          <View style={{ marginHorizontal: 20 }}>

                            <Text style={{ fontSize: 20, color: colors.textColor, fontWeight: "700", letterSpacing: .7, }}>{item.name}</Text>
                            <Text style={{ fontSize: 12, color: colors.textColor, width: '90%' }}>{item.address}</Text>
                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                              <Icon source={icons.location} size={25} />
                              <Text style={{ fontSize: 18, color: colors.textColor }}>{item.distance}m </Text>
                            </View>
                          </View>
                        </View>
                        <View style={{ position: 'absolute', bottom: 10, right: 10 }}>

                          <Rating
                            imageSize={20}
                            type='star' />

                        </View>
                      </TouchableOpacity>
                    )
                  }} />
                : <View>
                  <SkeletonC />
                </View>
            }

          </View>
        </ScrollView>
      </View>


      {
        selectedFilter &&
        <View>
          <Modal transparent={true}
            visible={selectedFilter}
          >
            <View style={{ flex: 1, backgroundColor: "#F8F0E3", }}>
              <ScrollView>

                <View style={{ flex: 1, top: 30, paddingVertical: 24, paddingHorizontal: 24, gap: 12 }}>
                  <View style={{ flexDirection: "row", }}>
                    <TouchableOpacity onPress={handleCross}>
                      <Text style={{ fontSize: 20 }}>X</Text>
                    </TouchableOpacity>
                    <Text style={{ marginHorizontal: 15, fontSize: 20 }}>Filter</Text>
                  </View>

                  <View style={{ backgroundColor: 'white', borderRadius: 20, paddingVertical: 24, paddingHorizontal: 24 }}>
                    <Text style={{ fontSize: 20, fontWeight: "400", color: "black" }}>Sort by</Text>
                    <Divider style={{ borderWidth: .5, borderColor: 'grey' }} />
                    <Checkbox.Item label="Recommended" status={checked ? 'checked' : 'unchecked'}
                      onPress={() => {
                        setChecked(!checked);
                      }} />
                    <Checkbox.Item label="Popularity" status={checked ? 'checked' : 'unchecked'}
                      onPress={() => {
                        setChecked(!checked);
                      }} />


                  </View>
                  <View style={{ backgroundColor: 'white', borderRadius: 20, paddingVertical: 24, paddingHorizontal: 24 }}>
                    <Text style={{ fontSize: 20, fontWeight: "400", color: "black" }}>Price</Text>
                    <Divider style={{ borderWidth: .5, borderColor: 'grey' }} />
                    <Checkbox.Item label="High to Low" status={checked ? 'checked' : 'unchecked'}
                      onPress={() => {
                        setChecked(!checked);
                      }} />
                    <Checkbox.Item label="Low to High" status={checked ? 'checked' : 'unchecked'}
                      onPress={() => {
                        setChecked(!checked);
                      }} />
                  </View>
                  <View style={{ backgroundColor: 'white', borderRadius: 20, paddingVertical: 24, paddingHorizontal: 24 }}>
                    <Text style={{ fontSize: 20, fontWeight: "400", color: "black" }}>Rating</Text>
                    <Divider style={{ borderWidth: .5, borderColor: 'grey' }} />
                    <Checkbox.Item label="4.5 & up" status={checked ? 'checked' : 'unchecked'}
                      onPress={() => {
                        setChecked(!checked);
                      }} />
                    <Checkbox.Item label="4.0 & up" status={checked ? 'checked' : 'unchecked'}
                      onPress={() => {
                        setChecked(!checked);
                      }} />
                    <Checkbox.Item label="3.5 & up" status={checked ? 'checked' : 'unchecked'}
                      onPress={() => {
                        setChecked(!checked);
                      }} />
                    <Checkbox.Item label="3.0 & up" status={checked ? 'checked' : 'unchecked'}
                      onPress={() => {
                        setChecked(!checked);
                      }} />
                  </View>
                  <View style={{ backgroundColor: 'white', borderRadius: 20, paddingVertical: 24, paddingHorizontal: 24 }}>
                    <Text style={{ fontSize: 20, fontWeight: "400", color: "black" }}>Delivery</Text>
                    <Divider style={{ borderWidth: .5, borderColor: 'grey' }} />
                    <Checkbox.Item label="0-20 minutes" status={checked ? 'checked' : 'unchecked'}
                      onPress={() => {
                        setChecked(!checked);
                      }} />
                    <Checkbox.Item label="0-30 minutes" status={checked ? 'checked' : 'unchecked'}
                      onPress={() => {
                        setChecked(!checked);
                      }} />
                    <Checkbox.Item label="0-45 minutes" status={checked ? 'checked' : 'unchecked'}
                      onPress={() => {
                        setChecked(!checked);
                      }} />
                    <Checkbox.Item label="0-60 minutes" status={checked ? 'checked' : 'unchecked'}
                      onPress={() => {
                        setChecked(!checked);
                      }} />
                  </View>
                </View>
              </ScrollView>
              <View style={{
                position: 'absolute', bottom: 0, backgroundColor: "white",
                paddingHorizontal: 10, paddingVertical: 10,
                borderTopRightRadius: 20, borderTopLeftRadius: 20, width: "100%", flexDirection: "row", alignItems: "center", justifyContent: 'space-around'
              }}>
                <TouchableOpacity style={{ borderColor: "#FF8A00", paddingHorizontal: 10, paddingVertical: 10, borderWidth: 1, borderRadius: 25, width: "35%", justifyContent: 'center', alignItems: "center" }}>
                  <Text style={{ color: "#FF8A00", fontWeight: "500" }}>Reset</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ backgroundColor: "#FF8A00", paddingHorizontal: 10, paddingVertical: 10, borderRadius: 25, width: "35%", justifyContent: 'center', alignItems: "center" }}>
                  <Text style={{ color: "black", fontWeight: "500" }}>Apply</Text>
                </TouchableOpacity>


              </View>
            </View>
          </Modal>
        </View>
      }
    </>

  )
}

export default Home

const styles = StyleSheet.create({})
