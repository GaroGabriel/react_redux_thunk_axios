import React from 'react';
import './Todo.scss'

const Todo = ({todo}) => {

    return (
        <div className='todo'>
            <h4 className='todo__title'>{todo.title}</h4>
            <input
                className='todo__checkbox'
                type="checkbox"
                onChange={()=>{}}
                checked={todo.completed}/>
        </div>
    );
};

export default Todo;
