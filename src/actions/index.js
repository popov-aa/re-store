const bookRequested = () => {
    return {
        type: 'FETCH_BOOKS_REQUEST'
    };
};

const booksLoaded = (newBookds) => {
    return {
        type: 'FETCH_BOOKS_SUCCESS',
        payload: newBookds
    };
};

const booksError = (error) => {
    return {
        type: 'FETCH_BOOKS_FAILURE',
        payload: error
    };
};

const fetchBooks = (bookstoreService, dispatch) => () => {
    dispatch(bookRequested());
    bookstoreService.getBooks().then((data) => {
        dispatch(booksLoaded(data));
    }).catch((error) => {
        dispatch(booksError(error));
    });
}

export {
    fetchBooks
};
