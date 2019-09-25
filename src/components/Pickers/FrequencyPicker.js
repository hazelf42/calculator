import React, { useState, useEffect } from "react";
import Select from "react-select";
import {pickerStyle, pickerTheme } from './PickerThemes'

const FrequencyPicker = props => {
  const [loadedFrequencies, setLoadedFrequencies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let object = {};
    if (props.selectedUnit === "day") {
      [1, 2, 3].map(num => object[""]);
      setLoadedFrequencies([1, 2, 3]);
    } else if (props.selectedUnit === "week") {
      setLoadedFrequencies([1, 2, 3, 4, 5, 6, 7]);
    } else if (props.selectedUnit === "month") {
      setLoadedFrequencies(Array.from(Array(30), (x, index) => index + 1));
    } else {
      setLoadedFrequencies([1, 2, 3, 4, 5, 6, 7]);
    }
  }, [props.selectedUnit]);

  let content = <p></p>;
  if (!isLoading && loadedFrequencies && loadedFrequencies.length > 0) {
    content = (
      <Select
        styles={pickerStyle}
        theme={pickerTheme}
        onChange={props.onFrequencySelect}
        defaultValue={{
          value: props.selectedFrequency,
          label: props.selectedFrequency
        }}
        isSearchable={false}
        options={loadedFrequencies.map(freq => ({ value: freq, label: freq }))}
      ></Select>
    );
  }
  return content;
};

export default FrequencyPicker;
