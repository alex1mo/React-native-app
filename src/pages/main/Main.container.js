import React from "react";
import { connect } from "react-redux";

import Main from "./Main";

const mapStateToProps = ({ page }) => ({ page });

export default connect(mapStateToProps)(Main);
