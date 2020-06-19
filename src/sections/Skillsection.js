import React, { Component } from "react";
import data from "../data.json";
import Fullpage from "../components/Fullpage";
import Skillcards from "../components/Skillcards";

class Skillsection extends Component {
  render() {
    return (
      <Fullpage className={data.sectionColor.third}>
        <h3>{data.sections[1].title}</h3>
        <div className="cards-wrapper">
          {data.sections[1].items.map((eachskill) => {
            return (
              <Skillcards skill={eachskill}/>
            );
          })}
        </div>
      </Fullpage>
    );
  }
}

export default Skillsection;
