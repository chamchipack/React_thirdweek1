import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {createBrowserHistory} from 'history';
import {connectRouter} from 'connected-react-router'
import User from './user';
import Post from './post';
// 여러개의 리듀서를 가져올 수 있다.


export const history = createBrowserHistory();


const rootReducer = combineReducers({
    user : User,
    post : Post,
    router : connectRouter(history),
});
const middlewares = [thunk.withExtraArgument({history:history})];
// 현재 환경을 알려줌 개발환경, 배포환경 등
const env = process.env.NODE_ENV;
if(env === 'development'){
    const {logger} = require('redux-logger');
    middlewares.push(logger);
}
const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;
const enhancer = composeEnhancers(applyMiddleware(...middlewares));

let store = (initialStore) => createStore(rootReducer, enhancer);

export default store();

