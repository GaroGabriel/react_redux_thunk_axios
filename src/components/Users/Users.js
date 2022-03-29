import React from 'react';
import './Users.scss'

import User from "./User/User";

const Users = ({users}) => {

    return (
        <div className='users'>
            {users[0].address && users.map(user => {
                return (
                    <User
                        user={user}
                        key={user.id}
                    />
                )
            })
            }
        </div>
    );
};

export default Users;
