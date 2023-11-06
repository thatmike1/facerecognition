import React from "react";

const Rank = () => {
  return (
    <div className="z-10 mt-5 mb-3 flex flex-col justify-center items-center">
      <div className="text-3xl font-semibold leading-relaxed text-blue-500">
        {"Mike, your current rank is..."}
      </div>
      <div className="rounded-lgl px-4 py-2 text-3xl font-semibold leading-relaxed text-white bg-blue-500 max-w-min">
        {"#69"}
      </div>
    </div>
  );
};

export default Rank;
