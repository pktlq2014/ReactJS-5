import React, { Component } from 'react';
import styles from './styles';
import { withStyles } from "@material-ui/styles";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import TaskItem from './../TaskItem/index';
import Fab from '@material-ui/core/Fab';
import Edit from '@material-ui/icons/Edit';
import Delete from '@material-ui/icons/Delete';
import Grid from '@material-ui/core/Grid';
class TaskList extends Component {
    render() {
        var { classes } = this.props;
        return (
            <Grid item xs={12} sm={6} md={4} lg={4} xl={4} key={this.props.index}>
                <div className="">{this.props.label}</div>
                {/* <div className={classes.app}> */}
                <div>
                    {this.props.tasksFiltered.map((tasks, index) => {
                        return (
                            <Card key={index}>
                                <CardContent>
                                    <TaskItem description={tasks.description} title={tasks.title} label={this.props.label} />
                                </CardContent>
                                <CardActions className={classes.floatBtn}>
                                    <Fab size="small" color="primary" aria-label="edit">
                                        <Edit className={classes.icon} />
                                    </Fab>
                                    <Fab size="small" color="primary" aria-label="delete">
                                        <Delete className={classes.icon} />
                                    </Fab>
                                </CardActions>
                            </Card>
                        );
                    })}
                </div>
            </Grid>

        );
    }
}

export default withStyles(styles)(TaskList);