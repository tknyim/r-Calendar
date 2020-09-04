import React from 'react';

const Days = ({startDate, format, addDays}) => {
    const dateFormat = "E";
    const days = [];

    for (let i = 0; i < 7; i++) {
        days.push(
            <div className="column col-center" key={i}>
                {format(addDays(startDate, i), dateFormat)}
            </div>
        )
    }

    return (
        <div className="days row">{days}</div>
    )
};

export default Days;