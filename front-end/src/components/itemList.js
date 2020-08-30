import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import Item from './item';

export default function ItemList(prop){
    
    const onLoadMore = async (number) => {
        await prop.setPageIndex(number);
    }

    return (
        <InfiniteScroll
            dataLength={prop.pageIndex}
            next={onLoadMore.bind(null,prop.pageIndex + 1)}
            hasMore={prop.pageIndex  < 10000}
            style={{
                paddingTop: 15,
                height: '69vh',
                overflow: 'visible'
            }}
            scrollThreshold={0.9}
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