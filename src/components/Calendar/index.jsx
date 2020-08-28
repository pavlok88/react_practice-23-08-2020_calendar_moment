import React, { useState } from 'react';
import moment from 'moment';
import Month from './Month/Month';
import style from './index.module.scss';

const Calendar = () => {
  const [selectedMonthObj, setMonthObj] = useState(moment());

  const addMonth = () => setMonthObj(moment(selectedMonthObj).add(1, 'month'));
  const delMonth = () => setMonthObj(moment(selectedMonthObj).subtract(1, 'month'));
  const resetMonth = () => setMonthObj(moment());
  
  const CurrentDay = () => {
    return (
      <div className={style.currentDay} onClick={resetMonth}>
        <div><p>{moment().format('dddd')}</p></div>
        <div><p>{moment().format('D')}</p></div>
      </div>
    );
  };

  const SelectMonth = () => {
    return (
      <div className={style.selectMonthContainer}>
        <div className={style.button} onClick={delMonth}>{'<'}</div>
        <div>{moment(selectedMonthObj).format('MMMM YYYY')}</div>
        <div className={style.button} onClick={addMonth}>{'>'}</div>
      </div>
    );
  };
  
  return (
    <div className={style.calendar}>
      <CurrentDay/>
      <div className={style.month}>
        <SelectMonth/>
         {/* в компонент месяц передаем moment объект выбранного месяца */}
        <Month selectedMonthObj={selectedMonthObj} /> 
      </div>
    </div>
  );
};

export default Calendar;
