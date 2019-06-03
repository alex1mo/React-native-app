import React from "react";
import { Text, View, TextInput, TouchableOpacity, Alert } from "react-native";

import { styles } from "./Add.style";

const Add = ({ addItem, setPage }) => {
  let form = {
    title: "",
    text: ""
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Title</Text>
      <TextInput
        onChangeText={text => (form.title = text)}
        style={[styles.border, styles.input]}
        maxLength={35}
      />
      <Text style={styles.text}>Text</Text>
      <TextInput
        onChangeText={text => (form.text = text)}
        multiline={true}
        numberOfLines={5}
        style={[styles.border, styles.input]}
        maxLength={100}
      />
      <View style={styles.buttonWrap}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            if (form.title.length > 0 && form.text.length > 0) {
              addItem(form);
              setPage(null);
            }
          }}
        >
          <Text style={styles.buttonText}>add</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Add;
