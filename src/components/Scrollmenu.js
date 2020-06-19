import React, { Component } from "react";
import { Link, Element } from 'react-scroll';

const Scrollmenu = (props) => {
  return (
    <div style={{fontFamily: "Verdana, Geneva, Tahoma, sans-serif" }}>
      <Link activeClass="active" to="About" spy={true} smooth={true} offset={25} duration={500} delay={0}>
      <div style={{ position: "absolute", right: "50px" }}>About </div>
      </Link>
      <Element name="About" className="element"></Element>

      <Link activeClass="active" to="Skills" spy={true} smooth={true} offset={2000} duration={500} delay={0}>
      <div style={{ position: "absolute", right: "0" }}>Skills </div>
      </Link>
      <Element name="Skills" className="element"></Element>
    </div>
  );
};

export default Scrollmenu;
