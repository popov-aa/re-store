const initialState = {
    books: [],
    loading: true,
    error: null,
    cartItems: [],
    orderTotal: 220
};

const updateCartItems = (cartItems, item, idx) => {
    if (idx === -1) {
        return [
            ...cartItems,
            item
        ];
    }
    return [
        ...cartItems.slice(0, idx),
        item,
        ...cartItems.slice(idx + 1)
    ];
}

const updateCartItem = (book, item = {}) => {
    const {
        id = book.id,
        count = 0,
        title = book.title,
        total = 0
    } = item;
    return {
        id,
        title,
        count: count + 1,
        total: total + book.price
    }
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_BOOKS_REQUEST': {
            return {
                ...state,
                books: [],
                loading: true,
                error: null
            }
        }
        case 'FETCH_BOOKS_SUCCESS':
            return {
                ...state,
                books: action.payload,
                loading: false,
                error: null
            };
        case 'FETCH_BOOKS_FAILURE':
            return {
                ...state,
                books: [],
                loading: false,
                error: action.payload
            };
        case 'BOOK_ADDED_TO_CART':
            const bookId = action.payload;
            const book = state.books.find((book) => book.id === bookId);
            const prevBookIdx = state.cartItems.findIndex((cartItem) => cartItem.id === bookId);
            const item = state.cartItems[prevBookIdx];
            return {
                ...state,
                cartItems: updateCartItems(state.cartItems, updateCartItem(book, item), prevBookIdx)
            };
        default:
            return state;
    }
}

export default reducer;
