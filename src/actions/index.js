const booksLoaded = (newBookds) => {
    return {
        type: 'BOOKS_LOADED',
        payload: newBookds
    };
};

const bookRequested = () => {
    return {
        type: 'BOOKS_REQUESTED'
    };
};

const booksError = (error) => {
    return {
        type: 'BOOKS_ERROR',
        payload: error
    };
};

export {
    booksLoaded,
    bookRequested,
    booksError
};
