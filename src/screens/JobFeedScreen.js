import { StyleSheet, Text, TouchableOpacity, View ,FlatList} from "react-native";
import React from "react";


const JobFeedScreen = () => {
  const jobs = [
    {
      key: 1,
      job: "Carpenter",
      desc: "carpenter needed for a small task",
      price: "Rs 2000",
    },
    { key: 2, job: "Plumber", desc: "Plumber required", price: "Rs 1000" },
    {
      key: 3,
      job: "Electrician",
      desc: "i need electrician",
      price: "Rs 3000",
    },
    {
      key: 4,
      job: "car wash",
      desc: " person required to wash car for me",
      price: "Rs 800",
    },
    {
      key: 5,
      job: "Goods ordering",
      desc: "somone bring food from market",
      price: "Rs 200",
    },
    {
      key: 6,
      job: "Gardeneing",
      desc: "Need gardner to care garden",
      price: "Rs 1500",
    },
  ];
  return (
    <View style={styles.container}>
      <Text
        style={{
          marginVertical: 10,
          alignSelf: "center",
          color: "#3498DB",
          marginTop: 20,
          fontSize: 30,
          marginBottom:30
        }}
      >
        Jobs Feed
      </Text>

      <FlatList
        data={jobs}
        renderItem={({ item }) => {
          return (
            <>
            <View style={styles.list}>
              <Text style={{ fontSize: 20, color: "white" }}>
                Job type :{item.job}
              </Text>
              <Text style={{ fontSize: 20, color: "white" }}>
                description :{item.desc}
              </Text>
              <Text style={{ fontSize: 20, color: "white" }}>
                price:{item.price}
              </Text>
          
            </View>
            <TouchableOpacity style={styles.apply}>
                <Text
                  style={{
                    color: "black",
                    fontSize: 20,
                    fontWeight: "bold",
                    
                  }}
                >
                  Apply
                </Text>
              </TouchableOpacity>
            </>
            
          );
        }}
      />
    </View>
  );
};

export default JobFeedScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  list: {
    backgroundColor: "#3498DB",
    borderRadius: 20,
    marginHorizontal: 20,
    height: 130,
    padding: 20,
  },
  apply: {
    height: 70,
    width: 80,
    alignSelf: "flex-end",
    padding: 5,
    borderRadius: 30,
  },
  
});
