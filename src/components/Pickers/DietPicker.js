import React, { useState, useEffect } from 'react';
import Select from 'react-select'
import {pickerStyle, pickerTheme } from './PickerThemes'

const DietPicker = props => {
  let selectedDiets = ["Vegetarian", "Vegan", "Pescetarian", "Mediterrenean (White meat only)", "Omnivore"] 
  const [loadedDiets, setLoadedDiets] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
        setIsLoading(false);
        setLoadedDiets(
          selectedDiets.map((diet, index) => ({
            name: diet.name,
            id: index + 1
          }))
        );
  }, []);

  let content = <p>Loading diets...</p>;

  if (!isLoading && loadedDiets && loadedDiets.length > 0) {
    content = (
      <Select
        label="DietPicker"
        className={"select"}
        styles={pickerStyle}
        theme={pickerTheme}
        onChange={props.onDietSelect}
        defaultValue={{value: props.selectedDiet, label: props.selectedDiet}}
        isSearchable={false}
        isRtl={false}
        options={selectedDiets.map(diet => (
            {value : diet, label: diet}
        ))}>
      </Select>
    );      
    
  } 
  return content;
};

export default DietPicker;
