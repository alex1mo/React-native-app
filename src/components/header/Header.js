import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";

import { styles } from "./Header.style";

const Header = () => {
  return (
    <View style={styles.header}>
      <TouchableOpacity>
        <Image
          style={styles.avatar}
          source={require("../../../assets/defaultAvatar.png")}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.add}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Header;
