import "./App.css";
import React, { Component } from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import Taskboard from "./containers/Taskboard";
import theme from "./commons/Theme/index";
import { Provider } from "react-redux";
import configureStore from "./redux/configureStore";
const store = configureStore();
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Taskboard />
        </ThemeProvider>
      </Provider>
    );
  }
}
export default App;
