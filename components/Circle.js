import { StyleSheet, View } from "react-native";

const Circle = () => {
  return <View style={styles.circle} />;
};

const styles = StyleSheet.create({
  circle: {
    width: 30,
    height: 30,
    borderRadius: 100 / 2,
    backgroundColor: "red",
  },
});

export default Circle;
