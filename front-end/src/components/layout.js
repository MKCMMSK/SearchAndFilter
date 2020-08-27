import React from 'react';
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import { colors } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        height: '100vh',
        width: '100vw'
    },
    sideColumn: {
        height: '100vh',
        width: '10vw',
        'background-color': 'teal'
    },
    topSpacing: {
        height: '10vh',
        'background-color': 'red'
    },
    mainView: {
        direction: 'row',
        height: '100vh',
        width: '100vw'
    }
})
export default function Layout() {
    const classes = useStyles();

    return (
        <Grid container className={classes.root}>
            <Grid item xs={1} className={classes.sideColumn}>
                <Box/>
            </Grid>
            <Grid container xs={10}className={classes.mainView}>
                <Grid xs={12} className={classes.topSpacing}/>
                <Grid item xs={12}>
                    <p>hi</p>
                </Grid>
            </Grid>
            <Grid item xs={1} className={classes.sideColumn}>
                <Box/>
            </Grid>
            
        </Grid>
    )
}