import { StyleSheet } from "react-native";
import { rootStyles } from "../../../App.style";

let { width, height, rem } = rootStyles;

const flexCenter = {
  display: "flex",
  alignItems: "center"
};

export const styles = StyleSheet.create({
  container: {
    width: width,
    height: height - height * 0.1,
    borderColor: "white",
    ...flexCenter
  },

  avatar: {
    width: width,
    height: width * 0.5
  },

  data: {
    width: width * 0.8,
    paddingTop: 50,
    display: "flex",
    flexDirection: "row"
  },

  text: {
    marginVertical: 5
  }
});
