
  import React from 'react'

  const petClasses = ["Barbarian", "Ranger", "Paladin", "Cleric", "Rogue"];
  const petClassDescs = [
    "Boorish, brazen, courageous to a fault. Does not give a shit about smart stuff.",
    "Self-sufficient, aloof, do their own thing. Would survive the apocalypse longer than you.",
    "Loyal, resourceful, tries too hard.",
    "Kind, reserved, healing. Comforts you after a hard day of being alive.",
    "Rakish, mischievous, spry. Always up in shit that they should not be up in."
  ];
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

  class Log extends React.Component {
    constructor() {
      super();
      //Dict of all the possible behaviours
      this.countDict = Object.assign(
        {},
        petClassBehaviours.Default["Feeding"],
        petClassBehaviours.Default["Grooming"],
        petClassBehaviours.Default["Vocalizations"],
        petClassBehaviours[this.this.props.petClass]
      );
      this.hours = 0;
      //Whose values default to 0
      Object.entries(this.countDict).map(([key, value]) => {
        this.countDict[key] = 0;
      });
      this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
      const re = /^[0-9\b]+$/;
      if (e.target.name === "hours") {
        //For hours

        if (e.target.value === "" || re.test(e.target.value)) {
          this.setState({ hours: e.target.value });
        }
      }
      if (e.target.value === "" || re.test(e.target.value)) {
        this.countDict[e.target.name] = parseInt(e.target.value);
      }
      this.setState({});
    }

    render() {
      return (
        <div>

<form>
                  <label>
                    How many hours are you observing your pet? :
                    <input type="text" name="hrs" onChange={this.onChange} />
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
                            value={
                              this.countDict[key] === 0 ||
                              this.countDict[key] === NaN
                                ? ""
                                : this.countDict[key]
                            }
                            onChange={this.onChange}
                            style={{width: "40px"}}
                          />× {key} 
                        </label>
                        
                      </form>
                    </div>
                  );
                })}
              </div>
            );
          })}<br />
          <h3>{this.props.petClass}-specific behaviours</h3>
          {Object.entries(petClassBehaviours[this.props.petClass]).map(([key, value]) => {
            return (
              <div>
                <form>
                  <label>
                    {key} :
                    <input
                      type="text"
                      name={key}
                      value={
                        this.countDict[key] === 0 ? "" : this.countDict[key]
                      }
                      onChange={this.onChange}
                    />
                  </label>
                </form>
              </div>
            );
          })}
        </div>
      );
    }
  }
  export default Log