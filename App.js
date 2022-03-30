import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import LoginScreen from './src/screens/LoginScreen';
import Home from './src/screens/Home';
import ClientRegistrationScreen from './src/screens/ClientRegistrationScreen';
import HomeScreen from './src/screens/HomeScreen';
import JobForm from './src/screens/JobForm';
import JobFeedScreen from './src/screens/JobFeedScreen';
import ClientAcceptance from './src/screens/ClientAcceptance';
import GoToWork from './src/screens/GoToWork';
import StartEndTask from './src/screens/StartEndTask';
import RegisterationOption from './src/screens/RegisterationOption';
import WorkerRegistrationScreen from './src/screens/WorkerRegistrationScreen';
import React from 'react'
const Stack = createNativeStackNavigator();

function App() {
  
  
  return (
     <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="loginscreen" component={LoginScreen} />
        <Stack.Screen
          name="registrationscreen"
          component={ClientRegistrationScreen}
        />
        <Stack.Screen
          name="workerregistrationscreen"
          component={WorkerRegistrationScreen}
        />
        <Stack.Screen name="homescreen" component={HomeScreen} />
        <Stack.Screen name="jobform" component={JobForm} />
        <Stack.Screen name="jobfeedscreen" component={JobFeedScreen} />
        <Stack.Screen name="clientacceptance" component={ClientAcceptance} />
        <Stack.Screen name="gotowork" component={GoToWork} />
        <Stack.Screen name="startendtask" component={StartEndTask} />
        <Stack.Screen
          name="registerationoption"
          component={RegisterationOption}
        />
      </Stack.Navigator>
     </NavigationContainer>
  );
}

export default App;
