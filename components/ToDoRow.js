import { Badge } from "@react-native-material/core";
import { View, Text } from "react-native";
import { useState } from "react";
import Modal from "react-native-modal";

function ToDoRow(props) {
  //console.log("Created a row");
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
            devTest();
          }}
          style={{ marginTop: 15 }}
        >
          {props.message}
        </Text>
      </View>
    );
  }
}
export default ToDoRow;
