import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import React from 'react'

const GoToWork = () => {
  return (
      <View style={styles.container}>

    <TouchableOpacity style={styles.gobutton}>
      <Text style={{fontSize:20, color:'white', fontWeight:'bold'}}>Go To Work</Text>
    </TouchableOpacity>
    </View>
  )
}

export default GoToWork

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center',
        
      },
    gobutton: {
        backgroundColor: "#03b90a",
        alignSelf: "center",
        width: 150,
        padding: 20,
        borderRadius: 30,
        
      },
})