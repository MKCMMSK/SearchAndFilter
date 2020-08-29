import React,  { useState, userEffect, useEffect } from 'react';
import Filter from './filter';
import ItemList from './itemList';
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
    },
    items: {
        height: "72vh"
    }
})
export default function FilterAndItems(prop){
    
    const classes = useStyles();

    return(
        <Grid container className={classes.filterAndSearch} spacing={2}>
            <Grid item>
                <Filter
                    className={classes.categoryDropDown}
                    categoryList = {prop.categoryList}
                    setCategory = {prop.setCategory}
                    category = {prop.category}
                />
            </Grid>
            <Grid item>
                <Search
                    setQuery={prop.setQuery}
                />
            </Grid>
            <Grid item xs={12} className={classes.items}>
                
                <ItemList
                    itemList={prop.itemList}
                    category={prop.category}
                    query={prop.query}
                /> 
               
            </Grid>
        </Grid>
    );
}