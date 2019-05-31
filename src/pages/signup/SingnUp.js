import React from "react";
import { View, TextInput, Text, TouchableOpacity } from "react-native";

import { styles } from "./SignUp.style";

const SingnUp = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>SIGN UP</Text>
      <TextInput style={styles.input} placeholder="phone" />
      <TextInput style={styles.input} placeholder="password" />
      <TextInput style={styles.input} placeholder="confirm password" />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.textButton}>Confirm</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SingnUp;
