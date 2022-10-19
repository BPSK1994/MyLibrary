const reducer = function(state, action) {

    if(action.type === "SEARCH_DATA") {
        return {...state, searchData: action.payload}
    }

    if(action.type === "DONT_ADD_DUPLICATE") {
        return ({...state});
    };

    if(action.type === "ADD_FAVORITE_BOOK") {
        const updateArray = [...state.favoriteArray, action.payload];
        return {...state,favoriteArray: updateArray};
    }

    if(action.type === "ADD_TO_READ_BOOK") {
        const updateArray = [...state.toReadArray, action.payload];
        return {...state, toReadArray: updateArray};
    }

    if(action.type === "ADD_READING_NOW_BOOK") {
        const updateArray = [...state.readingNowArray, action.payload];
        return {...state, readingNowArray: updateArray};
    }

    if(action.type === "ADD_HAVE_READ_BOOK") {
        const updateArray = [...state.haveReadArray, action.payload];
        return {...state, haveReadArray: updateArray};
    }

    if(action.type === "REMOVE_FAVORITE") {
        const updateArray = state.favoriteArray.filter(function(item) {
            return item.id !== action.payload;
        });
        return {...state, favoriteArray: updateArray}
    }

    if(action.type === "REMOVE_TO_READ") {
        const updateArray = state.toReadArray.filter(function(item) {
            return item.id !== action.payload;
        });
        return {...state, toReadArray: updateArray}
    }

    if(action.type === "REMOVE_READING_NOW") {
        const updateArray = state.readingNowArray.filter(function(item) {
            return item.id !== action.payload;
        });
        return {...state, readingNowArray: updateArray}
    }

    if(action.type === "REMOVE_HAVE_READ") {
        const updateArray = state.haveReadArray.filter(function(item) {
            return item.id !== action.payload;
        });
        return {...state, haveReadArray: updateArray}
    }

    if(action.type === "DONT_SHOW_TABLE") {
        return ({...state, table: false});
    }

    if(action.type === "SHOW_TABLE") {
        return ({...state, table: true});
    }

    if(action.type === "CATEGORY_ID") {
        return ({...state, categoryId: action.payload});
    }

    if(action.type === "SUBMIT_TRUE") {
        return ({...state, submit: true});
    }

    if(action.type === "SUBMIT_FALSE") {
        return ({...state, submit: false});
    }

};


export default reducer;