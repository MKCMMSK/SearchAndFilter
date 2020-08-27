import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'


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
  },
  titleAndFilter: {
    height: '15vh',
    'background-color': 'yellow'
  },
  results: {
    height: '75vh',
    'background-color': 'green'
  },
  title: {
    textAlign: 'left',
    height: '50%'
  },
  filter: {
    height: '50%'
  }
})

function App() {
  const classes = useStyles();

    return (
        <Grid container className={classes.root}>
            <Grid item xs={1} className={classes.sideColumn}>
                <Box/>
            </Grid>
            <Grid container xs={10}className={classes.mainView}>
                <Grid xs={12} className={classes.topSpacing}/>
                <Grid container xs={12} className={classes.titleAndFilter}>
                  <Grid item xs={12} className={classes.title}>
                    <h1>Title</h1>
                  </Grid>
                  <Grid item xs={12} className={classes.filter}>
                    <p>filter</p>
                  </Grid>
                </Grid>
                <Grid item xs={12}className={classes.results}>

                </Grid>
            </Grid>
            <Grid item xs={1} className={classes.sideColumn}>
                <Box/>
            </Grid>
            
        </Grid>
    )
}

export default App;
