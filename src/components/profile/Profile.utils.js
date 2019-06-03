import React from "react";
import { Text, TextInput } from "react-native";
import { ImagePicker, Permissions } from "expo";

import { styles } from "./Profile.style";

const title = ["name", "age", "email", "phone"];

const renderTitleToData = () => {
  return title.map(e => {
    return (
      <Text key={e} style={styles.text}>
        {e + ":"}
      </Text>
    );
  });
};

const renderDataProfile = ({ ...data }) => {
  return title.map(e => {
    let result = data[e];
    return (
      <Text key={e} style={styles.text}>
        {result}
      </Text>
    );
  });
};

const renderSetDataProfile = context => {
  return title.map(e => {
    return (
      <TextInput
        maxLength={20}
        key={e}
        style={styles.textInput}
        onChangeText={text => {
          context.setState({ data: { ...context.state.data, [e]: text } });
        }}
      />
    );
  });
};

const takeFromCamera = async () => {
  const { status } = await Permissions.askAsync(
    Permissions.CAMERA_ROLL,
    Permissions.CAMERA
  );
  if (status === "granted") alert("camera");
};

const takeFromGallery = async context => {
  let result = await ImagePicker.launchImageLibraryAsync({
    allowsEditing: true
  });

  if (!result.cancelled) {
    // context.setState({ data: { ...context.state.data, image: result.uri } });
    context.props.getFormData({ image: result.uri });
  }
};

export default {
  renderTitleToData,
  renderDataProfile,
  renderSetDataProfile,
  takeFromCamera,
  takeFromGallery
};
