// In App.js in a new project

import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./Login";
import HomeScreen from "./HomeScreen";
import AsyncStorage from "@react-native-async-storage/async-storage";
import CompletedImage from "./components/CompletedImage_TEST";
import CompletedTask from "./components/CompletedTask";
const stackNav = createNativeStackNavigator();

function App({ navigation }) {
  return (
    <NavigationContainer>
      <stackNav.Navigator>
        {/*Login*/}
        <stackNav.Screen name="Home" component={CompletedImage} />
        <stackNav.Screen name="HomeScreen" component={HomeScreen} />
      </stackNav.Navigator>
    </NavigationContainer>
  );
}

export default App;
