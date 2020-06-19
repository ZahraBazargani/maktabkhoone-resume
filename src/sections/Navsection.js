import React, { Component } from "react";
import data from "../data.json";
import Themeicon from "../components/Themeicon";
import Scrollmenu from "../components/Scrollmenu";

class Navsection extends Component {
  state = {
    firstColor: "first1",
    secondColor:"second1",
    thirdColor:"third1"
  };
  changetheme = () => {
    if (this.state.firstColor === "first1") {
      this.state.firstColor = "first2";
      this.state.secondColor = "second2";
      this.state.thirdColor = "third2"
      }
    else if (this.state.firstColor === "first2") {
      this.state.firstColor = "first3";
      this.state.secondColor = "second3";
      this.state.thirdColor = "third3"
    }
    else if (this.state.firstColor === "first3") {
      this.state.firstColor = "first1";
      this.state.secondColor = "second1";
      this.state.thirdColor = "third1"
    }
    this.setState({
      firstColor: this.state.firstColor,
      secondColor : this.state.secondColor,
      thirdColor :this.state.thirdColor
    });
    data.sectionColor.first = this.state.firstColor;
    data.sectionColor.second = this.state.secondColor;
    data.sectionColor.third = this.state.thirdColor;
    console.log(data.sectionColor.first);
  };
  render() {
    return (
      <div style={{ backgroundColor: "lightgreen" }}>
        <Scrollmenu />
        <Themeicon 
        icon={data.icons.theme} 
        onClick={() => {this.changetheme()}} />
      </div>
    );
  }
}

export default Navsection;
