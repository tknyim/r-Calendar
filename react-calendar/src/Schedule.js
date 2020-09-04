import React, {useState} from 'react';
import Todo from './Todo';


const Schedule = ({toDos, setToDos, todoDate, toggleOverlay, format, currentDate}) => {

    const [listToDo, setListToDo] = useState('');
    const dayFormat ="MMMM d yyyy"
    const addItem = text => {
        const newItems = [...toDos, {text, todoDate}];
        setToDos(newItems);
    };

    const completedItem = index => {
        const newItems = [...toDos];
        newItems[index].isCompleted = true;
        setToDos(newItems);
    };

    const removeItem = index => {
        const newItems = [...toDos];
        newItems.splice(index, 1);
        setToDos(newItems);
    };

    const handleToggle = evt => {
        toggleOverlay(false)
    };

    const handleSubmit = evt => {
        evt.preventDefault();
        if (!listToDo) return;
        addItem(listToDo);
        setListToDo("");
    };

    const todaysTodos = toDos.filter(todo => format(todo.todoDate, dayFormat) === format(todoDate, dayFormat))

    return (
        <div className="Overlay">
            <div className="todo-list">
                <button className="close-todo" onClick={handleToggle} >Close</button>
                <br></br>
                <h3 className="todo-date">{format(todoDate,dayFormat)}</h3>
                <h4 className="todo-header" >Add Task(s): </h4>
                <form onSubmit={handleSubmit}>
                    <input
                        className="input"
                        type="text"
                        placeholder='Input here for the task. Press "enter/return" to submit.'
                        value={listToDo}
                        onChange={evt => setListToDo(evt.target.value)}
                    />
                </form>
                <br/>
                <h4 className="todo-header" >Needed Task(s): </h4>
                {todaysTodos.map((todo, index) => (
                    <Todo
                        key={index}
                        idx={index}
                        todo={todo}
                        complete={completedItem}
                        remove={removeItem}
                    />
                ))}
            </div>
        </div>
    );
};

export default Schedule;