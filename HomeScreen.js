import { View, Text, ScrollView } from "react-native";
import { useState, useEffect } from "react";
import ToDoRow from "./components/ToDoRow.js";
import Modal from "react-native-modal";

import {
  IconButton,
  Stack,
  TextInput,
  Button,
  Box,
  Badge,
  FAB,
} from "@react-native-material/core";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import FormatDate from "./FormatDate.js";

function HomeScreen({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [user, setUser] = useState("");
  const [token, setToken] = useState("");
  const [userPosts, setUserPosts] = useState([]);
  const [taskText, setTaskText] = useState("");
  useEffect(() => {
    AsyncStorage.getItem("user")
      .then((u) => {
        setUser(u);
      })
      .catch((err) => {
        console.log(err);
      })
      .then(
        AsyncStorage.getItem("X-Auth-Token")
          .then((u) => {
            setToken(u);
          })
          .catch((err) => {
            console.log(err);
          })
      )
      .then(fetchUserTasks());
  }, []);
  const fetchUserTasks = () => {
    fetch("https://taskcam-backend.onrender.com/get_user_todos", {
      method: "GET",
      headers: {
        username: user,
        "X-Auth-Token": token,
      },
    })
      .then((r) => r.json())
      .then((r) => {
        console.log("Response from useEffect", r);
        setUserPosts(r);
      });
  };
  const createNewPost = async () => {
    // username, message, auth token
    //console.log("Clicked button to add post");
    fetch("https://taskcam-backend.onrender.com/new_task", {
      method: "POST",
      headers: {
        username: user,
        "X-Auth-Token": token,
        message: taskText,
      },
    })
      .then((r) => {
        //console.log("Tried to make a post");
        //console.log(JSON.stringify(r));
        fetchUserTasks();
      })
      .catch((err) => {
        "ERROR!!!!: ", err;
      });
  };
  // Since users can have duplicate Tasks question that remains is how to possibly identify each...
  // the current solution is to pass the _id into each ToDoRow thru props

  // Also this link may be helpful for styling purposes https://reactnavigation.org/docs/preventing-going-back/

  // The Add New button is simply for testing and designing purposes.
  return (
    // This view encompasses all of the screen currently
    <View
      style={{
        flex: 0,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text
        style={{
          width: 213,
          height: 19,
          lineHeight: 24 + "px",
          color: "#068163",
          textAlign: "center",
          marginTop: 5,
          marginBottom: 7,
          overflow: "visible",
        }}
      >
        {FormatDate()}
      </Text>
      <ScrollView>
        <Modal isVisible={modalVisible}>
          <View style={{ flex: 0 }}>
            <TextInput
              placeholder="Enter Task"
              onChangeText={(e) => {
                setTaskText(e);
              }}
            ></TextInput>
            <Button
              title="Add Post"
              onPress={() =>
                createNewPost().then(setModalVisible(!modalVisible))
              }
            ></Button>
            <Button
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
              title="Exit"
            ></Button>
          </View>
        </Modal>
        <IconButton
          icon={(props) => <Icon name="refresh" />}
          color="white"
          onPress={fetchUserTasks}
          //loadingIndiator="⏳"
        />

        <Button
          onPress={() => {
            setModalVisible(!modalVisible);
          }}
          title="New"
        ></Button>

        <View style={{ alignItems: "flex-start" }}>
          {userPosts.map((message, index) => (
            <ToDoRow
              token={token}
              key={index}
              visible={message.visible}
              _id={message._id}
              filename={message.image_data}
              message={message.message}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
export default HomeScreen;
