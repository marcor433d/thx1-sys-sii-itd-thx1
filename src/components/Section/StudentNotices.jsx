import React from "react";
import { NoticeCardStudent } from "../Card/NoticeCardStudent";

const StudentNotices = () => {
  return (
    <div className="w-8/10 h-40vh mt-4 grid items-center m-auto">
      <h3 className="text-2xl font-bold mb-4 p-0 m-0">Avisos</h3>
      <div className="grid grid-cols-3 items-center justify-center mb-8 gap-8">
        <div className="self-center place-self-center">
          <NoticeCardStudent
            title={"Reinscripción"}
            inf={
              " El horario de reinscripción será publicado después de las 11 pm (hora en la que el banco proporciona la información de los pagos registrados)."
            }
          />
        </div>
        <div className="self-center place-self-center">
          <NoticeCardStudent
            title={"Tutorías Obligatorias"}
            inf={
              "A todos los alumnos que vayan a cursar segundo semestre, favor de cargar tutorías (son créditos complementarios). Es de carácter obligatorio."
            }
          />
        </div>
        <div className="self-center place-self-center">
          <NoticeCardStudent
            title={"Reinscripción"}
            inf={
              " El horario de reinscripción será publicado después de las 11 pm (hora en la que el banco proporciona la información de los pagos registrados)."
            }
          />
        </div>
      </div>
    </div>
  );
};

export { StudentNotices };
