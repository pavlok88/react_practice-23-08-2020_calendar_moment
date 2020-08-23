import React from 'react';
import moment from 'moment';
import Week from '../Week/Week';

const Calendar = ({monthNumber}) => {
  const daysInMonth = moment(monthNumber, 'M').endOf('month').format('D');
  //console.log(daysInMonth);
  const startWeek = moment(monthNumber, 'M').startOf('month').format('W');
  //console.log(startWeek);
  const endWeek = moment(monthNumber, 'M').endOf('month').format('W');
  //console.log(endWeek);

  const weekList = (start = startWeek, end = endWeek) => {
    const arr = [];
    for (let w = start; w <= end; w++) {
      arr.push(<Week weekNumber={w} key={w} />);
    }
    console.log(arr);
    return arr;
  };

  return <table>{weekList()}</table>;
};

export default Calendar;
