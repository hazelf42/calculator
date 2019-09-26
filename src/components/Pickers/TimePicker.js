import React, { useState, useEffect } from 'react';
import Select from 'react-select'
import {pickerStyle, pickerTheme } from './PickerThemes'

const TimePicker = props => {
  const [loadedTimes, setLoadedTimes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    let selectedTimes = ["All the time", "Sometimes"]
    setIsLoading(true);
        setIsLoading(false);
        setLoadedTimes(selectedTimes)
  }, []);

  let content = <p>Loading times...</p>;

  if (!isLoading && loadedTimes && loadedTimes.length > 0) {
    content = (
      <Select 
      name="TimePicker"

        onChange={props.onTimeSelect}
        defaultValue={{value: props.selectedTime, label: props.selectedTime}}
        isSearchable={false}
        styles={pickerStyle}
        theme={pickerTheme}
        options={loadedTimes.map(time => (
            {value: time, label: time}
        ))}>
      </Select>
    );
  }
  return content;
};

export default TimePicker;
