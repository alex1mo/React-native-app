import React from "react";
import { connect } from "react-redux";

import Header from "./Header";
import header from "../../action-creator/header";

const mapStateToProps = ({ page }) => ({
  page
});

export default connect(
  mapStateToProps,
  { setPage: header.setPage }
)(Header);
