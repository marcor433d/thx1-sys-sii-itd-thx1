import React from "react";
import { EmailInput } from "../Input/EmailInput";
import { PasswordInput } from "../Input/PasswordInput";
import { useNavigate } from "react-router-dom";

function LoginCard() {
  const navigate = useNavigate();
  return (
    <div className="w-8/10 h-9/10 self-center place-self-center grid grid-cols-1 auto-rows-auto items-center justify-center">
      <div className="grid items-center">
        <img
          src="../../src/assets/images/logoITDFull.png"
          alt="Escudo del ITD"
          className="w-48 m-auto"
        />
        <h1 className="mt-10 text-3xl font-bold text-itd-blue text-center">
          Bienvenido de Nuevo 👋​
        </h1>
        <p className="text-center mt-2">
          Por favor inicie sesión en su cuenta.
        </p>
        <div className="w-8/10 grid m-auto">
          <EmailInput />
          <PasswordInput />
          <a className="mt-2 text-gray-500 text-right cursor-pointer hover:text-itd-blue">
            ¿Olvidaste tu contraseña?
          </a>
          <button
            onClick={() => navigate("/student")}
            className="w-full flex justify-center items-center gap-2 p-4 cursor-pointer rounded-md shadow-2xl text-white font-semibold bg-gradient-to-r from-[#5C1B33] via-[#942B52] to-[#C2396C] hover:shadow-xl hover:shadow-rose-800 hover:scale-105 hover:from-[#C2396C] hover:to-[#5C1B33] mt-8 text-lg transform transition duration-500"
          >
            Inicia sesión
          </button>
        </div>
      </div>
    </div>
  );
}

export { LoginCard };
