import React from 'react';
import Day from '../Day/Day';

const Week = ({ weekNumber, selectedMonthObj }) => {
  //console.log(weekNumber)
  const weekRow = () => {
    const weekArr = [];
    for (let d = 1; d <= 7; d++) {
      weekArr.push(
        <Day
          key={d}
          selectedMonthObj={selectedMonthObj}
          weekNumber={weekNumber}
          dayInWeek={d}
        />
      );
    }
    return weekArr;
  };

  return <tr>{weekRow()}</tr>;
};

export default Week;
