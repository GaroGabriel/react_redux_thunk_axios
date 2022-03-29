import React from 'react';
import './User.scss'
const User = ({user}) => {

    return (
        <div  className='user'>
            <h2 className='user__name'>{user.name}</h2>
            <div className='user__addressWrapper'>
                <span className='user__address'>CITY:</span>
                <span className='user__city'>
                    {user && user.address.city}
                </span>
                <span className='user__address'>STREET:</span>
                <span className='user__street'>
                    {user && user.address.street}
                </span>
            </div>
        </div>
    );
};

export default User;
