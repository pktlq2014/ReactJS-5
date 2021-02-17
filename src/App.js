import './App.css';
import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { ThemeProvider } from '@material-ui/core/styles';
import Taskboard from './containers/Taskboard';
import theme from './commons/Theme/index';
import AddIcon from '@material-ui/icons/Add';
import Grid from '@material-ui/core/Grid';
import { STATUSES } from './constants/index';
import styles from './containers/Taskboard/styles';
import { withStyles } from "@material-ui/styles";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
const listTask = [
  {
    id: 1,
    title: "A",
    description: "A",
    status: 0
  },
  {
    id: 2,
    title: "B",
    description: "B",
    status: 1
  },
  {
    id: 3,
    title: "C",
    description: "C",
    status: 2
  },
];
class App extends Component {
  renderBoard = () => {
    var { classes } = this.props;
    console.log(classes);
    var xhtml = null;
    xhtml = (
      <Grid container spacing={2}>
        {STATUSES.map((status, index) => {
          const tasksFiltered = listTask.filter((task, index) => {
            return task.status === status.value;
          });
          return (
            <Grid item xs={12} sm={6} md={4} lg={4} xl={4} key={index}>
              <div className="">{status.label}</div>
              <div className={classes.app}>
                {tasksFiltered.map((tasks, index) => {
                  return <h1 key={index}>{tasks.title}</h1>;
                })}
              </div>
            </Grid>
          );
        })};
      </Grid>
    );
    return xhtml;
  }
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Button variant="contained" color="primary">
          <AddIcon /> Thêm mới công việc
        </Button>



        <Taskboard />



        {this.renderBoard()}
      </ThemeProvider>
    );
  }
}

export default withStyles(styles)(App);
