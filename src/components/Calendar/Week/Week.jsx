import React from 'react';
import moment from 'moment';
import style from './Week.module.scss';

const Week = ({ weekObj, selectedMonthObj }) => {
  const weekRow = [1, 2, 3, 4, 5, 6, 7];
  
  const weekRowMap = weekRow.map((dayInWeek) => {
    const classes = [];
    const dayInWeekObj = moment(weekObj).isoWeekday(dayInWeek);
    const isCurrentMonth = dayInWeekObj.isSame(selectedMonthObj, 'month');
    const isToday = moment().isSame(dayInWeekObj, 'day');

    if (!isCurrentMonth) classes.push(style.inactive);
    if (isToday) classes.push(style.today);
    if (dayInWeek > 5 && isCurrentMonth && !isToday)
      classes.push(style.weekEnd);

    return (
      <td
        className={classes.length > 0 ? classes.slice(' ') : null}
        key={dayInWeek}>
        {dayInWeekObj.format('D')}
      </td>
    );
  });

  return <tr>{weekRowMap}</tr>;
};

export default Week;
