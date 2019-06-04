import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";

import Add from "../add/Add.container";
import Profile from "../profile/Profile.container";

import { styles } from "./Header.style";

class Header extends React.Component {
  switchAdd = Component => {
    if (Add === Component || Profile === Component) {
      return (
        <TouchableOpacity onPress={() => this.props.setPage(null)}>
          <Text style={styles.add2}>{"Home"}</Text>
        </TouchableOpacity>
      );
    } else {
      return false;
    }
  };

  switchProfile = Component => {
    if (Profile === Component) {
      return true;
    } else {
      return false;
    }
  };

  render() {
    let {
      page,
      setPage,
      profileData: { image }
    } = this.props;
    console.log(image);

    return (
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => setPage(Profile)}
          disabled={this.switchProfile(page)}
        >
          <Image
            style={styles.avatar}
            source={
              (image && { uri: image }) ||
              require("../../../assets/defaultAvatarMin.png")
            }
          />
        </TouchableOpacity>
        {this.switchAdd(page) || (
          <TouchableOpacity onPress={() => setPage(Add)}>
            <Text style={styles.add}>+</Text>
          </TouchableOpacity>
        )}
      </View>
    );
  }
}

Header.propTypes = {
  page: PropTypes.func,
  profileData: PropTypes.object,
  setPage: PropTypes.func.isRequired
};

export default Header;
