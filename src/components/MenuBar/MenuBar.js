import React, {useReducer} from 'react';
import './MenuBar.scss'
import {useDispatch, useSelector} from "react-redux";
import {setActive} from "../../_redux/menuItems/menuItem__action";

const MenuBar = () => {
    const menuItems = useSelector(state => state.menuItemsR.menuItems)
    const dispatch = useDispatch()
    return (
        <div className='menu'>
            <ul className='menu__list'>
                {menuItems.map(item => {
                    return (
                        <li
                            key={item.id}
                            onClick={()=>dispatch(setActive(item.id))}
                            className={`${item.active? 'menu__item-active':''} menu__item`}
                        >
                            {item.li}
                        </li>
                    )
                })}
            </ul>
        </div>
    );
};

export default MenuBar;
