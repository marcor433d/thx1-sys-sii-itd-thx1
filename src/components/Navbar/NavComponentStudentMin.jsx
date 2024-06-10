import { useNavigate, useLocation } from "react-router-dom";
import { ButtonVerMin } from "../Button/ButtonVerMin";
import { ButtonExitMin } from "../Button/ButtonExitMin";
import { Home } from "../../../src/assets/svg/Home";
import { DateShool } from "../../../src/assets/svg/DateShool";
import { Notes } from "../../../src/assets/svg/Notes";
import { Calendar } from "../../../src/assets/svg/Calendar";
import { NotesParcial } from "../../../src/assets/svg/NotesParcial";
import { Incription } from "../../../src/assets/svg/Incription";
import { Math } from "../../../src/assets/svg/Math";
import { Group } from "../../../src/assets/svg/Group";
import { Deport } from "../../../src/assets/svg/Deport";
import { Pencil } from "../../../src/assets/svg/Pencil";
import { Exit } from "../../../src/assets/svg/Exit";

function NavComponentStudentMin({ toggleNav }) {
  return (
    <nav className="my-4">
      <ButtonVerMin title="Inicio" href="/student" Icon={Home} />
      <div className="border-b border-gray-300 mt-4 mb-2"></div>
      <div className="text-xs text-gray-400 uppercase mb-2"></div>
      <ButtonVerMin title="Datos Escolares" href="/ruta2" Icon={DateShool} />
      <ButtonVerMin href="/ruta3" Icon={Notes} />
      <ButtonVerMin href="/ruta4" Icon={Calendar} />
      <ButtonVerMin href="/ruta5" Icon={NotesParcial} />
      <div className="border-b border-gray-300 mt-4 mb-2"></div>
      <div className="text-xs text-gray-400 uppercase mb-2"></div>
      <ButtonVerMin href="/ruta6" Icon={Incription} />
      <ButtonVerMin href="/ruta7" Icon={Math} />
      <ButtonVerMin href="/ruta8" Icon={Group} />
      <ButtonVerMin href="/ruta9" Icon={Deport} />
      <div className="border-b border-gray-300 mt-4 mb-2"></div>
      <div className="text-xs text-gray-400 uppercase mb-2"></div>
      <ButtonVerMin href="/ruta10" Icon={Pencil} />
      <div className="border-b border-gray-300 mt-4 mb-2"></div>
      <div className="text-xs text-gray-400 uppercase mb-2"></div>
      <ButtonExitMin href="/" Icon={Exit} />
    </nav>
  );
}

export { NavComponentStudentMin };
