import { StyleSheet, Text, View,TextInput } from 'react-native'
import React from 'react'
import { Feather } from 'react-native-vector-icons';


const SearchBar = () => {
  return (
    <View style={styles.searchbar}>
        <Feather style={styles.searchicon} name="search" />
      <TextInput style={styles.searchinput} placeholder="search" />
    </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({
    searchbar:{
        backgroundColor:'#dee1e9',
        height:45,
        width:300,
        borderRadius:20,marginTop:20,
        flexDirection:'row',
        alignSelf:'center',
        padding:5,
        marginTop:30
    },
    searchicon:{
        fontSize:30,
        color:'black',
        alignSelf:'center',
        marginHorizontal:15
    },
    searchinput:{
        fontSize:20,
        flex:1

    },
    
})