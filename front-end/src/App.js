import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import FilterAndItems from './components/filterAndItems';
import axios from 'axios';

const useStyles = makeStyles({
  root: {
      flexGrow: 1,
      height: '100vh',
      width: '100vw'
  },
  sideColumn: {
      height: '100vh',
      width: '15vw',
  },
  topSpacing: {
      height: '10vh',
  },
  mainView: {
      direction: 'row',
      height: '100vh',
      width: '100vw'
  },
  titleAndFilter: {
    height: '15vh',
  },
  results: {
    height: '75vh',
  },
  title: {
    textAlign: 'left',
    height: '20vh'
  },
})

function App() {

  const [categoryList, setCategoryList] = useState([]);
  const[itemList, setItemList] = useState([]);

  useEffect(()=> {
    axios.get('http://localhost:8000/api/categories')
    .then(res => {
        setCategoryList(res.data);
    });
    axios.get('http://localhost:8000/api/events')
    .then(res => {
      setItemList(res.data);
    });
  }, []);

  const classes = useStyles();

  return (
      <Grid container className={classes.root}>
          <Grid item xs={2} className={classes.sideColumn}>
              <Box/>
          </Grid>
          <Grid container xs={8} className={classes.mainView}>
              <Grid item xs={12} className={classes.topSpacing}/>
              <Grid container  className={classes.titleAndFilter}>
                <Grid item xs={12} className={classes.title}>
                  <h1>Upcoming Events</h1>
                </Grid>
              </Grid>
              <Grid item xs={12}className={classes.results}>
                <FilterAndItems
                  categoryList = {categoryList}
                  setCategoryList = {setCategoryList}
                  items = {itemList}  
                />
              </Grid>
          </Grid>
          <Grid item xs={2} className={classes.sideColumn}>
              <Box/>
          </Grid>
      </Grid>
  )
}

export default App;
