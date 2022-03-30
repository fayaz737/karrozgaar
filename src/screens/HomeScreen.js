import { StyleSheet, Text, View ,TouchableOpacity,Image} from 'react-native'
import React from 'react'
import KarRozgaar from '../components/KarRozgaar'


const HomeScreen = ({navigation}) => {
    const isCarousel = React.useRef(null)
  return (
    <View>
      <KarRozgaar/>
       <Image
        style={{height:350,width:350,alignSelf:'center',marginTop:15,borderTopLeftRadius:50,borderTopRightRadius:50,borderBottomLeftRadius:50,borderBottomRightRadius:50}}
        source={require('../../assets/2.jpg')}
      />
       
       <View style={{flexDirection:'row', justifyContent:'space-between' , marginHorizontal:10}}>
       <TouchableOpacity style={styles.createjob} onPress={()=> navigation.navigate('jobform')}>
        <Text style={{ fontSize: 20, alignSelf: "center", color: "white" }}>
          Create job
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.createjob} onPress={()=> navigation.navigate('availableworkers')}>
        <Text style={{ fontSize: 20, alignSelf: "center", color: "white" }}>
          workers feed
        </Text>
      </TouchableOpacity>
       </View>
      
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    createjob: {
        marginTop: 20,
        backgroundColor: "#2E86C1",
        alignSelf: "center",
        width: 150,
        padding: 13,
        borderRadius: 30,

      },
})