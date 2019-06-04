import React from "react";
import { Text, View, Image, TouchableOpacity, Alert } from "react-native";

import PropTypes from "prop-types";

import { styles } from "./Profile.style";
import utils from "./Profile.utils";
import utilsAll from "../../utils/utils.all";

class Profile extends React.Component {
  state = {
    edit: false,
    data: {
      name: "name",
      age: "age",
      phone: "phone",
      email: "email",
      image: null
    }
  };

  render() {
    let { edit, data } = this.state;
    let { profileData, setFormData } = this.props;

    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={{ borderBottomWidth: 1, borderBottomColor: "#00b3be" }}
          disabled={!edit}
          onPress={() =>
            Alert.alert("Hello, User", "Choose your destiny", [
              { text: "Camera", onPress: () => utils.takeFromCamera() },
              {
                text: "Gallery",
                onPress: () => utils.takeFromGallery(this)
              }
            ])
          }
        >
          <Image
            style={styles.avatar}
            source={{
              uri: profileData.image || "../../../assets/defaultAvatarMin.png"
            }}
          />
        </TouchableOpacity>
        <View style={styles.data}>
          <View style={{ marginRight: 10 }}>{utils.renderTitleToData()}</View>
          {(edit && <View>{utils.renderSetDataProfile(this)}</View>) || (
            <View>{utils.renderDataProfile(profileData)}</View>
          )}
        </View>
        <View style={styles.wrapButtom}>
          <TouchableOpacity
            style={styles.edit}
            onPress={() => {
              this.setState({ edit: !edit });
              if (edit) {
                setFormData({ ...data, image: profileData.image });
                utilsAll.storeData(
                  "profile",
                  JSON.stringify({ ...data, image: profileData.image })
                );
              }
            }}
          >
            <Text style={styles.editText}>{(edit && "confirm") || "edit"}</Text>
          </TouchableOpacity>
          {edit && (
            <TouchableOpacity
              style={styles.edit}
              onPress={() => {
                this.setState({ edit: !edit, data: { ...profileData } });
                setFormData({ ...profileData, image: data.image });
              }}
            >
              <Text style={styles.editText}>reset</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    );
  }
}

require;

Profile.propTypes = {
  profileData: PropTypes.shape({
    name: PropTypes.string,
    age: PropTypes.string,
    phone: PropTypes.string,
    email: PropTypes.string
  }),
  setFormData: PropTypes.func.isRequired
};

export default Profile;
