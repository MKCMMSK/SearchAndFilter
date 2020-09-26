**Usage**

Category drop down to filter by categories. 
_I hope you don't mind, I took it upon myself and decided that the drop down menu should render the selected category without hitting the search button for a better user experience_

Search for keywords includes _both_ eventKeyword and eventName in each event.

scrolling down to 90% of the scroll bar will automatically query for the next page.

Changing categories, searching for keyword or eventName will set page back to 1 allowing for infinite scrolling again.

Emptying the Search form after a query will automatically query for everything in current category.

**Ports**
Backend is hosted on port 8000
localhost:8000

frontend is hosted on port 3000
localhost:3000

**Screenshots & Descriptions**
!["Initial Load"](https://github.com/MShaoK/SearchAndFilter/blob/master/screenshots/.NetInfiniteScroll.png?raw=true)
This is the initial load of the website.

!["Scrolled Down"](https://github.com/MShaoK/SearchAndFilter/blob/master/screenshots/.NetInfiniteScrolledDown.png?raw=true)
This is the scrolled down view where pagination is involved, the infinite scroll populates the next page of content from the database. As of right now, it loads 4/page and continues to populate the page until we run out of items from the database.

!["Filter Red"](https://github.com/MShaoK/SearchAndFilter/blob/master/screenshots/FilterRed.png?raw=true)
This demostrates the filtering of Red items.

!["Search Keyword"](https://github.com/MShaoK/SearchAndFilter/blob/master/screenshots/SearchKeyword.png?raw=true)
This is searching a keyword that is associated with the database item. In the database there is a column specifically used as keywords and it is searching for that.

!["Search Name"](https://github.com/MShaoK/SearchAndFilter/blob/master/screenshots/SearchName.png?raw=true)
This search bar also searches for the names as well, or rather just the string, so even partial or incomplete strings can still search for the items.