import './App.css';
import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { ThemeProvider } from '@material-ui/core/styles';
import Taskboard from './containers/Taskboard';
import theme from './commons/Theme/index';
import AddIcon from '@material-ui/icons/Add';
class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Button variant="contained" color="primary">
          <AddIcon /> Thêm mới công việc
        </Button>



        <Taskboard />
      </ThemeProvider>
    );
  }
}
export default App;
