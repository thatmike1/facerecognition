import React from "react";

const Navigation = ({ onRouteChange }) => {
  return (
    <nav className="flex justify-end p-1 pr-3">
      {/* <p className="subpixel-antialiased text-2xl block py-2 pl-3 pr-4 bg-transparent md:p-0 md:dark:text-blue-500 transition duration-300 hover:scale-90"> */}
      <button
        onClick={() => onRouteChange("signin")}
        className=" self-center text-2xl font-semibold whitespace-nowrap text-white"
      >
        Sign out
      </button>
    </nav>
  );
};

export default Navigation;
