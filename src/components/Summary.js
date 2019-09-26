import React from "react";
import "./Summary.css";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import {
  FaIndustry,
  FaWater,
  FaTree,
  FaCar,
  FaTint,
  FaHandHolding,
  FaSwimmingPool,
  FaSun,
  FaTractor
} from "react-icons/fa";

function roundToTwo(num) {
  return Math.round(num * 100) / 100;
}
const Summary = props => {
  const cars = (props.carbon / 1000) * 1109;
  return (
    <div className="summary">
      <Container>
        <Row className="summaryRow">
          <Col lg={2} md={1}>
            <FaIndustry color="grey" size={50} />
          </Col>
          <Col lg={10} md={11}>
            <Row><Col>
            <h3 className="summary">
              CO2 saved: 
              <span className="summary__output">
                {roundToTwo(props.carbon)}
              </span> lbs CO2/year
            </h3></Col>
            <Col xs={2}><p>
                <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4372775/">
                  Source
                </a>
              </p>  </Col>
            </Row>
            <p>
              <FaCar />
              <i>The equivalent to driving</i> <b>{roundToTwo(cars)}</b> 
              <i>fewer miles</i>
              <br />
              <FaTint />
              <i>The same as putting</i> 
              <b>{roundToTwo((props.carbon / 1000) * 1.1)}</b>{" "}
              <i>barrels of oil back in the ground.</i>
            </p>
          </Col>
        </Row>

        <h4 className="summary">
          <i>
            <b>Did you know?</b>
          </i>
           Animal agriculture creates more CO2 emissions than the entire transportation industry - that's cars, trucks, trains, and planes.
        </h4>
        <Row className="summaryRow">
        <Col lg={2} md={1}>
            <FaWater color="blue" size={45} />
          </Col>
          <Col lg={10} md={11}>
          <Row><Col>
            <h3>
              Water saved: 
              <span className="summary__output">
                {roundToTwo(props.water)}{" "}
              </span>
              gallons/year
            </h3></Col>
            <Col xs={2}><p>
                <a href="https://www.ncbi.nlm.nih.gov/pubmed/27812156">
                  Source
                </a>
              </p>  </Col>
            </Row>
            <p>
              <FaHandHolding /> <i>Enough to sustain</i> 
              <b>{Math.round(props.water / 270)}</b> <i>people for one year</i>{" "}
              <br />
              <FaSwimmingPool /> <i>Enough to fill</i> 
              <b>{roundToTwo(props.water / 264.172)}</b> <i>swimming pools</i>
            </p>
          </Col>
        </Row>
        <h4 className="summary">
          <i>
            <b>Did you know? </b>
          </i>
          (Conservatively!) About 1/3 of the world's fresh water is used for livestock.
        </h4>
        <Row className="summaryRow">
          <Col lg={2}md={1} >
            {" "}
            <FaTree size={50} color="green" />
          </Col>
          <Col lg={10} md={11}>
          <Row><Col>

            <h3>
              Land saved: 
              <span className="summary__output">
                {roundToTwo(props.land * 107639)}{" "}
              </span>{" "}
              sq feet
            </h3></Col>
            <Col xs={2}><p>
                <a href="https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0200781">
                  Source
                </a>
              </p>  </Col>
            </Row>
            <p>
              <FaSun /> <i>Saving about</i> 
              <b>{Math.round(props.land * 107639 * 0.25)}</b>{" "}
              <i>sq feet from desertification.</i>
              <br />
              <FaTractor /> <i>Enough to produce</i> 
              <b>{roundToTwo(props.land * 1.66666667)}</b> <i>tons of grain</i>
            </p>
          </Col>
        </Row>
        <h4 className="summary">
          <i>
            <b>Did you know? </b>
          </i>
          Most of the Amazon rainforest's fires were started to clear land for
          cattle farming.
        </h4>
      </Container>
    </div>
  );
};

export default Summary;
