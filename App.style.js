import { Dimensions } from "react-native";

const { height, width } = Dimensions.get("window");

export const rootStyles = {
  width,
  height: height - 24,
  rem: 18 //root font size
};
