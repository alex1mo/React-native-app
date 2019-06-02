import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";

import Header from "../../components/header/Header.container";
import Add from "../../components/add/Add";

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
        {Page && <Page />}
      </View>
    </View>
  );
};

Main.propTypes = {
  Main: PropTypes.func
};

export default Main;
