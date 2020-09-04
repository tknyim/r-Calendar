import React, { useState } from "react";
import './App.css';


// Components
import Header from './Header';
import Days from './Days';
import Cells from './Cells';
import Schedule from './Schedule';

// Dependency from date-fns
import format from "date-fns/format";
import addMonths from "date-fns/addMonths";
import subMonths from "date-fns/subMonths";
import startOfWeek from "date-fns/startOfWeek";
import endOfWeek from "date-fns/endOfWeek";
import addDays from "date-fns/addDays";
import startOfMonth from "date-fns/startOfMonth";
import endOfMonth from "date-fns/endOfMonth";
import isSameDay from "date-fns/isSameDay";
import isSameMonth from "date-fns/isSameMonth";
import toDate from "date-fns/toDate";


const App = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [showOverlay, setShowOverLay] = useState(false);
  const [toDos, setToDos] = useState([]);
  const dateFormat = "MMMM d yyyy"
  const [todoDate, setTodoDate] = useState(new Date(),dateFormat);


  const nextMonth = () => {
    setCurrentDate(addMonths(currentDate, 1));
  };
  const prevMonth = () => {
    setCurrentDate(subMonths(currentDate, 1));
  };

  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(monthStart);

  
  // const todoDate = format(currentDate,dateFormat)

  return (
    <div className="App" >
      <div className="calendar">
        <Header 
          currentDate={currentDate}
          prevMonth={prevMonth}
          nextMonth={nextMonth}
          format={format}
        />
        <Days 
          startDate={startOfWeek(currentDate)}
          format={format}
          addDays={addDays}
        />
        {/* {taskIn && */}
          <Cells 
            format={format}
            monthStart={monthStart}
            startDate={startOfWeek(monthStart)}
            endDate={endOfWeek(monthEnd)}
            isSameDay={isSameDay}
            isSameMonth={isSameMonth}
            addDays={addDays}
            toDate={toDate}
            toDos={toDos}
            todoDate={todoDate}
            setTodoDate={setTodoDate}      
            toggleOverlay={setShowOverLay}
          />
        {/* } */}
      </div>
      {showOverlay && 
        <Schedule 
          toDos={toDos}
          setToDos={setToDos}
          todoDate={todoDate}      
          toggleOverlay={setShowOverLay}
          format={format}
          currentDate={currentDate}
        />
      }
    </div>
  );
};

export default App;
