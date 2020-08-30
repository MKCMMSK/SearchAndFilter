import React, { useState } from 'react';
import Input from '@material-ui/core/OutlinedInput'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button';
import { createMuiTheme } from '@material-ui/core/styles';

const useStyles = makeStyles({
    searchBar: {
        height: 55,
        width: 334,
        'background-color': "white"
    },
    button: {
        height: 55,
        width: 100,
        marginLeft: 15,
        marginBottom: 2,
        fontSize: 10,
        color: 'white',
        backgroundColor: '#2979ff'
    }
})

export default function Search(prop) {
    const [inputQuery, setInputQuery] = useState("");

    const classes = useStyles();

    function searchKeyword() {
        prop.setQuery(inputQuery)
    }

    function handleChange(event) {
        setInputQuery(event.target.value);
        if (event.target.value === "") {
            prop.setQuery("");
        }
    }

    return(
        <form>
            <Input
                placeholder={"Search for keywords"}
                className={classes.searchBar}
                onChange={handleChange}
            />
            <Button variant="contained" color={'inherit'} className={classes.button} disableFocusRipple={true} onClick={searchKeyword}> Search </Button>
        </form>
    )
}