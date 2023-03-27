import { Stack, TextInput, Button, Box } from "@react-native-material/core";
import { View, Text } from "react-native";
import { useState, useEffect } from "react";
import { validatePathConfig } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
function Login({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const validateLogin = async (username, password) => {
    console.log("Made req");
    fetch("https://taskcam-backend.onrender.com/sign_in", {
      method: "POST",
      headers: {
        username: username,
        password: password,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: "robby", password: "Pokemon1234$" }),
    })
      .then((r) => r.json())
      .then((r) => {
        if (r.token) {
          console.log("Response ", r.token);
          AsyncStorage.setItem("X-Auth-Token", r.token)
            .then(() => AsyncStorage.setItem("user", username))
            .then(() => {
              console.log("set async storage");
            })
            .then(navigation.navigate("HomeScreen"));
        }
      })
      .catch((e) => {
        console.log("Error: ", e);
      });
  };
  return (
    <View>
      <Stack spacing={4}>
        <Text>{message}</Text>
        <TextInput
          onChangeText={(e) => {
            setUsername(e);
          }}
          variant="standard"
          helperText="username"
        ></TextInput>
        <TextInput
          secureTextEntry={true}
          onChangeText={(e) => {
            setPassword(e);
          }}
          variant="standard"
          helperText="password"
        ></TextInput>
        <Box w={64} h={32} m={4} center>
          <Button
            title="Logi"
            onPress={() => validateLogin(username, password)}
          ></Button>
        </Box>
      </Stack>
    </View>
  );
}
export default Login;
