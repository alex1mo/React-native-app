import React from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";

import { styles } from "./Add.style";

class Add extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Title</Text>
        <TextInput style={[styles.border, styles.input]} maxLength={35} />
        <Text style={styles.text}>Text</Text>
        <TextInput
          multiline={true}
          numberOfLines={5}
          style={[styles.border, styles.input]}
          maxLength={200}
        />
        <View style={styles.buttonWrap}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>add</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Add;
