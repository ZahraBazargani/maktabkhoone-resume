import React, { Component } from "react";
import data from "../data.json";
import { SocialIcon } from "react-social-icons";
import Fullpage from "../components/Fullpage";
import Downicon from "../components/Downicon";
import { Link, Element } from 'react-scroll';

class TitlesAndIcons extends Component {
  state = {
    color: "white",
  };
  changeColor = () => {
    this.setState({
      color: this.state.color === "white" ? "red" : "white",
    });
  };
  render() {
    return (
      <div>
        
        <Fullpage className={data.sectionColor.first}>
          
          <h1
            style={{ color: this.state.color }}
            onMouseOver={() => {
              this.changeColor();
            }}
            onMouseLeave={() => {
              this.changeColor();
            }}
          >
            {data.title}
          </h1>
          <div>
            <h2>{data.subtitle}</h2>
          </div>
          <div className="icons-wrapper">
            {Object.keys(data.links).map((key) => {
              return (
                <div className="icon">
                  <SocialIcon url={data.links[key]} />
                </div>
              );
            })}
          </div>
        </Fullpage>
        <Link activeClass="active" to="About" spy={true} smooth={true} offset={50} duration={500} delay={0}>
        <Downicon 
          icon={data.icons.down}
          // onClick={()=>{}} 
          />
        </Link>
        <Element name="About" className="element"></Element>
      </div>
    );
  }
}

export default TitlesAndIcons;
