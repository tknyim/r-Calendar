import React from 'react';

const IndivCell = ({isSameDay, isSameMonth, day, selectedDate, onDateClick, toDate, cloneDay, formattedDate, monthStart, toDos, format, todoDate}) => {
    const dayFormat = "MMMM d yyyy";

    const todaysTodos = toDos.filter(todo => format(todo.todoDate, dayFormat) === format(cloneDay, dayFormat));

    return (
        <div
            className={`column cell ${!isSameMonth(day, monthStart)
                ? "disabled" : isSameDay(day, selectedDate)
                    ? "selected" : ""}`}
            key={day}
            onClick={() => onDateClick(toDate(cloneDay))}
        >
            <span className="number">{formattedDate}</span>
            {todaysTodos.length > 0 &&
            <p className="active-task">◉</p>
            }
            <span className="bg">{formattedDate}</span>
        </div>
    );
};

export default IndivCell;