import {constatnce} from "./axios_action";

let initialState = {
    data:[],

}

export const axiosR = (state=initialState,action)=>{

    switch (action.type){
        case constatnce.GET_POSTS:

            return {
                ...state,
                data:action.payload.responseData
            }
        default:
            return state
    }

}
