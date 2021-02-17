import {createMuiTheme} from "@material-ui/core/styles";
const theme = createMuiTheme({
    color: {
        primary: "#D32F2f",
        secondary: "#00BCD4",
        error: "E64A19"
    },
    typography: {
        fontFamily: "Roboto"
    },
    shape: {
        borderRadius: "0.4rem",
        backgroundColor: "#7B1FA2",
        textColor: "#FFFFFF",
        border: "#CCCCCC"
    }
});
export default theme;