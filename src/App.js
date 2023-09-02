import "./App.css";

// import MainUserInterface from "./components/MainUserInterface/MainUserInterface";
// import ParticlesComponent from "./components/ParticlesComponent/ParticlesComponent";
import Header from "./components/Header/Header";
import React, { Component } from "react";
import Rank from "./components/Rank/Rank";
import FaceRecognition from "./components/FaceRecognition/FaceRecognition";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Clarifai from "clarifai";
// import Logo from "./components/Logo/Logo";

const app = new Clarifai.App({
  apiKey: "fba5fa69be4e43f7bb3b00a5dc52a27d",
});

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
    };
  }

  onInputChange = (event) => {
    console.log(event.target.value);
  };

  onBtnSubmit = () => {
    console.log("click");
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Rank />
        <ImageLinkForm
          onInputChange={this.onInputChange}
          onBtnSubmit={this.onBtnSubmit}
        />
        <FaceRecognition />

        {/* <ParticlesComponent id="tsparticles" /> */}
      </div>
    );
  }
}

export default App;
