const booksLoaded = (newBookds) => {
    return {
        type: 'BOOKS_LOADED',
        payload: newBookds
    };
};

export {
    booksLoaded
};