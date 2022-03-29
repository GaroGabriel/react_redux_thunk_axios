import React, {useEffect, useState} from 'react';
import './Content_wrapper.scss'
import {Posts,Comments} from "../index";
import {useDispatch, useSelector} from "react-redux";
import {getPosts} from "../../_redux/axios/axios_action";


const ContentWrapper = () => {
    let [activeItemName, setActiveItemName] = useState('')
    let activeItem = useSelector(state => state.menuItemsR.menuItems)
    let activeItemTrue = activeItem.filter(item => item.active)[0].li
    useEffect(() => {
        setActiveItemName(activeItemTrue)
    }, [activeItemTrue])

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getPosts(activeItemName))
    }, [activeItemName])

    let state = useSelector(state => state.axiosR)

    const componentsSwitcher = () =>{
        switch (activeItemName){
            case "Posts":
                return (<Posts posts={state.data}/>)
            case "Comments":
                return (<Comments comments={state.data}/>)
            default:
                return (<Posts posts={state.data}/>)
        }
    }


    return (
        <div className='ContentWrapper'>
            {componentsSwitcher()}

        </div>
    );
};

export default ContentWrapper;
