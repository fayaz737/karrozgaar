import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  Platform,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React, { useState } from "react";
import { ScrollView } from "react-native";



const LoginScreen = ({ navigation }) => {
  const [Email, SetEmail] = useState("");
  const [Password, SetPassword] = useState("");

  // const UserInfo = {
  //   name: "",
  //   email: "",
  // };

  // const ValidationSchema = Yup.object({
  //   email: Yup.string().email("Invalid email").required("email is required"),
  //   Password: Yup.string()
  //     .trim()
  //     .min(8, "password is too short")
  //     .required("password is required"),
  // });

  // const __doSingIn = async (email, password) => {
  //   try {
  //     let response = await auth().signInWithEmailAndPassword(email, password);
  //     if (response && response.user) {
  //       Alert.alert("Success ✅", "signed in successfully");
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
            <View style={styles.loginContainer}>
              <Image
                style={styles.logo}
                source={require("../../assets/loginimage.png")}
              />
              <Text style={styles.logintext}>Login</Text>

              <TouchableOpacity style={styles.loginbuttons}>
                <Text
                  style={{ fontSize: 20, color: "#3498DB", fontWeight: "bold" }}
                >
                  Login
                </Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate("registerationoption")}
                >
                  <Text
                    style={{ fontSize: 20, color: "gray", fontWeight: "bold" }}
                  >
                    Sign up
                  </Text>
                </TouchableOpacity>
              </TouchableOpacity>
              <View style={styles.inputfields}>
                <TextInput
                  style={styles.input}
                  placeholder="Email Address"
                  //onChangeText={(newemail) => SetEmail(newemail)}
                  //value={Email}
                  keyboardType="email-address"
                />

                <TextInput
                  style={styles.input}
                  placeholder="Password"
                  //onChangeText={(newpassword) => SetPassword(newpassword)}
                 
                  //value={Password}
                  secureTextEntry={true}
                />
                <TouchableOpacity
                  style={styles.loginbutton}
                  onPress={() => navigation.navigate("homescreen")}
                  // onsubmit={__doSingIn}
                >
                  <Text
                    style={{
                      fontSize: 20,
                      alignSelf: "center",
                      color: "white",
                    }}
                  >
                    Login
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </ScrollView>
    </>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    backgroundColor: "white",
    height: Platform.OS === "ios" ? 850 : 800,
  },
  logo: {
    marginTop: 25,
    width: 300,
    height: 200,
    alignSelf: "center",
  },
  logintext: {
    fontSize: 35,
    justifyContent: "center",
    marginTop: 30,
    alignSelf: "center",
    color: "#3498DB",
    //marginVertical: 10,
  },
  loginbuttons: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",

    marginTop: Platform.OS === "ios" ? 50 : 40,
    marginVertical: Platform.OS === "ios" ? 60 : null
  },
  inputfields: {
    marginTop: 10,
    width: Platform.OS === "ios" ? 350 : 300,
    marginLeft: 30,
    marginVertical: Platform.OS === "ios" ? 120 : 25,
  },
  input: {
    height: 40,
    margin: 15,
    borderBottomWidth: 1,
    padding: 5,
    fontSize: 22,
    color: "#3498DB",
  },
  loginbutton: {
    marginTop: 20,
    backgroundColor: "#3498DB",
    alignSelf: "center",
    width: Platform.OS === "ios" ? 150 : 120,
    padding: Platform.OS === "ios" ? 13 : 8,
    borderRadius: 30,
  
    
  },
});
