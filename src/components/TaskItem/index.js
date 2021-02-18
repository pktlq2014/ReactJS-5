import React, { Component } from 'react';
import styles from './styles';
import { withStyles } from "@material-ui/styles";
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
class TaskItem extends Component {
    render() {
        return (
            <Grid container justify="space-between">
                <Grid item md={8}>
                    <Typography component="h2">{this.props.title}</Typography>
                </Grid>
                <Grid item md={4}>
                    {this.props.label}
                </Grid>
                <Grid item md={12}>
                    {this.props.description}
                </Grid>
            </Grid>

        );
    }
}

export default withStyles(styles)(TaskItem);