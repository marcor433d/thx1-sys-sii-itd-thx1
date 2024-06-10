import React, { useState } from "react";
import "./StudentPage.css";
import { HomeButtomNavDash } from "../components/Button/HomeButtomNavDash";
import { HomeButtomNavDashMin } from "../components/Button/HomeButtomNavDashMin";
import { NavComponentStudent } from "../components/Navbar/NavComponentStudent";
import { NavComponentStudentMin } from "../components/Navbar/NavComponentStudentMin";

function StudentBase() {
  const [isNavVisible, setNavVisible] = useState(true);

  const toggleNav = () => {
    setNavVisible(!isNavVisible);
  };

  return (
    <>
      {isNavVisible ? (
        <div className="h-full w-full sm:w-3/24 bg-white text-itd-blue grid grid-cols-1 auto-rows-auto items-center justify-center transform transition duration-500 scale-100 opacity-90 hover:opacity-100 text-xs shadow-2xl">
          <div
            className={`px-2 text-xs transition-transform duration-700 ease-in-out transform ${
              isNavVisible ? "translate-y-0" : "translate-y-full"
            }`}
          >
            <HomeButtomNavDash toggleNav={toggleNav} />
            <NavComponentStudent />
          </div>
        </div>
      ) : (
        <div className="h-full w-full sm:w-1/24 bg-white shadow-2xl text-itd-blue grid grid-cols-1 auto-rows-auto items-center justify-center scale-100 opacity-95 hover:opacity-100 text-xs">
          <div
            className={`px-2 text-xs transition-transform duration-700 ease-in-out transform ${
              isNavVisible ? "translate-y-full" : "translate-y-0"
            }`}
          >
            <HomeButtomNavDashMin toggleNav={toggleNav} />
            <NavComponentStudentMin />
          </div>
        </div>
      )}
    </>
  );
}

export { StudentBase };
