import { View, Text } from "react-native";
import { useState, useEffect } from "react";
import { Stack, TextInput, Button, Box } from "@react-native-material/core";
import AsyncStorage from "@react-native-async-storage/async-storage";

function HomeScreen({ navigation }) {
  const user = AsyncStorage.getItem("user");
  const auth = AsyncStorage.getItem("@X-Auth-Token");
  console.log("Auth:", auth);

  useEffect(() => {
    fetch("https://taskcam-backend.onrender.com/get_user_todos", {
      method: "GET",
      headers: {
        username: user,
        "X-Auth-Token": auth,
      },
    })
      .then((r) => r.json())
      .then((r) => {
        //console.log("Response from useEffect", r);
      });
  }, []);
  const createNewPost = async () => {
    // username, message, auth token
    //console.log("Clicked button to add post");
    fetch("https://taskcam-backend.onrender.com/new_task", {
      method: "POST",
      headers: {
        username: user,
        "X-Auth-Token": auth,
        message: "created a post!",
      },
    })
      .then((r) => {
        //console.log("Tried to make a post");
        //console.log(JSON.stringify(r));
      })
      .catch((err) => {
        "ERROR!!!!: ", err;
      });
  };
  return (
    <View style={{ flex: 0, alignItems: "center", justifyContent: "center" }}>
      <Text>To Do</Text>
      <Button onPress={createNewPost} title="Add New"></Button>
    </View>
  );
}
export default HomeScreen;
