import React from 'react';
import './Todos.scss'

import Todo from "./Todo/Todo";

const Todos = ({todos}) => {

    return (
        <div className='todos'>
            {todos.map(todo => {
                return (
                    <Todo
                        todo={todo}
                        key={todo.id}
                    />
                )
            })
            }
        </div>
    );
};

export default Todos;
