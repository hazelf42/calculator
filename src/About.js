import React from "react";
import CO2Snippet from "./assets/CO2snippet.png";
import WaterSnippet from "./assets/watersnippet.png";
import LandSnippet from './assets/landsnippet.png';
const About = props => {
  //HOOKS
  let content = (
    <React.Fragment>
      <a href="/">Home</a>
      <br /><br />
      <b>General rules:</b>
      <ul>
        <li>
          When the distinction exists, user's diet is compared to a medium-meat
          diet. Statistics change drastically when compared to a high-meat diet.
        </li>
        <li>
          I generally shopped around for different statistics and found the{" "}
          <i>ratios</i> to be generally comparable but the <i>amounts</i>
          different. Keep that in mind -- for example,
          CO2/vegetarian:CO2/meat-eater was usually ~65% across the board,
          though the actual number of GHG emissions tended to vary.
        </li>
        <li>
          The mediterrenean diet is sticky, usually defined as white-meat only.
          These numbers are the iffiest. I use this interchangeably with "low
          meat-eater" although theoretically, a diet low in meat overall but
          high in beef could theoretically emit more CO2 than a high-meat
          mediterrenean diet. ¯\_(ツ)_/¯
        </li>
      </ul>

      <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4372775/">
        <b>CO2 usage</b>
      </a>
      <br />
      <img
        src={CO2Snippet}
        alt="A screenshot of the CO2 usages I got from the source linked above"
        style={{ height: 300 }}
      />
      <ul>
        <li>Here, converted mediterrenean diet to low-meat diet.</li>
        <li>
          Converted kgCO2 to lbsCO2, multiplied by 365, subtracted the total
          from the medium meat-eater's total
        </li>
        <li>
          Used mean dietary GHG emissions, because I'm not gonna have a dang
          drop-down asking for the user's gender...
        </li>
        <a href="https://www.epa.gov/ghgemissions/global-greenhouse-gas-emissions-data">
          <li>Did-you-know fact source</li>
        </a>
      </ul>
      <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5094759/">
        <b>Water usage</b><br/ >
      </a>
      <img
        src={WaterSnippet}
        alt="Screenshot of water usage from source linked above"
        style={{ height: 300 }}
      />
      <ul>
        <li>
          Used the above for everything other than vegans, since only one vegan
          was surveyed and it seems inaccurate.
        </li>
        <li>
          Took the subtracted median, multiplied it by dietary litres consumed
          per day.
        </li>
        <li>
          Got 3,000 litres per day for the average dietary water footprint, from <a href="https://phys.org/news/2018-09-meat-free-diets-footprint-scientists.html">
             here, 
          </a> which cites <a href="https://www.nature.com/articles/s41893-018-0133-x">
              this study 
          </a>. Multiplied 3,000 * amount of water saved from above graph.
        </li>
        <a href="http://www.takepart.com/article/2016/02/18/4-billion-people-face-water-scarcity/">
          <li>Did-you-know fact source</li>
        </a>
      </ul>
      <a href="https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0200781">
        <b>Land usage</b><br />
      </a>
      <img src={LandSnippet} alt="Screenshot from above source" style={{height:300}}/>
      <ul>
        <li>Same as above, converted hectares to sq ft, compared to average dietary land usage</li>
        <li>Got the total amount of sq ft from the above src.</li>
        <a href="https://www.businessinsider.com/meat-consumption-linked-to-the-amazon-fires-2019-8"><li>Did-you-know source</li></a>
      </ul>
    </React.Fragment>
  );

  return content;
};

export default About;
