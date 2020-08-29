import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import Item from './item';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    card: {
        height: '25%',
        width: '100%'
    }
})
export default function ItemList(prop){
    const classes = useStyles();

    if (prop.category === "All Category") {
        return (
            <InfiniteScroll
                dataLength={9}
                next={12}
                hasMore={true}
                style={{
                    paddingTop: 15,
                    height: '69vh',
                    overflow: 'visible'
                }}
            >
                {prop.itemList.map(item => {
                    let categoryName;
                    if (item.categoryId === 1){
                        categoryName = "Red";
                    } else {
                        categoryName = "Blue";
                    }
                    return(
                        <Item 
                            title={item.eventName}
                            category={categoryName}
                            summary={item.eventSummary}
                        />
                    )
                })}            
            </InfiniteScroll>
        )
    } else {
        return (
            <InfiniteScroll
                dataLength={9}
                next={12}
                hasMore={true}
                style={{
                    paddingTop: 15,
                    height: '69vh',
                    overflow: 'visible'
                }}
            >
                {prop.itemList.map(item => {
                    let categoryName;
                    if (item.categoryId === 1){
                        categoryName = "Red";
                    } else {
                        categoryName = "Blue";
                    }
                    if (categoryName === prop.category){
                        return(
                            <Item 
                                title={item.eventName}
                                category={categoryName}
                                summary={item.eventSummary}
                            />
                        )
                    }
                })}            
            </InfiniteScroll>
        )
    }
}