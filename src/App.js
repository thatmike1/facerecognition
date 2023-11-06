import "./App.css";

// import MainUserInterface from "./components/MainUserInterface/MainUserInterface";
// import ParticlesComponent from "./components/ParticlesComponent/ParticlesComponent";
import Header from "./components/Header/Header";
import React, { Component } from "react";
import Rank from "./components/Rank/Rank";
import FaceRecognition from "./components/FaceRecognition/FaceRecognition";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import SignIn from "./components/SignIn/SignIn";
import Register from "./components/Register/Register";

// import Logo from "./components/Logo/Logo";

//
const returnClarifAiReqOptions = (imageUrl) => {
  const PAT = "fba5fa69be4e43f7bb3b00a5dc52a27d";
  const USER_ID = "thatmike1";
  const APP_ID = "Test";
  const MODEL_ID = "face-detection";
  const IMAGE_URL = imageUrl;

  const raw = JSON.stringify({
    user_app_id: {
      user_id: USER_ID,
      app_id: APP_ID,
    },
    inputs: [
      {
        data: {
          image: {
            url: IMAGE_URL,
          },
        },
      },
    ],
  });
  const requestOptions = {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: "Key " + PAT,
    },
    body: raw,
  };

  return { requestOptions, MODEL_ID };
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      imageUrl: "",
      user: "id",
      box: {},
      route: "signin",
      isSignedIn: false,
    };
  }

  calculateFaceLocation = (data) => {
    const clarifaiFace =
      data.outputs[0].data.regions[0].region_info.bounding_box; //gets the bounding box array from clarifai fetch response
    const image = document.getElementById("input-image");
    const width = Number(image.width); //img dimensions
    const height = Number(image.height);
    // console.log("img size:", width, height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - clarifaiFace.right_col * width,
      bottomRow: height - clarifaiFace.bottom_row * height,
    };
  };

  displayFaceBox = (box) => {
    this.setState({ box: box }); //can also be just ({box}) because of ES6
    console.log(box);
  };

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  };

  onButtonSubmit = () => {
    this.setState({ imageUrl: this.state.input });
    console.log("click");
    const { requestOptions, MODEL_ID } = returnClarifAiReqOptions(
      this.state.input
    );

    fetch(
      `https://api.clarifai.com/v2/models/${MODEL_ID}/outputs`,
      requestOptions
    )
      .then((response) => response.json())
      .then((response) =>
        this.displayFaceBox(this.calculateFaceLocation(response))
      )
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

  onRouteChange = (route) => {
    if (route === "home") {
      this.setState({ isSignedIn: true }, () => {
        console.log(this.state.route, "home", this.state.isSignedIn);
      });
    } else if (route === "signin") {
      this.setState({ isSignedIn: false }, () => {
        console.log(this.state.route, "signin", this.state.isSignedIn);
      });
    } else if (route === "register") {
      this.setState({ isSignedIn: false }, () => {
        console.log(this.state.route, "register", this.state.isSignedIn);
      });
    }
    this.setState({ route: route });
  };

  render() {
    const { isSignedIn, imageUrl, route, box } = this.state;
    return (
      <div className="App">
        <Header isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
        {route === "home" ? (
          <div>
            <Rank />
            <ImageLinkForm
              onInputChange={this.onInputChange}
              onButtonSubmit={this.onButtonSubmit}
            />
            <FaceRecognition box={box} imageUrl={imageUrl} />
          </div>
        ) : route === "signin" ? (
          <SignIn onRouteChange={this.onRouteChange} />
        ) : (
          <Register onRouteChange={this.onRouteChange} />
        )}
      </div>
    );
  }
}

export default App;
