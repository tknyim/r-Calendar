import React,{useState} from 'react';
import IndivCell from './IndivCell';

const Cells = ({format, monthStart, startDate, endDate, isSameDay ,isSameMonth, addDays, toDate, todoDate, setTodoDate, toggleOverlay, toDos}) => {
    const [selectedDate, setSelectedDate] = useState(new Date())

    const dateFormat ="d";
    const rows = [];

    let days = [];
    let day = startDate;
    let formattedDate = "";
    

    const onDateClick = onDay => {
        setTodoDate(onDay)
        setSelectedDate(onDay)
        toggleOverlay(true)
    };

    while (day <= endDate) {
        for (let i = 0; i < 7; i++) {
            formattedDate = format(day, dateFormat);
            const cloneDay = day;
            days.push(
                <IndivCell 
                    key={i}
                    isSameMonth={isSameMonth}
                    day={day}
                    monthStart={monthStart}
                    isSameDay={isSameDay}
                    selectedDate={selectedDate}
                    onDateClick={onDateClick}
                    toDate={toDate}
                    cloneDay={cloneDay}
                    formattedDate={formattedDate}
                    toDos={toDos}
                    format={format}
                    todoDate={todoDate}      
                />
            );
            day = addDays(day, 1);
        };
        rows.push(
            <div className="row" key={day}> {days} </div>
        );
        days = [];
    };

    return (
        <div>
            <div className="body" >{rows}</div>
        </div>
    );
};

export default Cells;