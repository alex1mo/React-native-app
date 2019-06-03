import React from "react";
import { connect } from "react-redux";

import Profile from "./Profile";
import profile from "../../action-creator/profile.js";

const mapStateToProps = ({ profileData }) => ({ profileData });

export default connect(
  mapStateToProps,
  { getFormData: profile.getFormData }
)(Profile);
