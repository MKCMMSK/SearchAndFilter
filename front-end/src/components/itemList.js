import React from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import Item from './item';


export default function ItemList(prop){

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

}