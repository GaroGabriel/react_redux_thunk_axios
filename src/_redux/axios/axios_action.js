import axios from "axios";

export const constatnce={
    GET_POSTS:"GET_POSTS",
}
const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});

export const getPosts=(url)=>async (dispatch)=>{
    try{
        const response = await instance(url||'Posts')
        const responseData = await response.data
        dispatch({
            type:constatnce.GET_POSTS,
            payload:{
                url:url,
                responseData
            }
        })
    }
    catch(e){
        console.log(e)
    }
}
