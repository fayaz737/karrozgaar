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
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import auth, { firebase } from '@react-native-firebase/auth';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


const ClientRegistrationScreen = ({ navigation }) => {
  const firebaseConfig = {
    apiKey: "AIzaSyAhf5Sxx7K7AGqhVlCQrtfZB4GGkdVP3ys",
    authDomain: "karrozgaar.firebaseapp.com",
    projectId: "karrozgaar",
    storageBucket: "karrozgaar.appspot.com",
    messagingSenderId: "136419108845",
    appId: "1:136419108845:web:f8bd352715eaac7757e9e4",
    measurementId: "G-ZYD403NDYT"
  };
  

  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const analytics = getAnalytics(app);
  // const [email,SetEmail]= useState('');
  // const [pass,SetPassword] = useState('')

  // auth()
  // .createUserWithEmailAndPassword('jane.doe@example.com', 'SuperSecretPassword!')
  // .then(() => {
  //   console.log('User account created & signed in!');
  // })
  // .catch(error => {
  //   if (error.code === 'auth/email-already-in-use') {
  //     console.log('That email address is already in use!');
  //   }

  //   if (error.code === 'auth/invalid-email') {
  //     console.log('That email address is invalid!');
  //   }

  //   console.error(error);
  // });

  const creteAccount = async () => {
    const auth = getAuth();
    // here you will proide input email and password
createUserWithEmailAndPassword(auth, "email@gmail.com", "password")
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(userCredential);
    // ...
  })
  .catch((error) => {
    console.log(error);
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
  }
  

  return (
    <>
      <ScrollView>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{ flex: 1 }}
        >
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.registercontainer}>
              <Text style={styles.registertext}> Client Registration</Text>
              <View style={styles.inputfields}>
                <TextInput style={styles.input} placeholder="Name" />
                <TextInput
                  style={styles.input}
                  placeholder="Email Address"
                  // value={email}
                  // onChangeText={(newemail) => SetEmail(newemail)}
                />
                <TextInput style={styles.input} placeholder="cnic" />
                <TextInput
                  style={styles.input}
                  placeholder="password"
                  // value={pass}
                  // onChangeText={(newpass) => SetPassword(newpass)}
                />
              </View>

              <TouchableOpacity
                style={styles.registerbutton}
                onPress={()=> creteAccount()}
          
                
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

export default ClientRegistrationScreen;

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
