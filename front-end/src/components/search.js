import React from 'react';
import Input from '@material-ui/core/OutlinedInput'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button';
import { createMuiTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#2979ff'
        }
    }
})
const useStyles = makeStyles({
    searchForm: {
        width: '60%'
    },
    searchBar: {
        height: 55,
        width: 334,
        'background-color': "white"
    },
    button: {
        height: 55,
        width: 100,
        'margin-left': 15,
        'margin-bottom': 2,
        'font-size': 10,
        'color': 'white'
    }
})
export default function Search() {
    const classes = useStyles();
    const color = theme.palette.primary.main;

    return(
        <form>
            <Input
                placeholder={"Search for keywords"}
                className={classes.searchBar}
                disableUnderline={true}
            />
            <Button variant="contained" color={"primary"} className={classes.button} disableFocusRipple={true}> Search </Button>
        </form>
    )
}