// bước 2 là truyền cái reducers tổng hay còn gọi là combineReducer vào store
import {createStore, compose, applyMiddleware} from 'redux';
import rootReducers from './../reducers/index';
import thunk from 'redux-thunk';
const composeEnhancers = process.env.NODE_ENV !== 'production' &&
typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    shouldHotReload : false,
})
: compose;
const configureStore = () => {
    const middlewares = [thunk];
    const enhancers = [applyMiddleware(...middlewares)];
    const store = createStore(rootReducers, composeEnhancers(...enhancers));
    return store;
};
export default configureStore;