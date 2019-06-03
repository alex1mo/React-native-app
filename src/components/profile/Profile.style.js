import { StyleSheet } from "react-native";
import { rootStyles } from "../../../App.style";
import { styles as AddStyle } from "../add/Add.style";

let { width, height, rem } = rootStyles;

const flexCenter = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
};

export const styles = StyleSheet.create({
  container: {
    width: width,
    height: height - height * 0.1,
    borderColor: "white",
    ...flexCenter,
    justifyContent: "flex-start"
  },

  avatar: {
    width: width,
    height: width * 0.5
  },

  data: {
    width: width * 0.8,
    marginTop: rem * 3,
    display: "flex",
    flexDirection: "row"
  },

  text: {
    marginVertical: rem * 0.3
  },

  textInput: {
    borderBottomWidth: 1,
    width: width * 0.5
  },

  wrapButtom: {
    ...flexCenter,
    flexDirection: "row"
  },

  edit: {
    margin: rem,
    ...AddStyle.button
  },

  editText: {
    color: "#fff",
    fontSize: rem
  }
});
