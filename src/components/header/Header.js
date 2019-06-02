import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";

import Add from "../add/Add";
import Profile from "../profile/Profile";

import { styles } from "./Header.style";

const Header = ({ page, setPage }) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => setPage(Profile)}>
        <Image
          style={styles.avatar}
          source={require("../../../assets/defaultAvatar.png")}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setPage(Add)}>
        <Text style={styles.add}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Header;
