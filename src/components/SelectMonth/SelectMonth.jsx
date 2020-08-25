import React from 'react';
import moment from 'moment';
import style from './SelectMonth.module.scss';

const SelectMonth = ({ selectedMonthObj, addMonth, delMonth }) => {
  return (
    <div className={style.selectMonthContainer}>
      <div className={style.button} onClick={delMonth}>{'<'}</div>
      <div>{moment(selectedMonthObj).format('MMMM YYYY')}</div>
      <div className={style.button} onClick={addMonth}>{'>'}</div>
    </div>
  );
};

export default SelectMonth;
