import React from "react";

const HeaderDash = () => {
  return (
    <div className="bg-gradient-linear h-10vh py-4 shadow-xl flex items-center">
      <div className="w-9/10 m-auto items-center grid grid-cols-2 justify-center">
        <div className="flex justify-start items-center">
          <img
            className="h-16"
            src="../../src/assets/images/logoITDFull.png"
            alt="Escudo ITD"
          />
          <h1 className="ml-2 text-white font-bold text-xl">
            Instituto Tecnológico de Durango
          </h1>
        </div>
        <div className="justify-self-end">
          <div className="flex justify-end items-center">
            <p className="text-white mr-8">
              ¡Bienvenido al portal web del ITD!
            </p>
            <a href="">
              <img
                className="rounded-full text-itd-blue shadow-2xl transform transition duration-500 hover:scale-110 hover:rotate-360 w-12 opacity-80 hover:opacity-100"
                src="../../src/assets/images/Jomi.jpg"
                alt="Usuario Jomi"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export { HeaderDash };
