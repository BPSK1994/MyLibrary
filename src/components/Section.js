import React from 'react'
import Table from './Table'

const Section = function(
    {
        searchData,
        submit,

        favorite,
        toRead,
        readingNow,
        haveRead,

        removeFavorite,
        removeToRead,
        removeReadingNow,
        removeHaveRead,

        favoriteArray,
        toReadArray,
        readingNowArray,
        haveReadArray,

        category,
        table
        
    }
) {
    

    return(
        <section className = "content-container">
            {submit  && (<Table 
                searchData = {searchData}
                favorite = {favorite}
                toRead = {toRead}
                readingNow = {readingNow}
                haveRead = {haveRead}
                table = {table}/>)
            }

        {/* Favorite Category */}
    
        {category == 5 && 
            (<div className = "category">
                <h1 className = "category-title">Favorite Books</h1> 
                <div className = "book-flex">  
                    {favoriteArray.map(function(item){
                        let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
                        return (
                                <div className = "book-item">
                                    <img src = {thumbnail}></img>
                                    <h4>{item.volumeInfo.title}</h4>
                                    <h5>{item.volumeInfo.authors}</h5>
                                    <h5 className = "remove" onClick = {function(){removeFavorite(item.id)}}>remove</h5>
                                </div>
                            )
                    })}
                </div>
            </div>)
        }

        {/*To read category */}

        {category == 6 && 
            (<div className = "category">
                <h1 className = "category-title">To Read</h1> 
                <div className = "book-flex">  
                    {toReadArray.map(function(item){
                        let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
                        return (
                                <div className = "book-item">
                                    <img src = {thumbnail}></img>
                                    <h4>{item.volumeInfo.title}</h4>
                                    <h5>{item.volumeInfo.authors}</h5>
                                    <h5 className = "remove" onClick = {function(){removeToRead(item.id)}} >remove</h5>
                                </div>
                            )
                    })}
                </div>
            </div>)
        }

         {/*Reading Now category */}

         {category == 7 && 
            (<div className = "category">
                <h1 className = "category-title">Reading Now</h1> 
                <div className = "book-flex">  
                    {readingNowArray.map(function(item){
                        let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
                        return (
                                <div className = "book-item">
                                    <img src = {thumbnail}></img>
                                    <h4>{item.volumeInfo.title}</h4>
                                    <h5>{item.volumeInfo.authors}</h5>
                                    <h5 className = "remove" onClick = {function(){removeReadingNow(item.id)}}>remove</h5>
                                </div>
                            )
                    })}
                </div>
            </div>)
        }

         {/*Have read category */}

         {category == 8 && 
            (<div className = "category">
                <h1 className = "category-title">Have Read</h1> 
                <div className = "book-flex">  
                    {haveReadArray.map(function(item){
                        let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
                        return (
                                <div className = "book-item">
                                    <img src = {thumbnail}></img>
                                    <h4>{item.volumeInfo.title}</h4>
                                    <h5>{item.volumeInfo.authors}</h5>
                                    <h5 className = "remove" onClick = {function(){removeHaveRead(item.id)}}>remove</h5>
                                </div>
                            )
                    })}
                </div>
            </div>)
        }

{category == 9 && <></>}

        </section>
    )
}

export default Section