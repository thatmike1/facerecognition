import React from "react";
import Logo from "../Logo/Logo";
// import Navigation from "../Navigation/Navigation";

const Header = ({ onRouteChange, isSignedIn }) => {
  if (isSignedIn) {
    return (
      <nav className="glass bg-gray-800 ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="#" className="flex items-center">
            <Logo />
          </a>
          {/* <button
          data-collapse-toggle="navbar-solid-bg"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-solid-bg"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button> */}
          <div className=" w-min md:block md:w-auto" id="navbar-solid-bg">
            <button
              onClick={() => onRouteChange("signin")}
              className=" self-center text-2xl font-semibold whitespace-nowrap text-white"
            >
              Sign out
            </button>
          </div>
        </div>
      </nav>
    );
  } else if (!isSignedIn) {
    return (
      <nav className="z-10 bg-gray-900 ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="#" className="flex items-center">
            <Logo />
          </a>
          {/* <button
          data-collapse-toggle="navbar-solid-bg"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-solid-bg"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button> */}
          <div className=" w-min md:block md:w-auto" id="navbar-solid-bg">
            <button
              onClick={() => onRouteChange("signin")}
              className="mx-4 self-center text-2xl font-semibold whitespace-nowrap text-white"
            >
              Sign in
            </button>
            <button
              onClick={() => onRouteChange("register")}
              className="mx-4 self-center text-2xl font-semibold whitespace-nowrap text-white"
            >
              Register
            </button>
          </div>
        </div>
      </nav>
    );
  }
};

export default Header;
