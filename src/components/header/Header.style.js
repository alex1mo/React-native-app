import { StyleSheet } from "react-native";
import { rootStyles } from "../../../App.style";

let { width, height, rem } = rootStyles;

export const styles = StyleSheet.create({
  header: {
    paddingLeft: width * 0.05,
    paddingRight: width * 0.05,
    marginTop: 24,
    width,
    height: height * 0.1,
    backgroundColor: "#00b3be",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },

  avatar: {
    width: rem * 3,
    height: rem * 3
  },

  add: {
    fontSize: rem * 2,
    color: "white"
  },

  add2: {
    fontSize: rem,
    color: "white"
  }
});
