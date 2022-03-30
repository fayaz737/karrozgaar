import { StyleSheet, Text, View,TouchableOpacity ,TextInput } from 'react-native'
import React from 'react'


const RegisterationOption = ({navigation}) => {
  return (
      <>
    <View style={styles.container}>
        <View style={styles.client}>
            <TextInput style={{fontSize:25,color:'white'}}>
                 join as a client
            </TextInput>
            <TouchableOpacity style={styles.start} onPress={()=> navigation.navigate('registrationscreen')}>
        <Text style={{fontSize:20, color:'white'}}>Sign up</Text>
      </TouchableOpacity>

        </View>
         
         <Text style={{marginTop:40, fontSize:15, fontWeight:'bold'}}>OR</Text>
       
        <View style={styles.worker}>
            <TextInput style={{fontSize:25,color:'white'}}>
                 join as a worker
            </TextInput>
            <TouchableOpacity style={styles.start} onPress={()=> navigation.navigate("workerregistrationscreen")}>
        <Text style={{fontSize:20, color:'white'}}>Sign up</Text>
      </TouchableOpacity>

        </View>
      
    </View>

    </>
  )
}

export default RegisterationOption

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center',
        alignItems:'center'
      
        
        
      },
      start: {
        backgroundColor: "black",
        alignSelf: "center",
        width: Platform.OS === 'ios' ? 130 : 90,
        padding: Platform.OS === 'ios' ? 20 : 10,
        borderRadius: 20,
         marginTop:10
        
      },
      end: {
        backgroundColor: "#c80000",
        alignSelf: "center",
        width: 130,
        padding: 20,
        borderRadius: 30,
      },
      client:{
          justifyContent:'center',
          alignItems:'center',
          borderRadius:20,
          width:200,
          height:120,
          backgroundColor:'#3498DB'
      },
      worker:{
         marginVertical:50,
         borderRadius:20,
          width:200,
          height:120,
          backgroundColor:'#3498DB',
          padding:10
         
      }
})