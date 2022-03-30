import { StyleSheet, Text, View, TouchableOpacity,Image } from "react-native";
import React from "react";

const ClientAcceptance = () => {
  return (
      <>
    
    <Image  
    style={styles.img}
    source={require('../../assets/3.png')}
    />
    <Text style={{alignSelf:'center', fontSize:30, marginTop:60}}>John is requesting for a job</Text>
    <View style={styles.container}>
       
      <TouchableOpacity style={styles.assign}>
        <Text style={{fontSize:20, color:'white'}}>Assign work</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.cancel}>
        <Text style={{fontSize:20, color:'white'}}>cancel</Text>
      </TouchableOpacity>
    </View>
    </>
  );
};

export default ClientAcceptance;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    marginRight:10,
    marginBottom:40
    
  },
  assign: {
    backgroundColor: "#03b90a",
    alignSelf: "center",
    width: 150,
    padding: 20,
    borderRadius: 30,
    
  },
  cancel: {
    backgroundColor: "#c80000",
    alignSelf: "center",
    width: 100,
    padding: 20,
    borderRadius: 30,
  },
img:{
    alignSelf:'center',
    borderWidth:2,
    borderRadius:100,
    height:100,
    width:100,
    marginTop:100
}
});
