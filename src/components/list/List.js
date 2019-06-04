import React from "react";
import { View, Text } from "react-native";

import utils from "./List.utils";
import { styles } from "./List.style";

const List = ({ list }) => {
  let status = list.length > 0;
  return <View>{status && utils.renderItem(list)}</View>;
};

export default List;
