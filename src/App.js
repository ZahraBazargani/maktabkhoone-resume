import React, { Component } from "react";

import TitlesAndIcons from "./sections/TitlesAndIcons";
import Aboutsection from "./sections/Aboutsection";
import Skillsection from "./sections/Skillsection";
// import NavSection from "./sections/Navsection";
import "./App.css";
import data from "./data.json";
import Themeicon from "./components/Themeicon";
import Scrollmenu from "./components/Scrollmenu";
import SnowStorm from 'react-snowstorm';

//function App() {
class App extends Component {
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
  };
  render() {
    return (
      <div className="App">
        <SnowStorm   animationInterval={"10"} />
        <Scrollmenu />
        <Themeicon
          icon={data.icons.theme}
          onClick={() => {
            this.changetheme();
          }}
        />

        <TitlesAndIcons />
        <Aboutsection />
        <Skillsection />
      </div>
    );
  }
}

export default App;
