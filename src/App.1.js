import Header from "./components/Header/Header";
import React, { Component } from "react";
import Rank from "./components/Rank/Rank";
import FaceRecognition from "./components/FaceRecognition/FaceRecognition";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import { returnClarifAiReqOptions } from "./App";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      imageUrl: "",
      user: "id",
    };
  }

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  };

  onButtonSubmit = () => {
    this.setState({ imageUrl: this.state.input });
    console.log("click");
    fetch(
      `https://api.clarifai.com/v2/models/face-detection/versions/6dc7e46bc9124c5c8824be4822abe105/outputs`,
      returnClarifAiReqOptions(this.state.input)
    )
      .then((response) => response.json())
      .then((response) => {
        console.log("hi", response);
        // if (response) {
        //   fetch("localhost:3000/image", {
        //     method: "put",
        //     headers: { "Content-Type": "application/json" },
        //     body: JSON.stringify({
        //       id: this.state.user.id,
        //     }),
        //   })
        //     .then((response) => response.json())
        //     .then((count) => {
        //       this.setState(Object.assign(this.state.user, { entries: count }));
        //     });
        // }
        // this.displayFaceBox(this.calculateFaceLocation(response));
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Rank />
        <ImageLinkForm
          onInputChange={this.onInputChange}
          onButtonSubmit={this.onButtonSubmit}
        />
        <FaceRecognition imageUrl={this.state.imageUrl} />

        {/* <ParticlesComponent id="tsparticles" /> */}
      </div>
    );
  }
}
