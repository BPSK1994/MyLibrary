import React, { createContext } from 'react';
import Header from './Header';
import Categories from './Categories';
import Section from './Section';
import reducer from './reducer';


 export const appContext = createContext();

/* LOCAL STORAGE */
let favoriteLocalStorage = JSON.parse(localStorage.getItem("favoriteArray")) || [];
let toReadLocalStorage = JSON.parse(localStorage.getItem("toReadArray")) || [];
let readingNowLocalStorage = JSON.parse(localStorage.getItem("readingNowArray")) || [];
let haveReadLocalStorage = JSON.parse(localStorage.getItem("haveReadArray")) || [];


const defaultState = {
    searchData: [],
    favoriteArray: favoriteLocalStorage,
    toReadArray: toReadLocalStorage,
    readingNowArray: readingNowLocalStorage,
    haveReadArray: haveReadLocalStorage,
    categoryId: null,
    table: true,
    submit: false
}

const App = function() {
    
    const [input, setInput] = React.useState(""); 
    const [state, dispatch] = React.useReducer(reducer, defaultState);

    /* USE EFFECT */

    React.useEffect(function() {
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${input}&key=AIzaSyA0fW77QbUTmr1v98shRdDHxpl9AG7cpzI&maxResults=40`)
        .then(function(response) {
           return response.json();
        })
        .then(function(data) {
            dispatch({type: "SEARCH_DATA", payload: data.items})
        })}, [state.submit]);

    
    React.useEffect(function() {
        localStorage.setItem("favoriteArray", JSON.stringify(state.favoriteArray))
    }, [state.favoriteArray]);

    React.useEffect(function() {
        localStorage.setItem("toReadArray", JSON.stringify(state.toReadArray))
    }, [state.toReadArray]);

    React.useEffect(function() {
        localStorage.setItem("readingNowArray", JSON.stringify(state.readingNowArray))
    }, [state.readingNowArray]);

    React.useEffect(function() {
        localStorage.setItem("haveReadArray", JSON.stringify(state.haveReadArray))
    }, [state.haveReadArray]);



    /* FUNCTIONS */

    /* HANDLE SUBMIT FUNCTION */
    const handleSubmit = function(event) {
        event.preventDefault();
        dispatch({type: "SUBMIT_TRUE"});
    }

    /* HANDLE CHANGE FUNCTION */
    const handleChange = function(event) {
        setInput(event.target.value);
        if(input === "") {
            dispatch({type: "SUBMIT_FALSE"});
        }
    }
        
    // ADD BOOKS TO "FAVORITE BOOKS" ARRAY
    const favorite = function(book) {
        const duplicateBook = state.favoriteArray.find(function(item) {
            return item.id === book.id;
        })
      
        if(duplicateBook) {
            dispatch({type: "DONT_ADD_DUPLICATE"});
        } else {
            dispatch({type: "ADD_FAVORITE_BOOK", payload: book });
        }    
    }

            
    // ADD BOOKS TO "TO READ" ARRAY  
    const toRead = function(book) {
        const duplicateBook = state.toReadArray.find(function(item) {
            return item.id === book.id;
        });

        if(duplicateBook) {
           dispatch({type: "DONT_ADD_DUPLICATE"});   
        } else {
            dispatch({type: "ADD_TO_READ_BOOK", payload: book});
        }  
    }


    // ADD BOOKS TO "READING NOW BOOKS" ARRAY
    const readingNow = function(book) {
        const duplicateBook = state.readingNowArray.find(function(item) {
            return item.id === book.id;
        });

        if(duplicateBook) {
            dispatch({type: "DONT_ADD_DUPLICATE"})
        } else {
            dispatch({type: "ADD_READING_NOW_BOOK", payload: book})
        }
    }

    
    // ADD BOOKS TO "HAVE READ" ARRAY    
    const haveRead = function(book) {
        const duplicateBook = state.haveReadArray.find(function(item) {
            return item.id === book.id;
        });

        if(duplicateBook) {
            dispatch({type: "DONT_ADD_DUPLICATE"})
        } else {
            dispatch({type: "ADD_HAVE_READ_BOOK", payload: book})
        }
    }


    // REMOVE BOOKS FROM 'FAVORITE' BOOKS ARRAY

    const removeFavorite = function(id) {
        dispatch({type: "REMOVE_FAVORITE", payload: id});    
    };

    // REMOVE BOOKS FROM 'TO READ' BOOKS ARRAY
    const removeToRead = function(id) {
        dispatch({type: "REMOVE_TO_READ", payload: id});
    };

    // REMOVE BOOKS FROM 'READING NOW' BOOKS ARRAY
    const removeReadingNow = function(id) {
          dispatch({type: "REMOVE_READING_NOW", payload: id});
    };

    // REMOVE BOOKS FROM 'HAVE READ' BOOKS ARRAY
    const removeHaveRead = function(id) {
        dispatch({type: "REMOVE_HAVE_READ", payload: id});
    };


    const categoryId = function(id) {
        dispatch({type: "CATEGORY_ID", payload: id});
        };
         

    const removeTable = function() {
        dispatch({type: "DONT_SHOW_TABLE"});
        };

    const showTable = function() {
        dispatch({type: "SHOW_TABLE"});
    };
  
        
    return(
        <appContext.Provider value = {{favorite, toRead, haveRead, readingNow, searchData: state.searchData, table: state.table}}>
            <div className = "container">
                <div className = "sidebar-container">
                    <Header />
                    <div className = "form">
                        <form className = "form__control" onSubmit = {handleSubmit}>
                            <input className = "form__input"
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
                    
                        favoriteArray = {state.favoriteArray}
                        toReadArray = {state.toReadArray}
                        readingNowArray = {state.readingNowArray}
                        haveReadArray = {state.haveReadArray}

                        removeTable = {removeTable}
                        showTable = {showTable}
                        categoryId = {categoryId}
                        />
                </div>

                <div className = "main-container">
                    <Section
                        submit = {state.submit}

                        removeFavorite = {removeFavorite}
                        removeToRead = {removeToRead}
                        removeReadingNow = {removeReadingNow}
                        removeHaveRead = {removeHaveRead}

                        favoriteArray = {state.favoriteArray}
                        toReadArray = {state.toReadArray}
                        readingNowArray = {state.readingNowArray}
                        haveReadArray = {state.haveReadArray}

                        category = {state.categoryId}
                        />
                </div>
            </div>
        </appContext.Provider>
    );
};

export default App