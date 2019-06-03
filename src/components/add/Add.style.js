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
    width: width * 0.8
  },

  text: {
    marginTop: rem,
    marginBottom: rem * 0.5
  },

  buttonWrap: {
    marginTop: rem,
    ...flexCenter
  },

  button: {
    backgroundColor: "#47aef0",
    width: width * 0.3,
    height: height * 0.05,
    borderRadius: 5,
    ...flexCenter
  },

  input: {
    padding: 5,
    fontSize: rem
  },

  buttonText: {
    color: "#fff",
    fontSize: rem
  },

  border: {
    borderWidth: 2,
    borderColor: "#00b3be",
    borderRadius: 5
  }
});
