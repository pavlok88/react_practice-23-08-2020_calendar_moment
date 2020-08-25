import React from 'react';
import moment from 'moment';
import style from './Day.module.scss';

const Day = ({ dayInWeek, weekNumber, selectedMonthObj }) => {
  const classes = [];
  const dayInWeekObj = moment(selectedMonthObj).isoWeek(weekNumber).isoWeekday(dayInWeek);
  const isCurrentMonth = dayInWeekObj.month() === selectedMonthObj.month();

  if (!isCurrentMonth) classes.push(style.inactive);
  if (dayInWeekObj.format('YYYY MM DD') === moment().format('YYYY MM DD')) classes.push(style.today);
  if (dayInWeek > 5 && isCurrentMonth) classes.push(style.weekEnd);

  return (
    <td className={classes.length > 0 ? classes.slice(' ') : null}>
      {dayInWeekObj.format('D')}
    </td>
  );
};

export default Day;
