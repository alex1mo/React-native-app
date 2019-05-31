import { StyleSheet, Dimensions } from "react-native";

const { height, width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00b3be",
    alignItems: "center",
    justifyContent: "center"
  },

  input: {
    height: height * 0.05,
    width: width * 0.5,
    backgroundColor: "white",
    margin: 5,
    textAlign: "center"
  },

  text: {
    color: "white",
    margin: 10
  }
});
