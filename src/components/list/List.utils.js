import React from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";

import { styles } from "./List.style";

const Item = ({ text, title }) => {
  return (
    <View>
      <TouchableOpacity style={styles.container}>
        <Text style={styles.title}>title</Text>
      </TouchableOpacity>
      <Text style={styles.text}>text</Text>
    </View>
  );
};

const renderItem = items => {
  return items.map(e => {
    let { id, title, text } = e;
    return <Item key={id} title={title} text={text} />;
  });
};

export default { renderItem };
