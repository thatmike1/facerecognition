import React from "react";
import "./FaceRecognition.css";

const FaceRecognition = ({ imageUrl, box }) => {
  console.log("check", imageUrl);
  return (
    <div className=" m-auto">
      <div className=" centered mt-16 ">
        <img
          id="input-image"
          className="rounded-lgl"
          alt=""
          src={imageUrl}
          width={"500px"}
          height={"auto"}
        />
        <div
          className="bounding-box"
          style={{
            top: box.topRow,
            right: box.rightCol,
            bottom: box.bottomRow,
            left: box.leftCol,
          }}
        ></div>
      </div>
    </div>
  );
};

export default FaceRecognition;
