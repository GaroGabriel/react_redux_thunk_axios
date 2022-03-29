import React from 'react';
import './MenuBar.scss'

const MenuBar = () => {
    let menuItems = ['sss','dddd','eeee']
    return (
        <div className='menu'>
            <ul className='menu__list'>
                {menuItems.map(item=>{
                    return(
                        <li className='menu__item'>{item}</li>
                        )
                })}
            </ul>
        </div>
    );
};

export default MenuBar;
