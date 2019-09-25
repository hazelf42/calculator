import React, { useState, useEffect } from 'react';

import DietPicker from './components/Pickers/DietPicker';
import Diet from './components/Diet';
import TimePicker from './components/Pickers/TimePicker'
import FrequencyPicker from './components/Pickers/FrequencyPicker'
import UnitPicker from './components/Pickers/UnitPicker'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import './components/Input.css'
import logo from './assets/calculator.png'
import {useSpring, animated} from 'react-spring'



const Home = props => {
  //HOOKS
  const [selectedDiet, setSelectedDiet] = useState("Vegetarian");
  const [selectedDiet2, setSelectedDiet2] = useState("Pescetarian");
  const [selectedTime, setSelectedTime] = useState('All the time');
  const [selectedFrequency, setSelectedFrequency] = useState(1);
  const [selectedUnit, setSelectedUnit] = useState('week');

  const [isHidden, setIsHidden] = useState(true);
  const [unitString, setUnitString] = useState('days');

  useEffect(() => {
  }, [selectedDiet, selectedTime, selectedFrequency,selectedUnit])

  const spring = useSpring({
    from: {
      height: 0
    }, to: {
      height: isHidden ? 0 : 290
    }
  })
  const dietSelectHandler = event => {
    const dietId = event.value;
    setSelectedDiet(dietId);
  };
  const dietSelectHandler2 = event => {
    const dietId = event.value;
    setSelectedDiet2(dietId);
  };
  const timeSelectHandler = event => {
    setIsHidden(!isHidden)
    const time = event.value;
    setSelectedTime(time);
  };
  const frequencySelectHandler = event => {
    const freq = event.value;
    setSelectedFrequency(freq);
  };

  const unitSelectHandler = event => {
    const unit = event.value;
    setSelectedUnit(unit);
    if (unit === "week" || unit === "month") {
      setUnitString("day(s)")
    } else if (unit === "day") {
      setUnitString("time(s)")
    }
  };

  class Header extends React.Component {
    render() {
       return (
          <div class="header">
        <img src={logo} alt="Logo" /><h3>Food Impact Calculator</h3>
          </div>
       );
    }
 }
  
  let content = (
    <React.Fragment>
            <p><a href="https://hazelis.online" style={{color: "0C6717", fontSize: 11, float: "left"}}>Hire me :^)</a></p>
<br />
      <Container>
      <Row >  
      <Col>
      <div className="input">
      <Header />
      <br />
      <h1>I eat...</h1>
      <DietPicker
        selectedDiet={selectedDiet}
        onDietSelect={dietSelectHandler}
      />
      <br /> 
      <TimePicker
        selectedTime={selectedTime}
        onTimeSelect={timeSelectHandler}
      />
      
      
      {!isHidden && <animated.div style={spring }>
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
        onFrequencySelect={frequencySelectHandler}
      />
      <h4>{unitString} per</h4>
      <UnitPicker
        selectedUnit={selectedUnit}
        onUnitSelect={unitSelectHandler}
      />
      <h4>and the rest of the time I eat...</h4>
      <DietPicker
        selectedDiet={selectedDiet2}
        onDietSelect={dietSelectHandler2}
      />
      </animated.div>
    }
    </div><br />
    </Col>
     <Col><Diet 
    selectedDiet={selectedDiet}
    selectedTime={selectedTime}
    selectedFrequency={selectedFrequency}
    selectedUnit={selectedUnit}
    selectedDiet2={selectedDiet2}
    /></Col>
</Row>
</Container><br />
<p style={{fontSize: 12, textAlign: "center"}}>Fact-check me, or just say hi! hi@hazelis.online :)</p>

    </React.Fragment>
  );

  return content;
};

export default Home;
