import uniqid from 'uniqid';
import {constants} from "./menuItem__action";
const initialState = {
    menuItems:[
        {id:uniqid('menuItem'),li:'Posts',active:true},
        {id:uniqid('menuItem'),li:'Comments',active:false},
        {id:uniqid('menuItem'),li:'Albums',active:false},
        {id:uniqid('menuItem'),li:'Photos',active:false},
        {id:uniqid('menuItem'),li:'Todos',active:false},
        {id:uniqid('menuItem'),li:'Users',active:false},
    ]
}

export const menuItemsR = (state=initialState,action)=>{
    switch (action.type){
        case constants.SET__ACTIVE:
            return {
                ...state,
                menuItems: state.menuItems.map(el=>{
                    el.active = el.id === action.payload.id;
                    return el
                })
            }
        default:
            return state
    }
}
