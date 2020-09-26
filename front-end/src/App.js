import React, { useEffect, useState, Suspense } from 'react';
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import FilterAndItems from './components/filterAndItems';
import axios from 'axios';

const useStyles = makeStyles({
  root: {
      flexGrow: 1,
      height: '100vh',
  },
  sideColumn: {
      height: '100vh',
      width: '5vw',
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

  const [categoryList, setCategoryList] = useState([]);
  const [itemList, setItemList] = useState([]);
  const [category, setCategory] = useState(0);
  const [query, setQuery] = useState("");
  const [pageIndex, setPageIndex] = useState(1);
  const [loadMore, setLoadMore] = useState (true);

  let queryJson = {
    'pageIndex': pageIndex,
    'pageSize': 4,
    'categoryId': category,
    'keyword': query
  }

  //called once to retrieve category List
  useEffect(()=>{
    axios.get('http://localhost:8000/api/categories')
    .then(res => {
        setCategoryList(res.data);
    }).catch(err => {
      console.log(err)
    });
  }, []);

  //called everytime we need to load more events
  //if load more events comes back with the same result length, loadMore set to false
  useEffect(()=> {
    console.log(queryJson);
    
    axios.post('http://localhost:8000/api/events/search',
      queryJson
    )
    .then(res => {
      if (itemList.length === res.data.length) {
        setLoadMore(false);
      }
      setItemList(res.data);
    })
    .catch(err => {
      console.log(err)
    })
  }, [,pageIndex]);

  //called everytime new query or when category is changed, also a small feature is when query is emptied it will automatically query with empty string to refresh
  useEffect(()=> {

    setPageIndex(1);
    setLoadMore(true);
    axios.post('http://localhost:8000/api/events/search',
      queryJson
    )
    .then(res => {
      setItemList(res.data);
    })
    .catch(err => {
      console.log(err)
    })
  }, [query,category])

  const classes = useStyles();

  return (
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
            loadMore = {loadMore}
          />
        </Grid>
      </Grid>
      <Grid item xs={2} className={classes.sideColumn}>
      </Grid>
    </Grid>
  )
}

export default App;
