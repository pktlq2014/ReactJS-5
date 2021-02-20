import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import styles from "./styles";
import LoadingIcon from "./../../assets/images/loading.gif";
import { connect } from "react-redux";
import * as uiActions from "./../../actions/ui";
class GlobalLoading extends Component {
  render() {
    const { classes, showLoading } = this.props;
    var xhtml = null;
    if (showLoading) {
      xhtml = (
        <div className={classes.GlobalLoading}>
          <img src={LoadingIcon} alt="loading" className={classes.icon} />
        </div>
      );
    }
    return xhtml;
  }
}
const mapStateToProps = (state) => {
  return {
    showLoading: state.ui.showLoading,
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    // uiActions : () => {
    //     dispatch(actions.uiActions());
    // }
  };
};
export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(GlobalLoading)
);
