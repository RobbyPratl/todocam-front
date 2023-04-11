import AsyncStorage from "@react-native-async-storage/async-storage";
import { Image, View, StyleSheet, Text } from "react-native";
import { useState, useEffect } from "react";
var styles = StyleSheet.create({
  image: {
    width: 300,
    height: 300,
    padding: 10,
  },
});
const CompletedImage = (props) => {
  const [auth, setAuth] = useState("null");
  useEffect(() => {
    AsyncStorage.getItem("X-Auth-Token")
      .then((u) => {
        setAuth(u);
        console.log(typeof auth);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <View>
      <Image
        style={styles.image}
        source={{
          uri: "https://taskcam-backend.onrender.com/image",
          method: "GET",
          headers: {
            "X-Auth-Token": auth,
            filename: "eea8e21d41fdb49889dbe11b00b4bddd",
          },
        }}
      />
      <Text>Testing</Text>
    </View>
  );
};

export default CompletedImage;
