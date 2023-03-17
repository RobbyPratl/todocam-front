// In App.js in a new project

import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./Login";
import HomeScreen from "./HomeScreen";
import AsyncStorage from "@react-native-async-storage/async-storage";

const stackNav = createNativeStackNavigator();

function App({ navigation }) {
  return (
    <NavigationContainer>
      <stackNav.Navigator>
        <stackNav.Screen name="Home" component={Login} />
        <stackNav.Screen name="HomeScreen" component={HomeScreen} />
      </stackNav.Navigator>
    </NavigationContainer>
  );
}

export default App;
