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
    textField : {
       marginRight : "1.25rem"
    },
    root: {
        '& label.Mui-focused': {
          color: 'green',
        },
        '& .MuiInput-underline:after': {
          borderBottomColor: 'green',
        },
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: 'red',
          },
          '&:hover fieldset': {
            borderColor: 'yellow',
          },
          '&.Mui-focused fieldset': {
            borderColor: 'green',
          },
        },
      },
});
export default styles;