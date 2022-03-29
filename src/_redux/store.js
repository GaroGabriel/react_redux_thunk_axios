import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose()

const root = combineReducers({

})

export const store = createStore(root,composeEnhancers(applyMiddleware(thunk)))
