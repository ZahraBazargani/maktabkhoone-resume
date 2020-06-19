import React, { Component } from "react";
import data from "../data.json";
import Fullpage from "../components/Fullpage";
import './Aboutsection.css';
import Downicon from "../components/Downicon";
import { Link, Element } from 'react-scroll';

class Aboutsection extends Component {
  render() {
    return (
      <div>
      <Fullpage className={data.sectionColor.second}>
        <h3>{data.sections[0].title}</h3>
        <div className="paragraphs">
          {data.sections[0].items.map((p) => {
            return <p>
              {p.content1}
              <br></br>
              <br></br>
              {p.content2}
              <br></br>
              <br></br>
              {p.content3}
              <br></br>
              <br></br>
              {p.content4}
              </p>;
          })}
        </div>
      </Fullpage>
      <Link activeClass="active" to="Skills" spy={true} smooth={true} offset={50} duration={500} delay={0}>
      <Downicon 
        icon={data.icons.down}
        
        />
      </Link>
      <Element name="Skills" className="element"></Element>
      </div>
    );
  }
}

export default Aboutsection;
