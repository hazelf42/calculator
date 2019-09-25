import React, { useState, useEffect } from "react";

import Summary from "./Summary";

const Diet = props => {
  const [carbon, setCarbon] = useState(0);
  const [water, setWater] = useState(0);
  const [land, setLand] = useState(0);
  let partTime = props.selectedTime === "Sometimes";

  function dietToCo2(diet) {
    //let meat = 7.26;
    let regular = 7.166759; //Medium consumption
    let pesc = 3.91;
    let med  = 4.5 //not accurate, use for now
    let veg = 3.81;
    let vegan = 2.89;
    //GHG source  / GHG emissions (kgCO2e)
    //Should be a switch statement but I am so tired

    if (diet === "Vegetarian") {
      return Math.round(regular - veg);
    } else if (diet === "Vegan") {
      return regular - vegan;
    } else if (diet === "Pescetarian") {
      return regular - pesc;
    } else if (diet.split(" ")[0] === "Mediterrenean") {
      return regular - med;
    } else {
      return 0;
    }
  }
  function dietToH2o(diet){

    let pesc = .28
    let med  = .10 //not accurate, use for now
    let veg = .37
    let vegan = .40
    //https://www.ncbi.nlm.nih.gov/pubmed/27812156    //Should be a switch statement but I am so tired

    if (diet === "Vegetarian") {
      return 3000*(veg);
    } else if (diet === "Vegan") {
      return 3000*(vegan);
    } else if (diet === "Pescetarian") {
      return 3000*(pesc)
    } else if (diet.split(" ")[0] === "Mediterrenean") {
      return 3000*(med);
    } else {
      return 0;
    }
  }
  function dietToLand(diet){

    let regular = 2.549 //Medium consumption
    let pesc = 1.55
    let med  = 1.891 
    let veg = 1.249
    let vegan = 1.147
    //Src https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0200781	

    if (diet === "Vegetarian") {
      return regular - veg
    } else if (diet === "Vegan") {
      return regular - vegan;
    } else if (diet === "Pescetarian") {
      return regular - pesc;
    } else if (diet.split(" ")[0] === "Mediterrenean") {
      return regular - med;
    } else {
      return 0;
    }
  }

  function calculateFullTime(diet) {
    return {"carbon" : (dietToCo2(diet) * 365* 2.205), "water" : (dietToH2o(diet) * 365) , "land" : (dietToLand(diet))}
  }

  function calculatePartTime(diet, diet2, frequency, unit) {
    const CO21 = dietToCo2(diet);
    const CO22 = dietToCo2(diet2);
    const H2o1 = dietToH2o(diet)
    const H2o2 = dietToH2o(diet2)
    const land1 = dietToLand(diet)
    const land2 = dietToLand(diet2)
    var co2 = 0
    var h2o = 0
    var land = 0
    //let regular = 5.82333333; //avg of low, med, high meat-eaters
    if (unit === "week") {
      co2= ((CO21 * frequency) / 7 + (CO22 * (7 - frequency)) / 7) * 365* 2.205
      ;
      h2o= ((H2o1 * frequency) / 7 + (H2o2 * (7 - frequency)) / 7) * 365;
      land= ((land1 * frequency) / 7 + (land2 * (7 - frequency)) / 7) ;

    } else if (unit === "month") {
      co2= ((CO21 * frequency) / 30 + (CO22 * (30 - frequency)) / 30) * 365* 2.205
      ;
      h2o= ((H2o1 * frequency) / 30 + (H2o2 * (30 - frequency)) / 30) * 365;
      land= ((land1 * frequency) / 30 + (land2 * (30 - frequency)) / 30) ;
    } else if (unit === "day") {
      co2= ((CO21 * frequency) / 3 + (CO22 * (3 - frequency)) / 3) * 365* 2.205
      ;
      h2o= ((H2o1 * frequency) / 3 + (H2o2 * (3 - frequency)) / 3) * 365;
      land= ((land1 * frequency) / 3 + (land2 * (3 - frequency)) / 3) ;
    }
    return {"carbon" : co2, "water" : h2o, "land" : land}
  }

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
