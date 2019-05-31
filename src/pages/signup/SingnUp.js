import React from "react";
import { View, TextInput, Text } from "react-native";
import { styles } from "./SignUp.style";

const SingnUp = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{"Зарегистрируйтесь".toUpperCase()}</Text>
      <TextInput style={styles.input} placeholder="введите номер телефона" />
      <TextInput style={styles.input} placeholder="введите пароль" />
      <TextInput style={styles.input} placeholder="повторите пароль" />
    </View>
  );
};

export default SingnUp;
