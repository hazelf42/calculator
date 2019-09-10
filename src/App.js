import React, { useState, useEffect } from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import "./components/Input.css";
import hitpoints from "./assets/hp.png";
import { useSpring, animated } from "react-spring";
import Select from "react-select";
import "./index.css";
import bdg from "./assets/bdg.png";
const App = props => {
  //HOOKS
  const [petClass, setClass] = useState(null);
  const [type, setType] = useState(null);
  const [screen, setScreen] = useState("type");
  const [hours, setHours] = useState(1);
  const [countDict, setCountDict] = useState({});
  const [HP, setPetHP] = useState(0);
  const [lazyLevels, setLazyLevels] = useState({ size: 9, age: 9, kick: 21 });
  useEffect(() => {});

  const spring = useSpring({
    from: {
      height: 0
    },
    to: {
      height: 290
    }
  });
  const classSelectHandler = petClass => {
    setClass(petClass);
    setScreen("select");
  };
  const typeSelectHandler = type => {
    setType(type);
    setScreen("petClass");
  };

  class Header extends React.Component {}
  const types = {
    Dog: 2.4,
    Cat: 2,
    Fish: 3.1,
    "Small Mammal": 2.4,
    Bug: 2.3,
    Reptile: 2.8,
    Bird: 2.3,
    Amphibian: 2.2,
    Equine: 2.4,
    "Farm Animal": 2.2,
    Exotic: 2.8,
    Plant: 2.2
  };
  class Types extends React.Component {
    render() {
      return (
        <div>
          <h3 className="robot-header flex-center">Choose your fighter</h3>
          <a
            href="https://www.youtube.com/watch?v=9Jcxc-ddWKI"
            className="robot-polygon flex-center"
          >
            Inspired
          </a>

          <ul className="grid space-around">
            {Object.entries(types).map(([type, num]) => {
              return (
                <li key={type}>
                  <AnimalCard type={type} />
                </li>
              );
            })}
          </ul>
        </div>
      );
    }
  }
  const petClasses = ["Barbarian", "Ranger", "Paladin", "Cleric", "Rogue"];
  const petClassDescs = [
    "Boorish, brazen, courageous to a fault. Does not give a shit about smart stuff.",
    "Self-sufficient, aloof, would survive the apocalypse longer than you.",
    "Loyal, resourceful, tries too hard.",
    "Kind, reserved, healing. Comforts you after a hard day of being alive.",
    "Rakish, mischievous, spry. Always up in shit that they should not be up in."
  ];
  const petClassBases = {
    //From rouge to barbarian
    Dog: [196, 156, 116, 76, 35],
    Cat: [40, 75, 110, 144, 179],
    Fish: [20, 73, 126, 178, 231],
    Reptile: [30, 78, 126, 173, 221],
    Bird: [40, 79, 116, 154, 191],
    Equine: [45, 86, 126, 166, 206],
    "Small Mammal": [10, 51, 91, 131, 171],
    Bug: [1, 40, 77, 115, 152],
    Amphibian: [40, 77, 114, 150, 178],
    "Farm animal": [50, 88, 126, 163, 201],
    Exotic: [35, 83, 130, 177, 224],
    Plant: [30, 68, 106, 143, 181]
  };
  const petClassBehaviours = {
    Default: {
      Feeding: {
        "Eating normal food": 1,
        Hunting: 2,
        Scavenging: 2
      },
      Vocalizations: {
        Song: 1,
        "Alarm call": 1,
        "Funny vocalization": 2
      },
      Grooming: {
        Preening: 1,
        Bathing: 1,
        "Social grooming": 2
      }
    },
    Barbarian: {
      "Impolite action": 3,
      "Courageous feat": 4,
      "Not giving a shit about smart stuff": 5
    },
    Ranger: {
      "Clever action": 3,
      "Gazing contemplatively": 4,
      "Ignoring you completely": 5
    },
    Paladin: {
      "Loyal action": 4,
      "Doing good deeds": 4,
      "Bringing you something you didn't ask for": 5
    },
    Cleric: {
      "Soothing action": 3,
      "Gentle touch": 4,
      "Appearing in your hour of need": 5
    },
    Rogue: {
      "Mischievous action": 3,
      "Stealing something": 4,
      "Surprising the shit out of you": 5
    }
  };

  function sum(obj) {
    return Object.keys(obj).reduce((sum, key) => sum + parseFloat(obj[key]), 0);
  }
  function setHP(countDict1) {
    const countDict2 = countDict1;
    //Get base from class
    const baseHp = petClassBases[type][4 - petClasses.indexOf(petClass)];
    setPetHP(baseHp + (sum(countDict2) * types[type]) / hours);
  }

  function setLazyHP() {
    //Get base from class
    const baseHp = petClassBases[type][4 - petClasses.indexOf(petClass)];
    setPetHP(baseHp + sum(lazyLevels) * types[type]);
  }

  class PetClass extends React.Component {
    render() {
      return (
        <div>
          <h3 className="robot-header flex-center">Choose your class</h3>
          <ul className="grid space-around">
            {petClasses.map(petClass => {
              return (
                <li>
                  <ClassCard class={petClass} />
                </li>
              );
            })}
          </ul>
        </div>
      );
    }
  }
  class Selected extends React.Component {
    render() {
      return (
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "10px",
            height: "300px",
            width: "auto"
          }}
        >
          <br />
          <h1 className="flex-center">
            So, wanna observe your pet for several hours?
          </h1>
          <br />
          <Container className="flex-center padding">
            <Row>
              <Col xs={6}>
                <button
                  className="wanna-observe flex-center"
                  onClick={() => {
                    setScreen("calculate");
                  }}
                >
                  Nah
                </button>
              </Col>
              <Col xs={6}>
                <button
                  className="wanna-observe flex-center"
                  onClick={() => {
                    setScreen("log");
                  }}
                >
                  Yeah!
                </button>
              </Col>
            </Row>
          </Container>
        </div>
      );
    }
  }

  class ShowHP extends React.Component {
    render() {
      var image = require("./assets/" + type.toLowerCase() + ".png");
      return (
        <Container>
          <br />
          <h1 className="robot-header flex-center">
            {petClass} {type}
          </h1>
          <Row>
            <Col>
              <img className="avatar" src={image} alt={type}></img>
            </Col>
          </Row>
          <br /> <h2 className="robot flex-right">{HP}</h2>
          <img
            src={hitpoints}
            alt="HP"
            style={{ width: "auto", height: "auto" }}
          ></img>
          <p>
            Base hp: {petClassBases[type][4 - petClasses.indexOf(petClass)]}
          </p>
          {Object.entries(countDict).map(([key, value]) => {
            return (
              <p>
                {key}: ×{value}
              </p>
            );
          })}
          <p>
            × {types[type]} {type} multiplier
          </p>
          <img src={bdg} alt="BDG" style={{ width: "450px", height: "auto" }} />
          {/* <p>/ {hours} hour(s)</p> */}
        </Container>
      );
    }
  }

  class ShowLazyHP extends React.Component {
    render() {
      var image = require("./assets/" + type.toLowerCase() + ".png");
      return (
        <Container>
          <br />
          <h1 className="robot-header flex-center">
            {petClass} {type}
          </h1>
          <Row>
            <Col>
              <img className="avatar" src={image} alt={type}></img>
            </Col>
          </Row>
          <br /> <h2 className="robot flex-right">{HP}</h2>
          <img
            src={hitpoints}
            alt="HP"
            style={{ width: "auto", height: "auto" }}
          ></img>
          <p>
            Base hp: {petClassBases[type][4 - petClasses.indexOf(petClass)]}
          </p>
          {Object.entries(countDict).map(([key, value]) => {
            return (
              <p>
                {key}: ×{value}
              </p>
            );
          })}
          <p>3× size multiplier: {lazyLevels["size"]}</p>
          <p>3× age multiplier: {lazyLevels["age"]}</p>
          <p>7× asskicking multiplier: {lazyLevels["kick"]}</p>
          <p>
            × {types[type]} {type} multiplier
          </p>
        </Container>
      );
    }
  }

  const AnimalCard = props => {
    var image = require("./assets/" + props.type.toLowerCase() + ".png");
    return (
      <button
        className="animalbutton"
        onClick={() => typeSelectHandler(props.type)}
      >
        <div style={{ width: "270px", height: "270px" }}>
          <img src={image} alt={props.type} className="avatar"></img>
          <h4
            className={
              props.type === "Farm Animal" || props.type === "Small Mammal"
                ? "header-md center-text"
                : "header-lg center-text"
            }
          >
            {props.type}
          </h4>
        </div>
      </button>
    );
  };
  const ClassCard = props => {
    var image = require("./assets/" + props.class.toLowerCase() + ".png");
    return (
      <button
        className="animalbutton"
        onClick={() => classSelectHandler(props.class)}
      >
        <div style={{ width: "300px", height: "300px" }}>
          <img src={image} alt={type} className="classavatar"></img>
          <h4 className="header-lg center-text">{props.class}</h4>
          <p className="center-text">
            {petClassDescs[petClasses.indexOf(props.class)]}
            <br />
          </p>
        </div>
      </button>
    );
  };

  class Log extends React.Component {
    // Object.entries(countDict).map(([key, value]) => {
    //   setCountDict( ...countDict[key] = 0);
    // });
    //Whose values default to 0
    //Dict of all the possible behaviours
    onChange(e) {
      if (countDict === {}) {
        setCountDict(
          Object.assign(
            {},
            petClassBehaviours.Default["Feeding"],
            petClassBehaviours.Default["Grooming"],
            petClassBehaviours.Default["Vocalizations"],
            petClassBehaviours[petClass]
          )
        );
      }
      const re = /^[0-9\b]+$/;
      if (e.target.value === "" || re.test(e.target.value)) {
        if (e.target.value === "") {
          const aDict = countDict;
          aDict[e.target.name] = 0;
          setCountDict(aDict);
        } else {
          const aDict = countDict;
          aDict[e.target.name] = parseInt(e.target.value);
          setCountDict(aDict);
        }
      }
      setHP(countDict);
    }

    render() {
      if (HP === 0)
        setPetHP(petClassBases[type][4 - petClasses.indexOf(petClass)]);

      return (
        <div>
          <br />
          How many hours did you observe your pet?
          <form>
            <label>
              <Select
                name="hours"
                value={
                  hours === 0
                    ? { label: "", value: 0 }
                    : { label: hours, value: hours }
                }
                onChange={value => {
                  setHours(value.value);
                  setHP(countDict);
                  console.log(hours);
                }}
                style={{ width: "50px" }}
                options={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(num => ({
                  label: num,
                  value: num
                }))}
              />
            </label>
          </form>
          <h3>General Behaviours</h3>
          {Object.entries(petClassBehaviours.Default).map(([b, v]) => {
            return (
              <div>
                <h4>{b}</h4>
                {Object.entries(v).map(([key, value]) => {
                  return (
                    <div>
                      <form>
                        <label>
                          <input
                            type="text"
                            name={key}
                            value={countDict[key] === 0 ? "" : countDict[key]}
                            onChange={this.onChange}
                            style={{ width: "40px" }}
                          />
                          × {key}
                        </label>
                      </form>
                    </div>
                  );
                })}
              </div>
            );
          })}
          <br />
          <h3>{petClass}-specific behaviours</h3>
          {Object.entries(petClassBehaviours[petClass]).map(([key, value]) => {
            return (
              <div>
                <form>
                  <label>
                    <input
                      type="text"
                      name={key}
                      value={countDict[key] === 0 ? "" : countDict[key]}
                      onChange={this.onChange}
                      style={{ width: "50px" }}
                    />
                    × {key}
                  </label>
                </form>
              </div>
            );
          })}
        </div>
      );
    }
  }

  class Calculate extends React.Component {
    // Object.entries(countDict).map(([key, value]) => {
    //   setCountDict( ...countDict[key] = 0);
    // });
    //Whose values default to 0
    //Dict of all the possible behaviours

    render() {
      setLazyHP();
      console.log(lazyLevels["age"] / 3 - 1);
      const sizeOptions = ["Huge", "Big", "Normal", "Small", "Tiny"];
      const ageOptions = ["Elderly", "Older", "Adult", "Younger", "Baby"];
      const kickOptions = [
        "They could kick God's ass",
        "Hell yeah",
        "Oh yeah",
        "Not really",
        "They could kick their own ass"
      ];

      return (
        <div>
          <br />
          <h1>Yeah that's a lot of work</h1>
          <br />
          How big is your pet, vs average?
          <Select
            value={{
              value: sizeOptions[5 - lazyLevels["size"] / 3],
              label: sizeOptions[5 - lazyLevels["size"] / 3]
            }}
            onChange={value => {
              const temp = lazyLevels;
              temp["size"] = (4 - sizeOptions.indexOf(value.value) + 1) * 3;
              setLazyLevels(temp);
              setLazyHP();
            }}
            isSearchable={false}
            options={sizeOptions.map(size => ({
              value: size,
              label: size
            }))}
          />
          <br />
          How old is your pet, vs average?
          <Select
            value={{
              value: ageOptions[5 - lazyLevels["age"] / 3],
              label: ageOptions[5 - lazyLevels["age"] / 3]
            }}
            onChange={value => {
              const temp = lazyLevels;
              temp["age"] = (4 - ageOptions.indexOf(value.value) + 1) * 3;
              setLazyLevels(temp);
              setLazyHP();
            }}
            isSearchable={false}
            options={ageOptions.map(size => ({
              value: size,
              label: size
            }))}
          />
          <br />
          Can your pet kick ass?
          <Select
            value={{
              value: kickOptions[5 - lazyLevels["kick"] / 7],
              label: kickOptions[5 - lazyLevels["kick"] / 7]
            }}
            onChange={value => {
              const temp = lazyLevels;
              temp["kick"] = (4 - kickOptions.indexOf(value.value) + 1) * 7;
              setLazyLevels(temp);
              setLazyHP();
            }}
            isSearchable={false}
            options={kickOptions.map(size => ({
              value: size,
              label: size
            }))}
          />
          <br />
          <img src={bdg} alt="BDG" style={{ width: "450px", height: "auto" }} />
        </div>
      );
    }
  }

  let content = (
    <React.Fragment>
      {screen === "type" && <Types />}
      {screen === "petClass" && <PetClass />}
      {screen === "select" && <Selected />}
      {/* {screen === "calculate" && <Calculate />} */}
      {screen === "log" && (
        <Row>
          <Col className="resultsscreen">
            <Log />
          </Col>
          <Col className="resultsscreen">
            <ShowHP />
          </Col>
        </Row>
      )}
      {screen === "calculate" && (
        <Row>
          <Col className="resultsscreen">
            <Calculate />
          </Col>
          <Col className="resultsscreen">
            <ShowLazyHP />
          </Col>
        </Row>
      )}
    </React.Fragment>
  );

  return content;
};

export default App;
