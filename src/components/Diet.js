import React, { useState, useEffect } from "react";
import { calculateFullTime, calculatePartTime } from './Calculate.js'
import Summary from "./Summary";

const Diet = props => {
  const [carbon, setCarbon] = useState(0);
  const [water, setWater] = useState(0);
  const [land, setLand] = useState(0);
  let partTime = props.selectedTime === "Sometimes";

  useEffect(() => {
    var aDict = {}
    if (!partTime) {
       aDict =calculateFullTime(props.selectedDiet);
    } else {
      aDict = calculatePartTime(
          props.selectedDiet,
          props.selectedDiet2,
          props.selectedFrequency,
          props.selectedUnit)
    }
    setCarbon(aDict['carbon'])
    setWater(aDict['water'])
    setLand(aDict['land'])
    return () => {
      console.log("Cleaning up...");
    };
  });

  let content = <p>Loading Diet...</p>;
  if (props.selectedDiet) {
    content = <Summary name={props.selectedDiet} carbon={carbon} water={water} land={land} />;
  } else if (!props.selectedDiet.id) {
    content = <p>Failed to fetch diet.</p>;
  }
  return content;
};

export default React.memo(Diet);
