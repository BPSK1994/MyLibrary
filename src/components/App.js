import React from 'react';
import Header from './Header';
import Categories from './Categories';
import Section from './Section';


const favoriteLocalStorage = function() {
    let favoriteArray = localStorage.getItem("favoriteArray");
    if(favoriteArray) {
        return (favoriteArray = JSON.parse(favoriteArray)); 
    } else {
        return [];
    }
}

const toReadLocalStorage = function() {
    let toReadArray = localStorage.getItem("toReadArray");
    if(toReadArray) {
        return (toReadArray = JSON.parse(toReadArray)); 
    } else {
        return [];
    }
}


const readingNowLocalStorage = function() {
    let readingNowArray = localStorage.getItem("readingNowArray");
    if(readingNowArray) {
        return (readingNowArray = JSON.parse(readingNowArray)); 
    } else {
        return [];
    }
}


const haveReadLocalStorage = function() {
    let haveReadArray = localStorage.getItem("haveReadArray");
    if(haveReadArray) {
        return (haveReadArray = JSON.parse(haveReadArray)); 
    } else {
        return [];
    }
}

const App = function() {
    

    const[input, setInput] = React.useState(""); 
    const[submit, setSubmit] = React.useState(false);
    const[searchData, setSearchData] = React.useState([]);
    

    const[favoriteArray, setFavoriteArray] = React.useState(favoriteLocalStorage);       /* Books "favorite" array */
    const[toReadArray, setToReadArray] = React.useState(toReadLocalStorage);             /* Books "to read" array */
    const[readingNowArray, setReadingNowArray] = React.useState(readingNowLocalStorage); /* Books "reading now" array */
    const[haveReadArray, setHaveReadArray] = React.useState(haveReadLocalStorage);       /* Books "have read" array */

    const[category, setCategory] = React.useState();
    const[table, setTable] = React.useState(true);
    

   
    
    React.useEffect(function() {
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${input}&key=AIzaSyBt2JXq8_CGmDRvR3a5qtXxKqbjMY9dp6E&maxResults=40`)
        .then(res => res.json())
        .then(data => setSearchData(data.items))
         }, [submit]);


    // Local storage
    
    React.useEffect(function() {
        localStorage.setItem("favoriteArray", JSON.stringify(favoriteArray))
    }, [favoriteArray])
        

    React.useEffect(function() {
        localStorage.setItem("toReadArray", JSON.stringify(toReadArray))
    }, [toReadArray])


    React.useEffect(function() {
        localStorage.setItem("readingNowArray", JSON.stringify(readingNowArray))
    }, [readingNowArray])


    React.useEffect(function() {
        localStorage.setItem("haveReadArray", JSON.stringify(haveReadArray))
    }, [haveReadArray])
        
        
    const handleSubmit = function(event) {
        event.preventDefault();
        setSubmit(true);
    }

    const handleChange = function(event) {
        setInput(event.target.value);
        if(input === "") {
            setSubmit(false);
        }
    }
        
    // Add books to Favorite books array
    const favorite = function(book) {
        const duplicateBook = favoriteArray.find(function(item) {
            return item.id === book.id;
        })
      
        if(duplicateBook) {
            setFavoriteArray([...favoriteArray])
        } else {
            setFavoriteArray([...favoriteArray, book]);
        }    
    }

            
    // Add books to "to read" array    
    const toRead = function(book) {
        const duplicateBook = toReadArray.find(function(item) {
            return item.id === book.id;
        });

        if(duplicateBook) {
            setToReadArray([...toReadArray]);    
        } else {
            setToReadArray([...toReadArray, book]);
        }  
    }


    // Add books to "reading now" array    
    const readingNow = function(book) {
        const duplicateBook = readingNowArray.find(function(item) {
            return item.id === book.id;
        });

        if(duplicateBook) {
            setReadingNowArray([...readingNowArray]);
        } else {
            setReadingNowArray([...readingNowArray, book]);
        }
    }

    

    // Add books to "have read" array    
    const haveRead = function(book) {
        const duplicateBook = haveReadArray.find(function(item) {
            return item.id === book.id;
        });

        if(duplicateBook) {
            setHaveReadArray([...haveReadArray]);
        } else {
            setHaveReadArray([...haveReadArray, book]);
        }
    }


    // Remove books from 'favorite' books array

    const removeFavorite = function(id) {
        setFavoriteArray(favoriteArray.filter(function(item) {
            return (item.id !== id)
        }))
    }


    // Remove books from 'to read' books array
    const removeToRead = function(id) {
        setToReadArray(toReadArray.filter(function(item) {
            return (item.id !== id)
        }))
    }




    // Remove books from 'reading now' books array
    const removeReadingNow = function(id) {
        setReadingNowArray(readingNowArray.filter(function(item) {
            return (item.id !== id)
        }))
    }

    

    // Remove books from 'have read' books array
    const removeHaveRead = function(id) {
        setHaveReadArray(haveReadArray.filter(function(item) {
            return (item.id !== id)
        }))
    }



    const categoryId = function(id) {
        setCategory(id);
        }
         

    const removeTable = function() {
        setTable(false);
        }

    
    const showTable = function() {
        setTable(true);
    }
  

        
    return(
        <div className = "container">
            <div className = "sidebar-container">
                <Header />
                <div className = "form-container">
                    <form className = "form-control" onSubmit = {handleSubmit}>
                        <input className = "form-input"
                            type = "text"
                            value = {input}
                            placeholder = "Search for books..."
                            onChange = {function(event) {handleChange(event)}}
                            />
                        <button className = "search-btn"
                                type = "submit">Search
                        </button>
                    </form>
                </div>
                
                <Categories
                
                    favoriteArray = {favoriteArray}
                    toReadArray = {toReadArray}
                    readingNowArray = {readingNowArray}
                    haveReadArray = {haveReadArray}

                    removeTable = {removeTable}
                    showTable = {showTable}
                    categoryId = {categoryId}
                    />
            </div>

            <div className = "main-container">
                <Section
                    searchData = {searchData}
                    submit = {submit}

                    favorite = {favorite}
                    toRead = {toRead}
                    readingNow = {readingNow}
                    haveRead = {haveRead}

                    removeFavorite = {removeFavorite}
                    removeToRead = {removeToRead}
                    removeReadingNow = {removeReadingNow}
                    removeHaveRead = {removeHaveRead}

                    favoriteArray = {favoriteArray}
                    toReadArray = {toReadArray}
                    readingNowArray = {readingNowArray}
                    haveReadArray = {haveReadArray}

                    category = {category}
                    table = {table}
                    
                    />
            </div>
        </div>
    )
}

export default App