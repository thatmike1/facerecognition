import React from "react";
import Rank from "../Rank/Rank";
import ImageLinkForm from "../ImageLinkForm/ImageLinkForm";

const MainUserInterface = () => {
  return (
    <div className="glass filter-effect rounded-xl w-3/4 centered p-5">
      <Rank />
      <ImageLinkForm />
    </div>
  );
};

export default MainUserInterface;
