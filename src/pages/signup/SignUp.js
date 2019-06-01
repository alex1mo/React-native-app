import React from "react";
import { View, TextInput, Text, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";

import { styles } from "./SignUp.style";

const SignUp = ({ getDataForm, ...props }) => {
  let form = {
    phone: null,
    password1: null,
    password2: null
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>SIGN UP</Text>
      <TextInput
        style={styles.input}
        placeholder="phone"
        onChangeText={text => (form.phone = text)}
      />
      <TextInput
        style={styles.input}
        placeholder="password"
        onChangeText={text => (form.password1 = text)}
      />
      <TextInput
        style={styles.input}
        placeholder="confirm password"
        onChangeText={text => (form.password2 = text)}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          let { phone, password1, password2 } = form;
          if ((password1 === password2) & phone) {
            getDataForm({ phone, password: password1 });
          }
        }}
      >
        <Text style={styles.textButton}>Confirm</Text>
      </TouchableOpacity>
    </View>
  );
};

SignUp.propTypes = {
  form: PropTypes.shape({
    phone: PropTypes.string,
    password: PropTypes.string
  }),
  getDataForm: PropTypes.func.isRequired
};

export default SignUp;