import { StyleSheet, Text, View ,Button} from 'react-native'
import React from 'react'


const Home = ({navigation}) => {
  return (
    <View>
      <Text>Home </Text>
      <Button title="go to login screen" onPress={()=> navigation.navigate('loginscreen')}/>
      {/* <Button title="go to home screen" onPress={()=> navigation.navigate('homescreen')}/> */}
      <Button title="go to client acceptance screen" onPress={()=> navigation.navigate('clientacceptance')}/>
      {/* <Button title="go to worker screen" onPress={()=> navigation.navigate('gotowork')}/> */}
      <Button title="go to start work screen" onPress={()=> navigation.navigate('startendtask')}/>
      <Button title="go to jobs feed" onPress={()=> navigation.navigate('jobfeedscreen')}/>

    </View>
  )
}

export default Home

const styles = StyleSheet.create({})