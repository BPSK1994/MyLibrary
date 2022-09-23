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
                     id = "5" 
                     onClick = {function(event){showTable(); categoryId(event.currentTarget.id);}}>
                        Home
                </div>

                <div className = "category__item" 
                     id = "6" 
                     onClick = {function(event){removeTable(); categoryId(event.currentTarget.id);}}>
                        Favorites ({favoriteArray.length})
                </div>

                <div className = "category__item" 
                     id = "7" 
                     onClick = {function(event){removeTable(); categoryId(event.currentTarget.id);}}>
                        To Read ({toReadArray.length})
                </div>

                <div className = "category__item" 
                     id = "8" 
                     onClick = {function(event){removeTable(); categoryId(event.currentTarget.id);}}>
                        Reading Now ({readingNowArray.length})
                </div>

                <div className = "category__item"
                     id = "9" 
                     onClick = {function(event){removeTable(); categoryId(event.currentTarget.id);}}>
                        Have Read ({haveReadArray.length})
                </div>
            </div>
        </aside>
        
    )
}

export default Categories