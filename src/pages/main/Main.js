import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";

import Header from "../../components/header/Header";

import { styles } from "./Main.style";

const Main = () => {
  return (
    <View>
      <Header />
      <View
        style={{
          display: "flex",
          alignItems: "center"
        }}
      >
        <Text>body</Text>
      </View>
    </View>
  );
};

export default Main;
