import React, { useState, useEffect } from "react";
import Select from 'react-select'
import {pickerStyle, pickerTheme } from './PickerThemes'


const UnitPicker = props => {
  const [loadedUnits, setLoadedUnits] = useState([]);
  useEffect(() => {
    setLoadedUnits(["week", "day", "month"]);
  }, []);

  let content = <p></p>;


  if (loadedUnits && loadedUnits.length > 0) {
    content = (
      <Select
        className={"select"}
        styles={pickerStyle}
        theme={pickerTheme}
        onChange={props.onUnitSelect}
        defaultValue={{value: props.selectedUnit, label: props.selectedUnit }}
        isSearchable={false}
        isRtl={false}
        options={loadedUnits.map(diet => ({ value: diet, label: diet }))}
      ></Select>
    );
  }
  return content;
};

export default UnitPicker;
