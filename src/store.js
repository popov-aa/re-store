import {createStore, compose, applyMiddleware} from 'redux';
import reducer from "./reducers";

const logMiddleware = (store) => (next) => (action) => {
    console.log(action.type);
    return next(action);
};

const stringMiddleware = (store) => (next) => (action) => {
    if (typeof action === 'string') {
        return next({
            type: action
        });
    }
    return next(action);
};

const logEnhancer = (createStore) => (...args) => {
    const store = createStore(...args);
    const originalDispatch = store.dispatch;
    store.dispatch = (action) => {
        console.log(action.type);
        return originalDispatch(action);
    }
    return store;
};

const stringEnhancer = (createStore) => (...args) => {
    const store = createStore(...args);
    const originalDispatch = store.dispatch;
    store.dispatch = (action) => {
        if (typeof action === 'string') {
            return originalDispatch({type: action});
        }
        return originalDispatch(action);
    }
    return store;
};


// const store = createStore(reducer, compose(stringEnhancer, logEnhancer));
const store = createStore(reducer, applyMiddleware(stringMiddleware, logMiddleware));
store.dispatch('HELLO_WORLD');
export default store;