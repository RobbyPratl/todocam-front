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

function ToDoRow(props) {
  //console.log("Created a row");

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
            float: "left",
          },
        ]}
      >
        <Badge style={{ marginRight: 10, marginTop: 15 }} />
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
          <ExpoCamera token={props.token} />
        </Modal>
      </View>
    );
  }
}
export default ToDoRow;
