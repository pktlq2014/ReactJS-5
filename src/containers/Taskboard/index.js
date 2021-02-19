import React, { Component } from "react";
import styles from "./styles";
import { withStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import TaskList from "./../../components/TaskList/index";
import { STATUSES } from "./../../constants/index";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import TaskForm from "./../../components/TaskForm/index";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from './../../actions/tasks';
class TaskBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }
  componentDidMount() {
    // const {onTasksActions} = this.props;
    // const {fetchListTasks} = onTasksActions;
    // fetchListTasks()
    this.props.onTasksActions();
    console.log(this.props.onTasksActions());
  }
  renderBoard = () => {
    var { classes, tasks } = this.props;
    console.log(tasks);
    console.log(classes);
    var xhtml = null;
    xhtml = (
      <Grid className={classes.card} container spacing={2}>
        {STATUSES.map((status, index) => {
          const tasksFiltered = tasks.filter((task, index) => {
            return task.status === status.value;
          });
          return (
            <TaskList
              key={index}
              index={index}
              label={status.label}
              tasksFiltered={tasksFiltered}
            />
          );
        })}
        ;
      </Grid>
    );
    return xhtml;
  };
  onOpenDialog = () => {
    this.setState({
      open: true,
    });
  };
  onOpenDialogFromTaskForm = (data) => {
    if (data === 0) {
      this.setState({
        open: false,
      });
    }
  };
  render() {
    console.log(this.props);
    var { classes } = this.props;
    return (
      <div>
        <Button variant="contained" color="primary" onClick={this.onOpenDialog}>
          <AddIcon /> Thêm mới công việc
        </Button>

        <div className={classes.box}>
          <div className={classes.shape}>ReactJS</div>
          <div className={classes.shape}>AngularJS</div>
          <div className={classes.shape}>VueJS</div>
        </div>

        {this.renderBoard()}

        <TaskForm
          onOpenDialogFromTaskForm={this.onOpenDialogFromTaskForm}
          open={this.state.open}
        />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    tasks : state.tasks
  };
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    //onTasksActions : bindActionCreators(actions, dispatch),
    onTasksActions : () => {
      dispatch(actions.fetchListTask());
    }
  };
};
export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(TaskBoard));
