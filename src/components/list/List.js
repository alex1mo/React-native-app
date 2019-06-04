import React from "react";
import { View, Text } from "react-native";

import utils from "./List.utils";
import { styles } from "./List.style";

const List = ({ list }) => {
  let status = list.length > 0;
  return (
    <View style={!status && styles.loading}>
      {(status && utils.renderItem(list)) || <Text>Loading...</Text>}
    </View>
  );
};

export default List;
