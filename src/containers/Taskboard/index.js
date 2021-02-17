import React, { Component } from 'react';
import styles from './styles';
import { withStyles } from "@material-ui/styles";
class TaskBoard extends Component {
    render() {
        console.log(this.props);
        var { classes } = this.props;
        return (
            <div className={classes.box}>
                <div className={classes.shape}>ReactJS</div>
                <div className={classes.shape}>AngularJS</div>
                <div className={classes.shape}>VueJS</div>
            </div>
        );
    }
}

export default withStyles(styles)(TaskBoard);