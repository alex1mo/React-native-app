import React from "react";
import { Text, View, TouchableOpacity } from "react-native";

import { styles } from "./List.style";

const Item = ({ text, title }) => {
  return (
    <View>
      <TouchableOpacity style={styles.container}>
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const renderItem = items => {
  let arr = items.map((e, i) => {
    let { title, text } = e;
    return <Item key={i} title={title} text={text} />;
  });

  return arr;
};

export default { renderItem };
