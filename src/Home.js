import React, { useState, useEffect } from "react";

import DietPicker from "./components/Pickers/DietPicker";
import Diet from "./components/Diet";
import TimePicker from "./components/Pickers/TimePicker";
import FrequencyPicker from "./components/Pickers/FrequencyPicker";
import UnitPicker from "./components/Pickers/UnitPicker";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import "./components/Input.css";
import logo from "./assets/calculator.png";
import { useSpring, animated } from "react-spring";

const Home = props => {
  //HOOKS
  const [selectedDiet, setSelectedDiet] = useState("Vegetarian");
  const [selectedDiet2, setSelectedDiet2] = useState("Pescetarian");
  const [selectedTime, setSelectedTime] = useState("All the time");
  const [selectedFrequency, setSelectedFrequency] = useState(1);
  const [selectedUnit, setSelectedUnit] = useState("week");
  const [unitString, setUnitString] = useState("days");

  useEffect(() => {}, [
    selectedDiet,
    selectedTime,
    selectedFrequency,
    selectedUnit
  ]);

  const spring = useSpring({
    from: {
      height: 0
    },
    to: {
      height: selectedTime==="All the time" ? 0 : 290
    }
  });
  const selectHandler = event => {
    const eventValue = event.value;
    console.log(eventValue)
    let selectedDiets = [
      "Vegetarian",
      "Vegan",
      "Pescetarian",
      "Mediterrenean (White meat only)",
      "Omnivore"
    ];
    console.log(typeof(eventValue))
    let selectedTimes = ["All the time", "Sometimes"];
    let selectedFrequencies = ["day", "week", "month"];

    if (selectedDiets.includes(eventValue)) {
      setSelectedDiet(eventValue);
    } else if (selectedTimes.includes(eventValue)) {
      console.log("diet")
      setSelectedTime(eventValue);
      console.log(selectedTime)

    } else if (selectedFrequencies.includes(eventValue)) {
      setSelectedUnit(eventValue);
      console.log("frequency")

      if (eventValue === "week" || eventValue === "month") {
        setUnitString("day(s)");
      } else if (eventValue === "day") {
        setUnitString("time(s)");
      }

    } else if (typeof(eventValue)==="number") {
      setSelectedFrequency(eventValue);
    }
  };
  const dietSelectHandler2 = event => {
    const dietId = event.value;
    setSelectedDiet2(dietId);
  };

  class Header extends React.Component {
    render() {
      return (
        <div className="header">
          <img src={logo} alt="Logo" />
          <h3>Food Impact Calculator</h3>
        </div>
      );
    }
  }

  let content = (
    <React.Fragment>
      <p>
        <a href="https://hazelis.online"
          style={{ color: "0C6717", fontSize: 11, float: "left" }}>
          My site :^)
        </a>
      </p>
      <br />
      <Container>
        <Row>
          <Col>
            <div className="input">
              <Header />
              <br />
              <h1>I eat...</h1>
              <DietPicker
                selectedDiet={selectedDiet}
                onDietSelect={selectHandler}
              />
              <br />
              <TimePicker
                selectedTime={selectedTime}
                onTimeSelect={selectHandler}
              />

              {selectedTime==="Sometimes" && (
                <animated.div style={spring}>
                  <hr
                    style={{
                      color: "grey",
                      height: 5,
                      margin: 20
                    }}
                  />

                  <FrequencyPicker
                    selectedUnit={selectedUnit}
                    selectedFrequency={selectedFrequency}
                    onFrequencySelect={selectHandler}
                  />
                  <h4>{unitString} per</h4>
                  <UnitPicker
                    selectedUnit={selectedUnit}
                    onUnitSelect={selectHandler}
                  />
                  <h4>and the rest of the time I eat...</h4>
                  <DietPicker
                    selectedDiet={selectedDiet2}
                    onDietSelect={dietSelectHandler2}
                  />
                </animated.div>
              )}
            </div>
            <br />
          </Col>
          
          <Col>
          <a href="/about" style={{fontSize:12, margin: "0 7.5%"}}>How is this calculated?</a>
            <Diet
              selectedDiet={selectedDiet}
              selectedTime={selectedTime}
              selectedFrequency={selectedFrequency}
              selectedUnit={selectedUnit}
              selectedDiet2={selectedDiet2}
            />
          </Col>
        </Row>
      </Container>
      <br />
      <p style={{ fontSize: 12, textAlign: "center" }}>
        Fact-check me, or just say hi! hi@hazelis.online :)
      </p>
    </React.Fragment>
  );

  return content;
};

export default Home;
