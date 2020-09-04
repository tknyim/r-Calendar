import React from 'react';

const Header = ({currentDate, prevMonth, nextMonth, format}) => {
    const dateFormat = "MMMM yyyy";

    return (
        <div className="header row flex-middle">
            <div className="column col-start">
                <div className="icon" onClick={prevMonth}>
                    chevron_left
                </div>
            </div>
            <div className="column col-center">
                <span>{format(currentDate, dateFormat)}</span>
            </div>
            <div className="column col-end">
                <div className="icon" onClick={nextMonth}>
                    chevron_right
                </div>
            </div>
            
            
        </div>
    );
};

export default Header;