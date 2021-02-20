import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import styles from "./styles";
class SideMenu extends Component {
  render() {
      var {classes} = this.props;
    return <div className={classes.side_menu}>

    </div>;
  }
}

export default withStyles(styles)(SideMenu);
