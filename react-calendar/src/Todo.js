import React from 'react';

const Todo = ({idx, todo, complete, remove}) => {
    return (
        <div 
            className="todo" 
            style={{
                color: todo.isCompleted ? "rgb(46, 190, 46)" : ""
            }}
        >
            {todo.text}
            <div className="todo-btns">
                <button className="complete-b" onClick={()=> complete(idx)}>✓</button>
                <button className="remove-b" onClick={()=> remove(idx)}>✗</button>
            </div>
        </div>
    );
};

export default Todo;