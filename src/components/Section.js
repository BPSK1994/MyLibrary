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


        {/* Home */}
        {category == 5 && <></>}

        {/* Favorite Category */}
    
        {category == 6 && 
            (<div className = "category">
                <h1 className = "category__title">Favorite Books</h1> 
                <div className = "book book--flex">  
                    {favoriteArray.map(function(item){
                        let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
                        return (
                                <div className = "book-item">
                                    <img className = "book-item__img" src = {thumbnail}></img>
                                    <h4 className = "book-item__title">{item.volumeInfo.title}</h4>
                                    <h5 className = "book-item__authors">{item.volumeInfo.authors}</h5>
                                    <h5 className = "book-item--remove" onClick = {function(){removeFavorite(item.id)}}>remove</h5>
                                </div>
                            )
                    })}
                </div>
            </div>)
        }

        {/*To read category */}

        {category == 7 && 
            (<div className = "category">
                <h1 className = "category__title">To Read</h1> 
                <div className = "book book--flex">  
                    {toReadArray.map(function(item){
                        let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
                        return (
                                <div className = "book-item">
                                    <img className = "book-item__img" src = {thumbnail}></img>
                                    <h4 className = "book-item__title">{item.volumeInfo.title}</h4>
                                    <h5 className = "book-item__authors">{item.volumeInfo.authors}</h5>
                                    <h5 className = "book-item--remove" onClick = {function(){removeToRead(item.id)}} >remove</h5>
                                </div>
                            )
                    })}
                </div>
            </div>)
        }

         {/*Reading Now category */}

         {category == 8 && 
            (<div className = "category">
                <h1 className = "category__title">Reading Now</h1> 
                <div className = "book book--flex">  
                    {readingNowArray.map(function(item){
                        let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
                        return (
                                <div className = "book-item">
                                    <img className = "book-item__img" src = {thumbnail}></img>
                                    <h4 className = "book-item__title">{item.volumeInfo.title}</h4>
                                    <h5 className = "book-item__authors">{item.volumeInfo.authors}</h5>
                                    <h5 className = "book-item--remove" onClick = {function(){removeReadingNow(item.id)}}>remove</h5>
                                </div>
                            )
                    })}
                </div>
            </div>)
        }

         {/*Have read category */}

         {category == 9 && 
            (<div className = "category">
                <h1 className = "category__title">Have Read</h1> 
                <div className = "book--flex">  
                    {haveReadArray.map(function(item){
                        let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
                        return (
                                <div className = "book-item">
                                    <img className = "book-item__img" src = {thumbnail}></img>
                                    <h4 className = "book-item__title">{item.volumeInfo.title}</h4>
                                    <h5 className = "book-item__authors">{item.volumeInfo.authors}</h5>
                                    <h5 className = "book-item--remove" onClick = {function(){removeHaveRead(item.id)}}>remove</h5>
                                </div>
                            )
                    })}
                </div>
            </div>)
        }
        </section>
    )
}

export default Section