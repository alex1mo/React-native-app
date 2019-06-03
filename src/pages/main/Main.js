import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";

import List from "../../components/list/List.container";
import Header from "../../components/header/Header.container";

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
        {(Page && <Page />) || <List />}
      </View>
    </View>
  );
};

Main.propTypes = {
  Main: PropTypes.func
};

export default Main;
