import './App.css';
import React, { Component } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import Taskboard from './containers/Taskboard';
import theme from './commons/Theme/index';
class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Taskboard />
      </ThemeProvider>
    );
  }
}
export default App;
