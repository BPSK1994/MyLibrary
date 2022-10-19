import React from 'react'

const Categories = function(
    {
        favoriteArray,
        toReadArray,
        readingNowArray,
        haveReadArray,

        showTable,
        removeTable,
        categoryId
    }
   
) {
    
    return(
        <aside className = "category-container">
            <div className = "categories">
                <div className = "category__home"
                     id = "category-home" 
                     onClick = {function(event){showTable(); categoryId(event.currentTarget.id);}}>
                        Home
                </div>

                <div className = "category__item" 
                     id = "category-favorites" 
                     onClick = {function(event){removeTable(); categoryId(event.currentTarget.id);}}>
                        Favorites ({favoriteArray.length})
                </div>

                <div className = "category__item" 
                     id = "category-toRead" 
                     onClick = {function(event){removeTable(); categoryId(event.currentTarget.id);}}>
                        To Read ({toReadArray.length})
                </div>

                <div className = "category__item" 
                     id = "category-readingNow" 
                     onClick = {function(event){removeTable(); categoryId(event.currentTarget.id);}}>
                        Reading Now ({readingNowArray.length})
                </div>

                <div className = "category__item"
                     id = "category-haveRead" 
                     onClick = {function(event){removeTable(); categoryId(event.currentTarget.id);}}>
                        Have Read ({haveReadArray.length})
                </div>
            </div>
        </aside>
        
    )
}

export default Categories