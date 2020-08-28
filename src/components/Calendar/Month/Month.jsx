import React from 'react';
import moment from 'moment';
import Week from '../Week/Week';
import './Month.module.scss';

const Month = ({ selectedMonthObj }) => {

  const monthTable = () => {
    //создаем moment объекты которые указывают на первую и последнюю неделю месяца
    const startWeekObj = moment(selectedMonthObj).startOf('month').startOf('isoWeek');
    const endWeekObj = moment(selectedMonthObj).endOf('month').startOf('isoWeek');
    const arr = [];
    //создаем цикл, в цикле объект неделя передается в компонент week
    while (startWeekObj.isSameOrBefore(endWeekObj)) {
      arr.push(
        <Week
          weekObj={startWeekObj.clone()}
          key={startWeekObj.format('W')}
          selectedMonthObj={selectedMonthObj}
        />
      );
      startWeekObj.add(1, 'week');
    }
    return arr;
  };
  
  //получаем сокращенные названия дней недели
  const DayOfWeekTitle = () => {
    const weekDaysArr = moment.weekdaysMin();
    const isoWeekDaysArr = [...weekDaysArr.slice(1), weekDaysArr[0]];
    const thElem = isoWeekDaysArr.map((el) => {
      return <th key={el}>{el[0]}</th>;
    });
    return <tr>{thElem}</tr>;
  };

  return (
    <table>
      <tbody>
        <DayOfWeekTitle />
        {monthTable()}
      </tbody>
    </table>
  );
};

export default Month;
