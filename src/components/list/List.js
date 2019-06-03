import React from "react";
import { View } from "react-native";

import utils from "./List.utils";

const List = ({ list }) => {
  console.log(list);
  return <View>{utils.renderItem(list)}</View>;
};

export default List;
