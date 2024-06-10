import { ButtonVer } from "../Button/ButtonVer";
import { ButtonExit } from "../Button/ButtonExit";
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

function NavComponentStudent({ toggleNav }) {
  return (
    <nav className="mt-4">
      <ButtonVer title="Inicio" href="/student" Icon={Home} />
      <div className="border-b border-gray-300 mt-4 mb-2"></div>
      <p className="text-xs text-gray-400 uppercase mb-2">
        Información Escolar
      </p>
      <ButtonVer title="Datos Escolares" href="/ruta2" Icon={DateShool} />
      <ButtonVer title="Kardex" href="/ruta3" Icon={Notes} />
      <ButtonVer title="Horario" href="/ruta4" Icon={Calendar} />
      <ButtonVer title="Notas de Parcial" href="/ruta4" Icon={NotesParcial} />
      <div className="border-b border-gray-300 mt-4 mb-2"></div>
      <p className="text-xs text-gray-400 uppercase mb-2">Inscripciones</p>
      <ButtonVer title="Inscripción" href="/ruta4" Icon={Incription} />
      <ButtonVer title="Materias" href="/ruta4" Icon={Math} />
      <ButtonVer title="Grupos Cargados" href="/ruta4" Icon={Group} />
      <ButtonVer title="Extraescolares" href="/ruta4" Icon={Deport} />
      <div className="border-b border-gray-300 mt-4 mb-2"></div>
      <p className="text-xs text-gray-400 uppercase mb-2">Evaluaciones</p>
      <ButtonVer title="Docente" href="/ruta4" Icon={Pencil} />
      <div className="border-b border-gray-300 mt-4 mb-2"></div>
      <p className="text-xs text-gray-400 uppercase mb-2">Cuenta</p>
      <ButtonExit title="Cerrar Sesión" href="/" Icon={Exit} />
    </nav>
  );
}

export { NavComponentStudent };
