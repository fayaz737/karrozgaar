import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SearchBar from './SearchBar'


const KarRozgaar = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headertext}>Ḱar Rozgaar</Text>
      <SearchBar/>
    </View>
  )
}

export default KarRozgaar

const styles = StyleSheet.create({
    header:{
        backgroundColor:'#3498DB',
        height:200,
        width:"100%",
        borderBottomLeftRadius:50,
        borderBottomRightRadius:50,
        alignItems:'center',
       
    },
    headertext:{
        color:'white',
       
        fontSize:30,
        marginTop:70,
        
        
    }
})