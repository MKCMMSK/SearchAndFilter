import React,  { useState, useEffect } from 'react';
import Filter from './filter';
import Items from './items';
import Search from './search';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    filterAndSearch: {
        height: "5%",
        width: "100%"
    },
    categoryDropDown: {
        width: "20"
    }
})
export default function FilterAndItems(prop){
    const classes = useStyles();
    const [category, setCategory] = useState('all');
    const [filter, setFilter] = useState('');
    console.log(prop.categoryList, "inside filter and items")
    return(
        <Grid container className={classes.filterAndSearch} spacing={2}>
            <Grid item>
                <Filter
                    className={classes.categoryDropDown}
                    categoryList = {prop.categoryList}
                    setCategory = {setCategory}
                />
            </Grid>
            <Grid item>
                <Search
                    setFilter={setFilter}
                />
            </Grid>
        </Grid>
    );
}