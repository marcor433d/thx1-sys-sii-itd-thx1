import React from "react";

const Footer = () => {
  return (
    <footer className="h-10vh w-full bg-gradient-linear mt-8">
      <div className="w-9/10 m-auto h-full grid grid-cols-2 justify-center items-center">
        <div>
          <p className="text-white font-extralight">
            © 2024 Instituto Tecnológico de Durango. Todos los derechos
            reservados.
          </p>
        </div>
        <div className="flex space-x-4 justify-end text-white">
          <a
            href="#"
            className="hover:underline opacity-75 hover:opacity-100 transform transition duration-500 "
          >
            Aviso de Privacidad
          </a>
          <a
            href="#"
            className="hover:underline opacity-75 hover:opacity-100 transform transition duration-500 "
          >
            Términos y Condiciones
          </a>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
