import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunk from "redux-thunk";
import {menuItemsR} from "./menuItems/menuItem_reducer";
import {axiosR} from "./axios/axiosR";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose()

const root = combineReducers({
    menuItemsR,
axiosR
})

export const store = createStore(root,composeEnhancers(applyMiddleware(thunk)))
