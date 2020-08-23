import React from 'react';
import moment from 'moment';
import style from './Week.module.scss'

const Week = ({ weekNumber }) => {
  const getWeek = (num) => {
    const weekArr = [];
    for (let d = 0; d < 7; d++) {
      weekArr.push(<td key={d}>{moment(num, 'W').add(d, 'day').format('D')}</td>);
     // console.log(weekArr);
    }
    return weekArr;
  };

  return <tr className={style.row}>{getWeek(weekNumber)}</tr>;
};

export default Week;
