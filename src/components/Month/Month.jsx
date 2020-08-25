import React from 'react';
import moment from 'moment';
import Week from '../Week/Week';
import './Month.module.scss';

const Month = ({ selectedMonthObj }) => {
  const startWeek = +moment(selectedMonthObj).startOf('month').format('W');
  const endWeek = +moment(selectedMonthObj).endOf('month').format('W');
  console.log(startWeek);
  console.log(endWeek);

  const monthTable = (start = startWeek, end = endWeek) => {
    //console.log(start);
    //console.log(end);
    const arr = [];
    if (start > end) start = 0;
    for (let w = start; w <= end; w++) {
        arr.push(
        <Week weekNumber={w} key={w} selectedMonthObj={selectedMonthObj} />
      );
    }
    return arr;
  };
  const DayTitle = () => (
    <tr>
      <th>M</th>
      <th>T</th>
      <th>W</th>
      <th>T</th>
      <th>F</th>
      <th>S</th>
      <th>S</th>
    </tr>
  );
  return (
    <table>
      <tbody>
        <DayTitle />
        {monthTable()}
      </tbody>
    </table>
  );
};

export default Month;
