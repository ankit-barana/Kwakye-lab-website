import React from "react";
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <div className="relative bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <a href="/">
                <span className="sr-only">Leslie Kwakye Lab</span>
                <img className="h-8 w-auto sm:h-10" src={logo} alt="" />
              </a>
            </div>
            <div className="-mr-2 -my-2 md:hidden">
              <button
                type="button"
                className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-400"
                onClick={() => setOpen(!open)}
              >
                <span className="sr-only">Research</span>
                {/* Heroicon name: outline/menu */}
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
            <nav className="hidden md:flex space-x-10">
              <NavLink
                className="navlink text-base font-medium text-gray-500 hover:text-gray-900"
              >
                People
              </NavLink>

              <NavLink
                className="navlink text-base font-medium text-gray-500 hover:text-gray-900"
              >
                Alumni
              </NavLink>
            </nav>
          </div>
        </div>

        <div
          className={
            open
              ? "z-10 opacity-100 scale-100 transition ease-out duration-200 absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
              : "-z-10 opacity-0 scale-95 absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
          }
        >
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50 ">
            <div className={"pt-5 pb-6 px-5"}>
              <div className="flex items-center justify-between">
                <div>
                  <img className="h-8 w-auto" src={logo} alt="Workflow" />
                </div>
                <div className="-mr-2">
                  <button
                    type="button"
                    className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-400"
                    onClick={() => setOpen(!open)}
                  >
                    <span className="sr-only">Close menu</span>
                    {/* Heroicon name: outline/x */}
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="mt-6 ">
                <nav className="grid gap-y-8 ">
                  <NavLink
                    to="/"
                    className="navlink -m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                    onClick={() => setOpen(!open)}
                  >
                    <span
                      className={"ml-3 text-base font-medium text-gray-900"}
                    >
                      Home
                    </span>
                  </NavLink>
                  
                  <NavLink
                    to="/how"
                    className="navlink -m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                    onClick={() => setOpen(!open)}
                  >
                    <span className="ml-3 text-base font-medium text-gray-900">
                      News
                    </span>
                  </NavLink>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
