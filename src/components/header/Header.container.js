import React from "react";
import { connect } from "react-redux";

import Header from "./Header";

import header from "../../action-creator/header.js";

const mapStateToProps = ({ page, profileData }) => ({
  page,
  profileData
});

export default connect(
  mapStateToProps,
  { setPage: header.setPage }
)(Header);
