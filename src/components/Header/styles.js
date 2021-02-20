import { Height } from "@material-ui/icons";

const styles = () => ({
  header: {
    backgroundColor: "red",
    marginLeft: "15rem",
  },
  grow: {
    flexGrow: 1,
  },
  search: {
    position: 'relative',
    marginLeft: '1rem',
    borderRadius: '1rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'space-between',
    color: 'white',
    padding: '0 1rem',
    backgroundColor: 'red',
    width: '20%',
  },
  searchIcon: {
    height: "100%",
    position: "absolute",
    pointerEvents: "none",

  },
  inputRoot: {

    color: "inherit",
  },
});
export default styles;
