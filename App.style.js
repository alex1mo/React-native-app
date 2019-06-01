import { Dimensions } from "react-native";

const { height, width } = Dimensions.get("window");

export const rootStyles = {
  width,
  height,
  rem: 18 //root font size
};
