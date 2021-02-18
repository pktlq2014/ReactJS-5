// css in js
const styles = (theme) => ({
    box: {
        display: "flex",
    },
    shape: {
        backgroundColor: theme.color.primary,
        padding: "2rem",
        marginRight: "1rem",
        color: theme.shape.textColor
    },
    floatBtn : {
        display: "flex",
        justifyContent : "flex-end",
    },
    icon : {
        fontSize : "1.25rem"
    }
});
export default styles;