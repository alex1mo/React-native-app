import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";

import Header from "../../components/header/Header.container";
import Add from "../../components/add/Add";
import Profile from "../../components/profile/Profile.container";

import { styles } from "./Main.style";

const Main = ({ page: Page }) => {
  return (
    <View>
      <Header />
      <View
        style={{
          display: "flex",
          alignItems: "center"
        }}
      >
        {/* {Page && <Page />} */}
        <Profile />
      </View>
    </View>
  );
};

Main.propTypes = {
  Main: PropTypes.func
};

export default Main;
