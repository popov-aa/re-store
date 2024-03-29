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

const fetchBooksOld = (bookstoreService, dispatch) => () => {
    dispatch(bookRequested());
    bookstoreService.getBooks().then((data) => {
        dispatch(booksLoaded(data));
    }).catch((error) => {
        dispatch(booksError(error));
    });
};

const fetchBooks = (bookstoreService) => () => (dispatch) => () => {
    dispatch(bookRequested());
    bookstoreService.getBooks().then((data) => {
        dispatch(booksLoaded(data));
    }).catch((error) => {
        dispatch(booksError(error));
    });
};

const bookAddedToCart = (bookId) => {
    return {
        type: 'BOOK_ADDED_TO_CART',
        payload: bookId
    };
};

const bookRemovedFromCart = (bookId) => {
    return {
        type: 'BOOK_REMOVED_FROM_CART',
        payload: bookId
    };
};

const allBookRemovedFromCart = (bookId) => {
    return {
        type: 'ALL_BOOKS_REMOVED_FROM_CART',
        payload: bookId
    };
};

export {
    fetchBooks,
    bookAddedToCart,
    bookRemovedFromCart,
    allBookRemovedFromCart
};
