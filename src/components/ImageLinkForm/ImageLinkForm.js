import React from "react";

const ImageLinkForm = ({ onInputChange, onBtnSubmit }) => {
  return (
    <div>
      {/* <p className="text-lg subpixel-antialiased ">
        {
          "This is the Facinator, it will detect faces in pictures. Try git out!"
        }
      </p> */}
      <div className="flex justify-center">
        <input
          onChange={onInputChange}
          className="text-lg subpixel-antialiased w-1/2 rounded-l-lg p-1"
          placeholder="This is the Facinator, it will detect faces in pictures. Try git out!"
        ></input>
        <button
          onClick={onBtnSubmit}
          className="w-auto text-lg subpixel-antialiased rounded-r-lg p-2 bg-blue-500 text-white font-medium"
        >
          Detect
        </button>
      </div>
    </div>
  );
};

export default ImageLinkForm;
