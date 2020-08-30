import React, { useEffect, useState, Suspense } from 'react';
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import FilterAndItems from './components/filterAndItems';
import axios from 'axios';

import TestCategories from './Test/TestCategories';

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
      height: '3vh',
  },
  mainView: {
      direction: 'row',
      height: '100vh',
      width: '100vw'
  },
  titleAndFilter: {
    height: '10vh',
  },
  results: {
    height: '75vh',
  },
  title: {
    textAlign: 'left',
    fontSize: 25
  },
})

function App() {

  TestCategories();

  // const [isLoaded, setIsLoaded] =useState(false);
  const [categoryList, setCategoryList] = useState([]);
  const[itemList, setItemList] = useState([]);
  const [category, setCategory] = useState(0);
  const [query, setQuery] = useState("");
  const [pageIndex, setPageIndex] = useState(1);

  useEffect(()=> {
    let queryJson = {
      'pageIndex': pageIndex,
      'pageSize': 4,
      'categoryId': category,
      'keyword': query
    }
    axios.get('http://localhost:8000/api/categories')
    .then(res => {
        // setIsLoaded(true);
        setCategoryList(res.data);
    });
    // axios.get('http://localhost:8000/api/events')
    // .then(res => {
    //   // setIsLoaded(true);
    //   setItemList(res.data);
    // });
    axios.post('http://localhost:8000/api/events/search',
      queryJson
    )
    .then(res => {
      setItemList(res.data);
    })
    .catch(err => {
      console.log(err)
    })
  }, [query, category, pageIndex]);

  const classes = useStyles();

  // if (!isLoaded) {
  //   return <div>Loading...</div>
  // } else {
    return (
      <Suspense fallback={<div>loading....</div>}>
        <Grid container className={classes.root}>
            <Grid item xs={2} className={classes.sideColumn}>
            </Grid>
            <Grid container xs={8} className={classes.mainView}>
                <Grid item xs={12} className={classes.topSpacing}/>
                <Grid container className={classes.titleAndFilter}>
                  <Grid item xs={12} className={classes.title}>
                    <h1>Upcoming Events</h1>
                  </Grid>
                </Grid>
                <Grid item xs={12}className={classes.results}>
                  <FilterAndItems
                    category = {category}
                    setCategory = {setCategory}
                    query = {query}
                    setQuery = {setQuery}
                    categoryList = {categoryList}
                    itemList = {itemList}
                    pageIndex = {pageIndex}
                    setPageIndex = {setPageIndex}
                  />
                </Grid>
            </Grid>
            <Grid item xs={2} className={classes.sideColumn}>
            </Grid>
        </Grid>
        </Suspense>
    )
  // }
}

export default App;
