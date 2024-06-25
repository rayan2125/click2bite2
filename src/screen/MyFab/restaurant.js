import { StyleSheet, Text, View ,FlatList,TouchableOpacity} from 'react-native'
import React from 'react'

const Restaurant = () => {
    const data = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
    return (
        <View style={{ flex: 1 }}>
          <FlatList
            data={data}
            style={{ padding: 25 }}
            renderItem={({ item, index }) => {
              return (
                <View style={{ backgroundColor: "red", margin: 5, borderRadius: 15, paddingHorizontal: 10, paddingVertical: 10 }}>
                  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-end', }}>
                    <TouchableOpacity
                      // onPress={() => handleNavigate(item)}
                      style={{ justifyContent: 'flex-end', alignItems: 'center', backgroundColor: 'green', width: 90, paddingVertical: 5, paddingHorizontal: 5, borderRadius: 10 }}>
                      <Text>View Details</Text>
                      <Text>View Details</Text>
                      <Text>View Details</Text>
                      <Text>View Details</Text>
                      <Text>View Details</Text>
                      <Text>View Details</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              )
            }}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      )
      
}

export default Restaurant

const styles = StyleSheet.create({

})