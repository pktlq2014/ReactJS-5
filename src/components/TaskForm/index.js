import React, { Component } from 'react';
import styles from './styles';
import { withStyles } from "@material-ui/styles";
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Slide from '@material-ui/core/Slide';
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});
class TaskBoard extends Component {
    onOpenDialogFromTaskForm = (data) => {
        this.props.onOpenDialogFromTaskForm(data);
    }
    render() {
        var { classes } = this.props;
        return (
            <Dialog
                open={this.props.open}
                TransitionComponent={Transition}
                keepMounted
                onClose={() => this.onOpenDialogFromTaskForm(0)}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >

                <DialogTitle id="alert-dialog-slide-title">{"Title?"}</DialogTitle>



                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        <form noValidate autoComplete="off">
                            <TextField className={[classes.textField, classes.root]} id="outlined-basic" label="Outlined" variant="outlined" />
                            <TextField className={classes.root} id="outlined-basic" label="Outlined" variant="outlined" />
                        </form>
                    </DialogContentText>
                </DialogContent>



                <DialogActions>
                    <Button onClick={() => this.onOpenDialogFromTaskForm(0)} color="primary">
                        Disagree
                        </Button>
                    <Button onClick={() => this.onOpenDialogFromTaskForm(0)} color="primary">
                        Agree
                        </Button>
                </DialogActions>
            </Dialog>
        );
    }
}

export default withStyles(styles)(TaskBoard);