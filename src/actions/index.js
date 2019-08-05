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

export {
    booksLoaded,
    bookRequested
};
