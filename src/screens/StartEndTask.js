import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'

const StartEndTask = () => {
  return (
      <>
      <Text style={{alignSelf:'center', fontSize:30, marginTop:120, fontWeight:'bold'}}>Timer:</Text>
    <View style={styles.container}>
       
      <TouchableOpacity style={styles.start}>
        <Text style={{fontSize:20, color:'white'}}>Start Task</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.end}>
        <Text style={{fontSize:20, color:'white'}}>End Task</Text>
      </TouchableOpacity>
      
    </View>

    </>
  )
}

export default StartEndTask

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-around",
        marginBottom:30
      
        
        
      },
      start: {
        backgroundColor: "#03b90a",
        alignSelf: "center",
        width: Platform.OS === 'ios' ? 130 : 140,
        padding: 20,
        borderRadius: 30,
        
      },
      end: {
        backgroundColor: "#c80000",
        alignSelf: "center",
        width: 130,
        padding: 20,
        borderRadius: 30,
      },
})