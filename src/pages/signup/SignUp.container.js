import React from "react";
import { connect } from "react-redux";

import SignUp from "./SignUp";

import signup from "../../action-creator/signup.js";

const mapStateToProps = ({ dataForm }) => {
  return { dataForm };
};

export default connect(
  mapStateToProps,
  { getFormData: signup.getFormData }
)(SignUp);
