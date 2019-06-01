import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";

import { styles } from "./Main.style";

const Main = () => {
  return (
    <View>
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
