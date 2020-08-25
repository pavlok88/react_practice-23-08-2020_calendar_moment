import React, { useState} from 'react';
import moment from 'moment';

import Month from '../Month/Month';
import CurrentDay from '../CurrentDay/CurrentDay';
import SelectMonth from '../SelectMonth/SelectMonth';

import style from './Calendar.module.scss';

const Calendar = () => {
  const [selectedMonthObj, setMonthObj] = useState(moment());

  const addMonth = () => {
    const newDate = selectedMonthObj.clone();
    setMonthObj(newDate.add(1, 'month'));
  };
  const delMonth = () => {
    const newDate = selectedMonthObj.clone();
    setMonthObj(newDate.subtract(1, 'month'));
  };
  const resetMonth = () => {
    setMonthObj(moment());
  };
console.log(selectedMonthObj.format('MMM'))
  return (
    <div className={style.calendar}>
      <CurrentDay resetMonth={resetMonth} />
      <div className={style.month}>
        <SelectMonth
          selectedMonthObj={selectedMonthObj}
          addMonth={addMonth}
          delMonth={delMonth}
        />
        <Month selectedMonthObj={selectedMonthObj} />
      </div>
    </div>
  );
};

export default Calendar;
