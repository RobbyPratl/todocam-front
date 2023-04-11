import { useLinkProps } from "@react-navigation/native";
import { useState } from "react";
import { Image, View, StyleSheet } from "react-native";
import im from "./tiny_logo.png";

var styles = StyleSheet.create({
  image: {
    width: 107,
    height: 165,
    padding: 10,
  },
});

const CompletedTask = (props) => {
  return (
    <Image
      style={styles.image}
      source={{
        uri: "https://taskcam-backend.onrender.com/image",
        method: "GET",
        headers: {
          "X-Auth-Token": props.token,
          filename: props.filename,
        },
      }}
    />
  );
};

export default CompletedTask;
