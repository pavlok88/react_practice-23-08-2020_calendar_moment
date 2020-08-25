import React from 'react';
import moment from 'moment';
import style from './CurrentDay.module.scss';

const CurrentDay = ({resetMonth}) => {
  const dayOfWeek = moment().format('dddd');
  const dayNumber = moment().format('D');
  return (
    <div className={style.currentDay}
    onClick={resetMonth}>
      <div><p>{dayOfWeek}</p></div>
      <div><p>{dayNumber}</p></div>
    </div>
  );
};

export default CurrentDay;
