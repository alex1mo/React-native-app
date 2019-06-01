import React from "react";
import SignUp from "./SignUp";
import { connect } from "react-redux";

import signup from "../../action-creator/signup.js";

const mapStateToProps = ({ signup: { form } }) => {
  return { form };
};

export default connect(
  mapStateToProps,
  { getDataForm: signup.getDataForm }
)(SignUp);
