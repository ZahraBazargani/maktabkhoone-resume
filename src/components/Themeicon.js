import React, { Component } from "react";

const Themeicon = (props) => {
  
  return (
    <div onClick={props.onClick} >
    
      <img
        src={props.icon}
        style={{
          position: "absolute",
          left: "30px",
          height: "40px",
          width: "40 px",
        }}
        alt="change theme"
        title="change theme"
      />
      
    </div>
  );
};

export default Themeicon;
