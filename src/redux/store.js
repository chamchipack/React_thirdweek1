import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import widget from './widget'
// 여러개의 리듀서를 가져올 수 있다.

const middlewares = [thunk];
const rootReducer = combineReducers({widget});
const enhancer = applyMiddleware(...middlewares);

const store = createStore(rootReducer, enhancer);

export default store;