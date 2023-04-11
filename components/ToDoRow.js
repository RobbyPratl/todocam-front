import { Badge } from "@react-native-material/core";
import {
  View,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import Modal from "react-native-modal";
import ExpoCamera from "./CameraButton";
import Circle from "./Circle";
import CompletedTask from "./CompletedTask";
function ToDoRow(props) {
  //console.log("Created a row");
  const createBadge = (state) => {
    if (state == false) {
      return "green";
    } else {
      return "red";
    }
  };
  const [modalVisible, setModalVisible] = useState(false);
  const devTest = () => {
    console.log(props._id);
  };
  if (!props.visible) {
    return (
      <View
        style={[
          {
            // Try setting `flexDirection` to `"row"`.
            flexDirection: "row",
          },
        ]}
      >
        {/*<Badge
          style={{ marginRight: 10, marginTop: 15, backgroundColor: "green" }}
      />*/}
        <Circle></Circle>
        <Text
          onPress={() => {
            setModalVisible(!modalVisible);
          }}
          style={{ marginTop: 15 }}
        >
          {props.message}
        </Text>
        <Modal
          isVisible={modalVisible}
          customBackdrop={
            <TouchableWithoutFeedback
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <View style={{ flex: 1, backgroundColor: "black" }} />
            </TouchableWithoutFeedback>
          }
        >
          <ExpoCamera token={props.token} _id={props._id} />
        </Modal>
      </View>
    );
  } else {
    return (
      <View
        style={[
          {
            // Try setting `flexDirection` to `"row"`.
            flexDirection: "row",
          },
        ]}
      >
        <Text>{"Balls"}</Text>
      </View>
    );
  }
}
export default ToDoRow;
