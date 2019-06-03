import React from "react";
import { connect } from "react-redux";

import Add from "./Add";

import add from "../../action-creator/add.js";
import header from "../../action-creator/header.js";

const mapStateToProps = ({ list }) => ({
  list
});

export default connect(
  mapStateToProps,
  { addItem: add.addItem, setPage: header.setPage }
)(Add);
