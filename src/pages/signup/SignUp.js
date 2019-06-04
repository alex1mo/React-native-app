import React from "react";
import { View, TextInput, Text, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";

import Main from "../main/Main.container";

import { styles } from "./SignUp.style";

import utils from "../../utils/utils.all";

const SignUp = ({ setFormData, navigation, dataForm }) => {
  let form = {
    phone: null,
    password1: null,
    password2: null
  };

  if (dataForm.loading) {
    return (
      <View style={styles.container}>
        <Text style={{ color: "white" }}>Loading...</Text>
      </View>
    );
  } else if (dataForm.password && dataForm.password.length > 0) {
    return <Main />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>SIGN UP</Text>
      <TextInput
        style={styles.input}
        placeholder="phone"
        onChangeText={text => (form.phone = text)}
        textContentType="telephoneNumber"
      />
      <TextInput
        style={styles.input}
        placeholder="password"
        onChangeText={text => (form.password1 = text)}
        textContentType="password"
        secureTextEntry={true}
      />
      <TextInput
        style={styles.input}
        placeholder="confirm password"
        onChangeText={text => (form.password2 = text)}
        textContentType="password"
        secureTextEntry={true}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          let { phone, password1, password2 } = form;
          if (password1 === password2 && phone) {
            setFormData({ phone, password: password1 });
            utils.storeData(
              "auth",
              JSON.stringify({ phone, password: password1 })
            );
            navigation.navigate("main");
          }
        }}
      >
        <Text style={styles.textButton}>Confirm</Text>
      </TouchableOpacity>
    </View>
  );
};

SignUp.propTypes = {
  setFormData: PropTypes.func.isRequired,
  navigation: PropTypes.object
};

export default SignUp;
