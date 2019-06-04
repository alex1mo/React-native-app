import { StyleSheet } from "react-native";
import { rootStyles } from "../../../App.style";

let { width, height, rem } = rootStyles;

const flexCenter = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
};

export const styles = StyleSheet.create({
  container: {
    ...flexCenter,
    width,
    backgroundColor: "#47aef0",
    height: height * 0.1
  },

  title: {
    color: "white",
    fontSize: rem
  },

  text: {
    fontSize: rem * 0.7,
    padding: rem
  }
});
