import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    ScrollView,
    TouchableWithoutFeedback,
    Keyboard,
    KeyboardAvoidingView
  } from "react-native";
  import React,{ useState } from "react";
  
  
  
  const WorkerRegistrationScreen = ({ navigation }) => {
    const [Email, SetEmail] = useState("");
    const [Password, SetPassword] = useState("");
  
    
  
  
    // const __doCreateUser = async (email, password) => {
    //   if (value.email === '' || value.password === '') {
    //     setValue({
    //       ...value,
    //       error: 'Email and password are mandatory.'
    //     })
    //     return;
    //   }
    //   try {
    //     await createUserWithEmailAndPassword(auth,
    //       value.email, value.password
    //     );
    //     if (response && response.user) {
    //       Alert.alert("Success ✅", "Account created successfully");
    //     } else {
    //       Alert.alert("try again later");
    //     }
    //   } catch (e) {
    //     console.error(e.message);
    //   }
    // };
  
    return (
      <>
        <ScrollView>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{ flex: 1 }}
          >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
              <View style={styles.registercontainer}>
                <Text style={styles.registertext}> Worker Registration</Text>
                <View style={styles.inputfields}>
                  <TextInput style={styles.input} placeholder="Name" />
                  <TextInput
                    style={styles.input}
                    placeholder="Email Address"
                    value={Email}
                    onChangeText={(newemail) => SetEmail(newemail)}
                  />
                  <TextInput style={styles.input} placeholder="cnic" />
                  <TextInput
                    style={styles.input}
                    placeholder="password"
                    value={Password}
                    onChangeText={(newpass) => SetPassword(newpass)}
                  />
                </View>
  
                <TouchableOpacity
                  style={styles.registerbutton}
                  onPress={() => navigation.navigate("loginscreen")}
                  
                >
                  <Text
                    style={{ fontSize: 20, alignSelf: "center", color: "white" }}
                  >
                    Signup
                  </Text>
                </TouchableOpacity>
              </View>
            </TouchableWithoutFeedback>
          </KeyboardAvoidingView>
        </ScrollView>
      </>
    );
  };
  
  export default WorkerRegistrationScreen;
  
  const styles = StyleSheet.create({
    registercontainer: {
      flex: 1,
      backgroundColor: "white",
      height: Platform.OS === "ios" ? 840 : 660,
      
    },
    registertext: {
      alignSelf: "center",
      color: "#3498DB",
      fontSize: 30,
      marginTop: 60,
      fontWeight: "bold",
      marginVertical: 10,
    },
    inputfields: {
      marginTop: 40,
      width: Platform.OS === "ios" ? 350 : 300,
      marginLeft: 30,
      marginVertical: Platform.OS === "ios" ? 45 : 25,
      
    },
    input: {
      height: Platform.OS === "ios" ? 40 : 60,
      margin: 12,
      borderBottomWidth: 1,
      padding: 10,
      fontSize: 25,
    },
    registerbutton: {
      marginTop: 20,
      backgroundColor: "#3498DB",
      alignSelf: "center",
      width: 150,
      padding: 13,
      borderRadius: 30,
   
      
    },
  });
  