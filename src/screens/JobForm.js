import { StyleSheet, Text, View,TextInput ,TouchableOpacity,
ScrollView,TouchableWithoutFeedback,Keyboard,KeyboardAvoidingView} from 'react-native'
import React from 'react'

const JobForm = ({navigation}) => {
  return (
    <>
    <ScrollView>
    <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={{ flex: 1 }}
            >
               <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={styles.container}>
        <Text style={styles.jobtext}>Job Form</Text>
      
      <View style={styles.inputfields}>
        <TextInput style={styles.input} placeholder="Job Name" />
        <TextInput style={styles.input} placeholder="Type" />
        <TextInput style={styles.input} placeholder="Description" />
        <TextInput style={styles.input} placeholder="Location" />
        <TextInput style={styles.input} placeholder="Price" />

      </View>
      <TouchableOpacity style={styles.submit} onPress={()=> navigation.navigate('availableworkers')}>
        <Text style={{ fontSize: 20, alignSelf: "center", color: "white" }}>
          Submit
        </Text>
      </TouchableOpacity>
    </View>
    </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
    </ScrollView>
    </>
  )
}

export default JobForm

const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
      jobtext: {
        alignSelf: "center",
        color:'#3498DB',
        fontSize: 35,
        marginTop: 60,
        fontWeight: "bold",
       
      },
      inputfields: {
        marginTop: 40,
        width: Platform.OS === 'ios' ? 350 : 280,
        marginLeft: 40,
        marginVertical: 30,
      },
      input: {
        height: 45,
        margin: 15,
        borderBottomWidth: 1,
        padding: 10,
        fontSize: 22,
       

        
      },
      submit: {
        marginTop: 20,
        backgroundColor: "#3498DB",
        alignSelf: "center",
        width: 120,
        padding: 15,
        borderRadius: 30,
      },
    });