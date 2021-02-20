import "./App.css";
import React, { Component } from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import Taskboard from "./containers/Taskboard";
import theme from "./commons/Theme/index";
import { Provider } from "react-redux";
import configureStore from "./redux/configureStore";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GlobalLoading from "./components/GlobalLoading";
import SideMenu from "./components/SideMenu/SideMenu";
import Header from "./components/Header/Header";
const store = configureStore();
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <SideMenu />
          <Header />
          {/* <GlobalLoading/>
          <ToastContainer />
          <Taskboard /> */}
        </ThemeProvider>
      </Provider>
    );
  }
}
export default App;
