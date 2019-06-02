import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";

import { styles } from "./Profile.style";

const renderTitleToData = () => {
  let title = ["name", "age", "email", "phone"];

  return title.map(e => {
    return (
      <Text key={e} style={styles.text}>
        {e + ":"}
      </Text>
    );
  });
};

const renderDataProfile = ({ name, age, phone, email }) => {
  let title = ["name", "age", "email", "phone"];

  return title.map(e => {
    let result = null;
    switch (e) {
      case "name":
        result = name;
        break;
      case "age":
        result = age;
        break;
      case "phone":
        result = phone;
        break;
      case "email":
        result = email;
        break;
      default:
        result = "";
    }
    return (
      <Text key={e} style={styles.text}>
        {result}
      </Text>
    );
  });
};

const Profile = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{ borderBottomWidth: 1, borderBottomColor: "#00b3be" }}
      >
        <Image
          style={styles.avatar}
          source={require("../../../assets/defaultAvatar.jpeg")}
        />
      </TouchableOpacity>
      <View style={styles.data}>
        <View style={{ marginRight: 10 }}>{renderTitleToData()}</View>
        <View>
          {renderDataProfile({
            name: "name",
            age: "age",
            phone: "phone",
            email: "email"
          })}
        </View>
      </View>
    </View>
  );
};

export default Profile;
