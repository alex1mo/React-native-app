import React from "react";
import { connect } from "react-redux";

import SignUp from "./SignUp";

import signup from "../../action-creator/signup.js";

const mapStateToProps = ({ dataForm, signup }) => {
  return { dataForm, signup };
};

export default connect(
  mapStateToProps,
  { setFormData: signup.setFormData }
)(SignUp);
