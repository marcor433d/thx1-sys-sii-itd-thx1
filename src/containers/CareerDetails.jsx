import React, { useRef,useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { NavbarHome } from "../components/Navbar/NavbarHome";
import { FooterHome } from "../components/Footer/FooterHome";
import "./CareerDetails.css";


const CareerDetails = () => {
  const { id } = useParams();

  console.log("ID from useParams:", id); // Log del ID para verificar qué se está recibiendo

  const careerDetail = {
    administracion: {
      title: "Licenciatura en Administración",
      description:
        "Es un profesionista competentes en la creación, dirección e innovación de organizaciones, " +
        "capaces de enfrentar desafíos en un entorno globalizado; con visión emprendedora, ética, humana y de responsabilidad social.",
      mision:
        "Formar seres humanos con la competencia para administrar, optimizar recursos, emprender, " +
        "innovar y desarrollar organizaciones competitivas, capaces de enfrentar desafíos en un entorno global, basados en la ética y el desarrollo sustentable, desde una perspectiva integral, en un marco de responsabilidad social.",
      vision:
        "El programa de administración pretende crear recursos humanos altamente calificados para " +
        "generar agentes de cambio y convertirse en un programa que aporte a su entorno en la creación de un ecosistema de innovación empresarial y así responder a las necesidades cambiantes del mercado.",
      video: "https://www.youtube.com/embed/CApWVyoB9ys",
      campo:"El licenciado en administración puede prestar sus servicios en cualquier organización productiva de bienes y servicios, tanto en el sector público como en el privado.\n"+
      "Los profesionales de la administración estarán capacitados para generar y emprender proyectos empresariales propios o para coadyuvar en la creación de nuevas organizaciones productivas cuyas iniciativas se generan en su ámbito socioeconómico.",
      terminar:"Podrás desempeñarte en el sector público, estatal y organismos descentralizados, en todas las ramas industriales, en organismos sociales como sindicatos, cooperativas, instituciones bancarias y financieras.",
      actividades:"Durante tu estancia con nosotros podrás realizar: estancias académicas en instituciones hermanas tanto nacionales como internacionales, practicar deportes y actividades culturales, participar en concursos de innovación tecnológica, asistir"+
      "a eventos académicos como congresos, simposios y semanas académicas, ser parte de grupos estudiantiles.\n"+
      "\nTodas estas actividades buscan ofrecerte una formación integral y un ambiente propicio para tu desarrollo profesional y personal.",
      materias:"https://www.itdurango.edu.mx/licenciaturas//reticulas/administracion.pdf",
      perfil:"https://www.itdurango.edu.mx/licenciaturas//reticulas/PERFIL%20DE%20INGRESO%20ADMINISTRACION.pdf",
      perfilE:"https://www.itdurango.edu.mx/licenciaturas//reticulas/Perfil-Objetivo%20Licenciatura%20en%20Administracion.pdf",
      cordinador:"HILDA VERÓNICA GARCÍA ROJAS",
      imgcord:"../../src/assets/images/carreras/c_admon.png",
      correo:"coordinacion.administracion@itdurango.edu.mx",
    },
    bioquimica: {
        title:"Ingeniería Bioquímica",
        description:"Formar profesionales íntegros de la Ingeniería Bioquímica competentes para trabajar en equipos multidisciplinarios y multiculturales que,"+
         "con sentido ético, crítico, creativo, emprendedor y actitud de liderazgo, diseñe, controle, simule y optimice equipos, procesos y tecnologías sustentables"+
        "que utilicen recursos bióticos y sus derivados, para la producción de bienes y servicios que contribuyan a elevar el nivel de vida de la sociedad.",
        mision:
            <div>
            Selecciona y diseña equipos. <br /><br />
            • Diseña e implementa programas de gestión y aseguramiento de la calidad. <br /><br />
            • Proporciona asesoría técnica. <br /><br />
            • Desarrolla nuevos procesos para la industria de los alimentos. <br /><br />
            • Planea, organiza y administra nuevas empresas procesadoras de recursos naturales. <br /><br />
            • Realiza investigación científica y tecnológica en el campo de alimentos funcionales, biorremediación, biotecnología de minerales y alimentos transgénicos.
            </div>,
        vision:"En empresas de industrias alimentarias como por ejemplo: Coca-Cola®, Lala®, Grupo Modelo®. Centros de investigación, docencia, posgrados, organismos gubernamentales"+
        ", industria minera, laboratorios famaceúticos, biorremediación, generación de empresa propia.",
        video:"https://www.youtube.com/embed/nakMVWQgNek",
        campo:"",
        terminar:"",
        actividades:
            <div>
            • Asistir a congresos locales, nacionales e internacionales. <br /><br />
            • Visitas industriales. <br /><br />
            • Participar en los programas de movilidad nacional e internacional. <br /><br />
            • Participar en concursos de innovación tecnológica. <br /><br />
            • Formar parte de los grupos deportivos, cívicos y culturales. <br /><br />
            • Realizar estancias de verano científico de la investigación.
            </div>,
        materias:"https://www.itdurango.edu.mx/licenciaturas/reticulas/bioquimica.pdf",
        perfil:"",
        perfilE:"https://www.itdurango.edu.mx/licenciaturas/reticulas/Perfil-Objetivo%20Ingenieria%20Bioquimica.pdf",
        cordinador:"ZAYDA MABEL VALENZUELA MENA",
        imgcord:"../../src/assets/images/carreras/c_bioquimica.png",
        correo:"coordinacion.bioquimica@itdurango.edu.mx",
    },
    electrica: {
       title:"Ingeniería Electrica",
       description:"Formar profesionales competentes en Ingeniería Eléctrica con capacidad creativa, emprendedora, analítica, de liderazgo y trabajo en equipo, que realicen actividades de diseño, innovación, adaptación "+
       "y transferencia de tecnologías para resolver problemas de su área, atendiendo las necesidades del entorno globalizado, con una conciencia ética y social, asumiendo un compromiso con el desarrollo tecnológico y sustentable.",
        mision:"",
        vision:"",
        video:"https://www.youtube.com/embed/TaHNqcrBllY",
        campo:
            <div>
                •El sector eléctrico demanda ingenieros eléctricos para las plantas de generación, líneas de transporte y distribución de energía eléctrica. También existe una importante demanda empresarial en los campos de diseño y construcción de equipos eléctricos e instalaciones eléctricas y su mantenimiento, así como equipos de protección y maniobra de todo tipo de instalaciones, iluminación, diseño y desarrollo de dispositivos y aplicaciones.<br /><br />
                •Planifiación y gestión de la generació, el transporte y la distribución de la electricidad.<br /><br />
                •Dirección de proyectos de instalaciones eléctricas.<br /><br />
                •Diseño y control de máquinas eléctricas y accionamientos eléctricos.<br /><br />
                •Diseño, producción e inspección de material eléctrico y cables.<br /><br />
                •Dirección de proyectos de iluminación.<br /><br />
                •Peritajes, certificaciones e inspecciones de instalaciones eléctricas.<br /><br />
                •Diseño e instalación de sistemas de climatización.<br /><br />
            </div>,
        terminar:
            <div>
                A través de la experiencia que los profesionistas especializados en Ingeniería Eléctrica adquieren durante su trabajo, pueden contemplar la opción de crear su propia empresa en la cual ofrezca soluciones eléctricas a diferentes empresas. Inclusive puede vincularse con profesionales de otras áreas para ofrecer soluciones más integrales.<br /><br />
                Una vez terminada la carrera de Ingeniería Eléctrica podrás encontrar una alta demanda laboral en diferentes campos como industria de la transformación, manufacturera, generación y distribución de la energía eléctrica, telecomunicaciones e industria eléctrica en general, por lo tanto es posible que te desarrolles en uno de ellos.<br /><br />
                De esta manera podrás contemplar la opción de realizar una especialización en tu campo y así mejorar tus ingresos.<br /><br />
            </div>,
        actividades:
            <div>
                •Concursos académicos.<br /><br />
                •Incubación de empresas.<br /><br />
                •Asociaciones de tu especialidad.<br /><br />
                •Asesoría por psicólogos.<br /><br />
                •Programa de tutorías.<br /><br />
                •Talleres de habilidades de estudio.<br /><br />
                •Giras de estudio.<br /><br />
                •Prácticas de laboratorio.<br /><br />
                •Cada año la academia de Ingeniería Eléctrica conjuntamente con sus estudiantes organiza un congreso o simposium con objeto de propiciar un mayor intercambio de información entre estudiantes, profesores e investigadores de las diversas instituciones de educación en los ámbitos nacionales e internacionales, así como representantes del sector productivo.<br /><br />
            </div>,
        materias:"https://www.itdurango.edu.mx/licenciaturas//reticulas/electrica.pdf",
        perfil:"",
        perfilE:"https://www.itdurango.edu.mx/licenciaturas//reticulas/Perfil-Objetivo%20Ingenieria%20Electrica.pdf",
        cordinador:"ALEJANDRO MENDOZA RAMÍREZ",
        imgcord:"../../src/assets/images/carreras/c_electrica.png",
        correo:"coordinacion.electrica@itdurango.edu.mx",
    },
    arquitectura: {
        title:"Arquitectura",
        description:"Formar en competencias, arquitectos líderes, en un contexto de calidad, con valores y respeto a la sociedad"+
        " y al medio ambiente, capaces de investigar, planear, diseñar, innovar y gestionar proyectos integrales del hábitat humano aplicando métodos de vanguardia.",
        mision:"",
        vision:"",
        video:"https://www.youtube.com/embed/SqfRO9URyWU",
        campo:
          <div>
            El Profesionista especializado en Arquitectura tiene un campo de trabajo muy amplio, en el aspecto urbano como en el desarrollo de la propia arquitectura, pues en el primero tiene que ver con el diagnóstico, planeación, adecuación y proyecto de ciudades o poblaciones diversas, barrios o fraccionamientos, andadores y plazas.<br /><br />
            En la segunda, es decir en el proyecto arquitectónico, tiene posibilidades para realizar proyectos de edificaciones diversas, tales como casa habitación, edificios de oficina, espacios escolares, espacios de recreación, edificios para el transporte etc., estas actividades las puede desarrollar tanto en el sector gubernamental, en el área de la administración pública y en el sector privado.<br /><br />
          </div>,
        terminar:"Te podrás desempeñar en el sector gubernamental, área administrativa y el sector privado, desarrollando actividades como proyectista, diseñador de paisaje urbano, constructor en diversas modalidades, investigador-docente y divulgador de la cultura arquitectónica.",
        actividades:
          <div>
            Durante tu estancia en el tecnológico tendrás la oportunidad de participar en proyectos de investigación referentes al diseño arquitectónico y el espacio habitable, así como relacionarte con alumnos de otras instituciones a través de tu participación en concursos de diseño;<br /><br />
            podrás participar como ponente en eventos académicos nacionales como lo es en la Asociación de Instituciones de Enseñanza de la República Mexicana (ASINEA) y representarnos en el Encuentro Nacional de Estudiantes de Arquitectura.<br /><br />
          </div>,
        materias:"https://www.itdurango.edu.mx/licenciaturas//reticulas/arquitectura.pdf",
        perfil:"",
        perfilE:"https://www.itdurango.edu.mx/licenciaturas//reticulas/Perfil-Objetivo%20Arquitectura.pdf",
        cordinador:"ELUARD ARRIETA MATURINO",
        imgcord:"../../src/assets/images/carreras/c_arq.png",
        correo:"coordinacion.arquitectura@itdurango.edu.mx",
    },
    civil: {
        title: "Ingeniería Civil",
        description: "Formar profesionistas en ingeniería civil de manera integral, con visión humana, analítica, creativa y emprendedora, capaces de identificar y resolver problemas con eficiencia, eficacia y pertinencia, mediante la planeación, diseño, construcción, operación"+
        " y conservación de obras de infraestructura, en el marco de la globalización, la sustentabilidad y la calidad, contribuyendo al desarrollo de la sociedad.",
        mision: "",
        vision: "",
        video: "https://www.youtube.com/embed/4VwoOD_EM4s",
        campo: 
          <div>
            •Desarrolla la Ingeniería integral para la ejecución de obras civiles.<br /><br />
            •Proyecta y diseña estructuras de obras civiles de acuerdo a los Reglamentos vigentes.<br /><br />
            •Proyecta y planifica obras hidráulicas, sanitarias y de generación de energía para las diversas organizaciones con apego a la normatividad vigente y cuidado del medio ambiente.<br /><br />
            •Desarrolla nuevos procesos para la industria de los alimentos.<br /><br />
            •Coordina los procesos constructivos de obras civiles.<br /><br />
          </div>,
        terminar: 
          <div>
            •La industria privada (Compañías Constructoras, Desarrolladoras Inmobiliarias, Despachos de Ingeniería).<br /><br />
            •Dependencias Públicas (Secretaría de Comunicaciones y Transportes, Obras Públicas, Transporte).<br /><br />
            •Participando en proyectos como consultor independiente.<br /><br />
            •Creando una empresa propia.<br /><br />
          </div>,
        actividades: 
          <div>
            Como estudiante de la Carrera de Ing. Civil, tendrás la oportunidad de tener una educación dinámica y competitiva a nivel internacional, ya que los Reglamentos y criterios de Construcción que se te enseñan en el Tecnológico van de acuerdo a problemas que afectan a todos los Países.<br /><br />
            Además tendrás la disposición por iniciativa propia de formar parte de grupos deportivos y culturales y de tomar cursos básicos y avanzados de idiomas extranjeros, ya que al final se te evaluarán estos para tu titulación, todo esto con la visión a futuro de un trabajo mejor calificado.<br /><br />
            En este sentido, debes de conocer que muchas empresas Constructoras mexicanas, se dedican a construir infraestructuras en otros países en Latinoamérica, en base a una real Ingeniería Mexicana, siendo esta oportunidad que aprovechan los egresados de Ingeniería Civil del ITD.<br /><br />
          </div>,
        materias: "https://www.itdurango.edu.mx/licenciaturas//reticulas/civil.pdf",
        perfil: "",
        perfilE: "https://www.itdurango.edu.mx/licenciaturas//reticulas/Perfil-Objetivo%20Ingenieria%20Civil.pdf",
        cordinador:"GERARDO QUÉVEDO HERNÁNDEZ",
        imgcord:"../../src/assets/images/carreras/c_civil.png",
        correo:"coordinacion.civil@itdurango.edu.mx",
    },
    gestion: {
        title: "Ingeniería en Gestión Empresarial",
        description: "Formar profesionales que contribuyan a la gestión de empresas e innovación de procesos; así como al diseño, implementación"+
        " y desarrollo de sistemas estratégicos de negocios, optimizando recursos en un entorno global, con ética y responsabilidad social.",
        mision: "Formar profesionistas líderes con sentido humano, visión estratégica y sistémica, capaces de emprender su propia empresa, así como innovar,"+
        " diseñar, gestionar e implementar procesos en las organizaciones para su óptimo desarrollo, en un marco de sostenibilidad y responsabilidad social, mediante una educación vanguardista y de calidad.",
        vision: "Ser un programa educativo con excelencia académica y humana, líder en la generación y aplicación del conocimiento para la gestión integral en las organizaciones, con reconocimiento a nivel nacional,"+
        " mediante la vinculación con el sector productivo y la contribución al desarrollo regional y del país.",
        video: "https://www.youtube.com/embed/qdGSS2qS7f4",
        campo: 
          <div>
            •En el sector industrial, gubernamental y empresas de servicios.<br /><br />
            •Diseño de planes de negocio.<br /><br />
            •Reingeniería y administración de negocios.<br /><br />
            •Proyectos de eficiencia de actividades productivas.<br /><br />
          </div>,
        terminar: 
          <div>
            •Sector Empresarial.<br /><br />
            •Creación de Negocios.<br /><br />
            •Desarrollo de nuevos proyectos.<br /><br />
            •Consultoría en Administración.<br /><br />
            •Sector Gubernamental.<br /><br />
            •Empresas de Servicios.<br /><br />
            •Organizaciones Civiles.<br /><br />
          </div>,
        actividades: 
          <div>
            •Recibir una preparación de calidad que te permitirá ser competitivo en el entorno nacional e internacional.<br /><br />
            •Practicar actividades culturales y deportivas que te formarán como un profesionista integro.<br /><br />
          </div>,
        materias: "https://www.itdurango.edu.mx/licenciaturas//reticulas/gestion.pdf",
        perfil: "https://www.itdurango.edu.mx/licenciaturas//reticulas/Perfil%20de%20ingreso%20%20para%20la%20Ingenieria%20en%20Gestion%20Empresarial.pdf",
        perfilE: "https://www.itdurango.edu.mx/licenciaturas//reticulas/Perfil-Objetivo%20Ingenieria%20en%20Gestion%20Empresarial.pdf",
        cordinador:"HUGO ANTONIO RANGEL MONTELONGO",
        imgcord:"../../src/assets/images/carreras/c_gestion.png",
        correo:"coordinacion.gestion@itdurango.edu.mx",
    },
    informatica: {
        title: "Ingeniería Informática",
        description: "Formar profesionales competentes en el diseño, desarrollo, implementación y administración de proyectos informáticos con una visión sistémica,"
        +" tecnológica y estratégica; ofreciendo soluciones innovadoras e integrales a las organizaciones de acuerdo con las necesidades actuales; comprometidos con su entorno, desempeñándose con actitud ética, emprendedora y de liderazgo.",
        mision: "",
        vision: "",
        video: "https://www.youtube.com/embed/ehWeCvjKZfc",
        campo: 
          <div>
            •Ingeniero de software, formando parte de equipos de trabajo multidisciplinario en los que se desarrollan desde grandes sistemas computacionales.<br /><br />
            •Analista y diseñador de sistemas de información, atendiendo las necesidades de información de los usuarios de una organización para proveer soluciones tecnológicas.<br /><br />
            Administrador de servicios de Tecnologías de Información, identificando, evaluando y comunicando la viabilidad técnica de los requerimientos de los usuarios, y enlazando a las áreas y/o empresas de tecnología con la organización.<br /><br />
            •Desarrollador de aplicaciones innovadoras en áreas como tecnologías móviles, internet, videojuegos y seguridad de información.<br /><br />
            •Administrador de proyectos de Tecnologías de Información, planeando y dirigiendo proyectos de desarrollo tecnológico en las organizaciones.<br /><br />
            •Administrador de servicios de Tecnologías de Información, supervisando la calidad en la operación tecnológica de las organizaciones.<br /><br />
            •Emprendedor de su propio negocio de base tecnológica.<br /><br />
            •Consultor especializado en soluciones de software y tecnologías de información.<br /><br />
            •Auditor de seguridad, identificando y corrigiendo riesgos de seguridad informática en las organizaciones.<br /><br />
            •Ingeniero de Procesos, mapeando, proponiendo y ejecutando la optimización de procesos y recursos de negocios, aplicando el enfoque sistémico, así como identificando las oportunidades de mejora de procesos e innovación, para generar valor en las organizaciones utilizando la tecnología.<br /><br />
            •Administrador del cambio, definiendo e implantando planes que permitan la adopción de las nuevas tecnologías, o innovaciones en la gestión de la organización.<br /><br />
          </div>,
        terminar: 
          <div>
            Los Profesionistas Especializados en Informática podrán desarrollarse en organizaciones públicas o privadas, a nivel nacional e internacional, en donde el desarrollo y la innovación tecnológica sean estratégicos.<br /><br />
            El campo de trabajo está en empresas que cuenten con un área de apoyo en tecnologías de información o innovación de procesos, así como en empresas cuyo negocio son los productos, servicios o consultoría en tecnologías de información, incluyendo cualquier otro tipo de organización en donde se cuente con un área de apoyo en tecnologías de información.<br /><br />
          </div>,
        actividades: 
          <div>
            Durante tu estancia con nosotros realizarás prácticas en laboratorios de vanguardia, podrás realizar: estancias académicas en instituciones hermanas tanto nacionales como internacionales, practicar deportes y actividades culturales, participar en concursos de programación, de innovación tecnológica, asistir a eventos académicos como congresos, simposios y semanas académicas, ser parte de grupos estudiantiles como el club de robótica, el equipo de deportes electrónicos y de juegos de estrategia.<br /><br />
            Todas estas actividades buscan ofrecerte una formación integral y un ambiente propicio para tu desarrollo profesional y personal.<br /><br />
          </div>,
        materias: "https://www.itdurango.edu.mx/licenciaturas//reticulas/informatica.pdf",
        perfil: "",
        perfilE: "https://www.itdurango.edu.mx/licenciaturas//reticulas/Perfil-Objetivo%20Ingenieria%20Informatica.pdf",
        cordinador:"VERÓNICA FLORES NUÑEZ",
        imgcord:"../../src/assets/images/carreras/c_tic.png",
        correo:"coordinacion.informatica@itdurango.edu.mx",
    },
    mecatronica: {
        title: "Ingeniería Mecatrónica",
        description: "Formar profesionistas en la Ingeniería Mecatrónica con capacidad analítica, crítica e innovadora que le permita diseñar, proyectar, construir "+
        "y administrar equipos y sistemas mecatrónicos en el sector social, productivo y de servicios; así como integrar, operar y mantenerlos, con un compromiso ético y de calidad en un marco de desarrollo sustentable.",
        mision: "",
        vision: "",
        video: "https://www.youtube.com/embed/OhoFhStwyfg",
        campo: 
          <div>
            •Diseño mecánico: Diseñar sistemas de naturaleza mecánica, aparatos, estructuras, dispositivos e instrumentos.<br /><br />
            •Automatización: Incrementar la productividad de las empresas utilizando elementos y sistemas de control.<br /><br />
            •Manufactura: Transformar los mejores métodos de producción.<br /><br />
            •Energía: Aprovechar los recursos naturales para obtener fuentes de energía renovables y no renovables.<br /><br />
            •Investigación: Generar tecnología, para la fabricación de productos y mejora de los procesos existentes.<br /><br />
          </div>,
        terminar: 
          <div>
            •Laborando en el ámbito industrial.<br /><br />
            •Emprendedor.<br /><br />
            •Realizando estudios de posgrado.<br /><br />
            •Realizando investigación<br /><br />
            •En la docencia.<br /><br />
          </div>,
        actividades: 
          <div>
            •Prácticas de laboratorio.<br /><br />
            •Manejo de software especializado.<br /><br />
            •Estancias educativas y de investigación.<br /><br />
            •Asistencia a congresos.<br /><br />
            •Visitas industriales.<br /><br />
            •Estancias en el extranjero.<br /><br />
            •Práctica de lengua extranjera.<br /><br />
            •Actividades culturales y deportivas.<br /><br />
            •Concursos académicos (Internos y externos).<br /><br />
            •Desarrollo de proyectos físicos.<br /><br />
            •Acceso a instalaciones de primer nivel.<br /><br />
            •Egresar de una carrera acreditada.<br /><br />
            •Prácticas profesionales en la industria.<br /><br />
          </div>,
        materias: "https://www.itdurango.edu.mx/licenciaturas//reticulas/mecatronica.pdf",
        perfil: "",
        perfilE: "https://www.itdurango.edu.mx/licenciaturas//reticulas/Perfil-Objetivo%20Ingenieria%20Mecatronica.pdf",
        cordinador:"JOSÉ DE LOS RÍOS RÍOS",
        imgcord:"../../src/assets/images/carreras/c_meca.png",
        correo:"coordinacion.mecatronica@itdurango.edu.mx",
    },
    industrial: {
        title: "Ingeniería Industrial",
        description: "Formar profesionales, éticos, líderes, creativos y emprendedores en el área de Ingeniería Industrial;"+
        " competente para diseñar, implantar, administrar, innovar y optimizar sistemas de producción de bienes y servicios; con enfoque sistémico y sustentable en un entorno global.",
        mision: "",
        vision: "",
        video: "https://www.youtube.com/embed/woVmJb7vK90",
        campo: 
          <div>
          •Diseño: Diseño de productos y piezas para manufactura a través de software y equipo CAM.<br /><br />
          •Sistemas de Manufactura: Diseño, control y optimización de sistemas de producción, orientados hacia la manufactura esbelta.<br /><br />
          •Gestión de Calidad: Aseguramiento de la calidad total y mejora continua a través de implementación de Sistemas Integrales de Gestión para la certificación de empresas y sus procesos.<br /><br />
          •Desarrollo y Evaluación de Proyectos: Gestiona y administra, desarrolla y controla proyectos de mejora, innovación e inversión.<br /><br />
          </div>,
        terminar: 
          <div>
            •Industrias Manufactureras del área Metal-Mecánica.<br /><br />
            •Industrias Madereras y Muebleras.<br /><br />
            •Industrias Textiles y del Vestido.<br /><br />
            •Industrias de la Construcción.<br /><br />
            •Industrias del Plástico y Derivados.<br /><br />
            •Industria del Jugo y Refrescos.<br /><br />
            •Industrias del Calzado.<br /><br />
            •Centros de Investigación.<br /><br />
            •Industria Hotelera y Restaurantera.<br /><br />
            •Industria Maquiladora.<br /><br />
            •Industria del Transporte.<br /><br />
            •Industrias del Mantenimiento.<br /><br />
            •Industrial y Comercial.<br /><br />
          </div>,
        actividades: 
          <div>
            Durante tu estancia con nosotros podrás realizar: estancias académicas en instituciones hermanas tanto nacionales como internacionales, practicar deportes y actividades culturales, participar en concursos de innovación tecnológica, asistir a eventos académicos como congresos, simposios y semanas académicas, ser parte de grupos estudiantiles.<br /><br />
            Todas estas actividades buscan ofrecerte una formación integral y un ambiente propicio para tu desarrollo profesional y personal.<br /><br />
          </div>,
        materias: "https://www.itdurango.edu.mx/licenciaturas//reticulas/industrial.pdf",
        perfil: "",
        perfilE: "https://www.itdurango.edu.mx/licenciaturas//reticulas/Perfil-Objetivo%20Ingenieria%20Industrial.pdf",
        cordinador:"MARÍA DEL PILAR REYES SIERRA",
        imgcord:"../../src/assets/images/carreras/c_industrial.png",
        correo:"coordinacion.industrial@itdurango.edu.mx",
    },
    mecanica: {
        title: "Ingeniería Mecánica",
        description: "Formar profesionales con actitud innovadora y capacidad emprendedora para desarrollar, investigar y aplicar conocimientos científicos y "+
        "tecnológicos en áreas de la Ingeniería Mecánica, como: energía, fluidos, diseño, manufactura, automatización, control, materiales, montaje y mantenimiento de equipo,"+
        " entre otras; apto para asignar, utilizar y administrar los recursos humanos y materiales en forma segura, racional, eficiente y sustentable; con disposición creativa y emprendedora; con fundamentos éticos y comprometido en todo momento a contribuir al bienestar de la sociedad.",
        mision: "",
        vision: "",
        video: "https://www.youtube.com/embed/7i89zcK7fGk",
        campo: 
          <div>
            •Diseño mecánico: Diseñar sistemas de naturaleza mecánica, aparatos, estructuras, dispositivos e instrumentos.<br /><br />
            •Automatización: Incrementar la productividad de las empresas utilizando elementos y sistemas de control.<br /><br />
            •Manufactura: Transformar los mejores métodos de producción.<br /><br />
            •Energía: Aprovechar los recursos naturales para obtener fuentes de energía renovables y no renovables.<br /><br />
            •Investigación: Generar tecnología, para la fabricación de productos y mejora de los procesos existentes.<br /><br />
          </div>,
        terminar: 
          <div>
            •Laborando en el ámbito industrial.<br /><br />
            •Emprendedor.<br /><br />
            •Realizando estudios de posgrado.<br /><br />
            •Realizando investigación.<br /><br />
            •En la docencia.<br /><br />
          </div>,
        actividades: 
          <div>
            •Prácticas de laboratorio.<br /><br />
            •Manejo de software especializado.<br /><br />
            •Estancias educativas y de investigación.<br /><br />
            •Asistencia a congresos.<br /><br />
            •Visitas industriales.<br /><br />
            •Estancias en el extranjero.<br /><br />
            •Práctica de lengua extranjera.<br /><br />
            •Actividades culturales y deportivas.<br /><br />
            •Concursos académicos (Internos y externos).<br /><br />
            •Desarrollo de proyectos físicos.<br /><br />
            •Acceso a instalaciones de primer nivel.<br /><br />
            •Egresar de una carrera acreditada.<br /><br />
            •Prácticas profesionales en la industria.<br /><br />
          </div>,
        materias: "https://www.itdurango.edu.mx/licenciaturas//reticulas/mecanica.pdf",
        perfil: "",
        perfilE: "https://www.itdurango.edu.mx/licenciaturas//reticulas/Perfil-Objetivo%20Ingenieria%20Mecanica.pdf",
        cordinador:"ALFONSO ALBA DE LOS RÍOS",
        imgcord:"../../src/assets/images/carreras/c_mecanica.png",
        correo:"coordinacion.mecanica@itdurango.edu.mx",
    },
    quimica: {
        title: "Ingeniería Química",
        description: "Formar profesionistas en Ingeniería Química competentes para investigar, generar"+
        " y aplicar el conocimiento científico y tecnológico, que le permita identificar y resolver problemas de diseño, operación, adaptación, optimización "+
        "y administración en industrias químicas y de servicios, con calidad, seguridad, economía, usando racional y eficientemente los recursos naturales, conservando el medio ambiente, cumpliendo el código ético de la profesión y participando en el bienestar de la sociedad.",
        mision: "",
        vision: "",
        video: "https://www.youtube.com/embed/gIik-V2KWOk",
        campo: 
          <div>
          Ser un Profesionista Especializado en Química te dará la oportunidad de desempeñarte en una infinidad de posibilidades como lo podrían ser:<br /><br />
          •La industria minera y metalúrgica.<br /><br />
          •Textil.<br /><br />
          •Farmacéutica.<br /><br />
          •Cementera.<br /><br />
          •De alimentos y bebidas.<br /><br />
          •Polímeros.<br /><br />
          •Centros de investigación.<br /><br />
          •Refinerías de petróleo y petroquímicas.<br /><br />
          •Consultoría ambiental, entre muchas otras.<br /><br />
          </div>,
        terminar: "",
        actividades: "Dentro de la carrera de Ingeniería Química podrás desarrollarte como un profesionista integral, contamos con un Congreso Nacional de Ingeniería Química (CONIQ) de manera anual, Intercambios internacionales para el desarrollo de Prácticas Profesionales,"+
        " Giras de Visitas Industriales, Actividades Deportivas y Culturales, Maestros Altamente Calificados.",
        materias: "https://www.itdurango.edu.mx/licenciaturas//reticulas/quimica.pdf",
        perfil: "https://www.itdurango.edu.mx/licenciaturas//reticulas/Perfil%20de%20ingreso%20Ing.%20Quimica.pdf",
        perfilE: "https://www.itdurango.edu.mx/licenciaturas//reticulas/Perfil-Objetivo%20Ingenieria%20Quimica.pdf",
        cordinador:"LUISA EUGENIA GANDARILLA CASTRUITA",
        imgcord:"../../src/assets/images/carreras/c_quimica.png",
        correo:"coordinacion.quimica@itdurango.edu.mx",
    },
    jomicool: {
        title: "Licenciatura en Jomicool",
        description: "Formar profesionistas líderes con visión estratégica y amplio sentido ético; capaz de diseñar, desarrollar, implementar y administrar tecnología computacional para aportar soluciones innovadoras en beneficio de la sociedad; en un contexto global,"+
        " multidisciplinario y sostenible.",
        mision: "",
        vision: "",
        video: "https://www.youtube.com/embed/0_zkDiREvjw",
        campo: 
          <div>
            •Ingeniero de software, formando parte de equipos de trabajo multidisciplinario en los que se desarrollan desde grandes sistemas computacionales.<br /><br />
            •Analista y diseñador de sistemas de información, atendiendo las necesidades de información de los usuarios de una organización para proveer soluciones tecnológicas.<br /><br />
            •Administrador de servicios de Tecnologías de Información, identificando, evaluando y comunicando la viabilidad técnica de los requerimientos de los usuarios, y enlazando a las áreas y/o empresas de tecnología con la organización.<br /><br />
            •Desarrollador de aplicaciones innovadoras en áreas como tecnologías móviles, internet, videojuegos y seguridad de información.<br /><br />
            •Administrador de proyectos de Tecnologías de Información, planeando y dirigiendo proyectos de desarrollo tecnológico en las organizaciones.<br /><br />
            •Administrador de servicios de Tecnologías de Información, supervisando la calidad en la operación tecnológica de las organizaciones.<br /><br />
            •Emprendedor de su propio negocio de base tecnológica.<br /><br />
            •Consultor especializado en soluciones de software y tecnologías de información.<br /><br />
            •Auditor de seguridad, identificando y corrigiendo riesgos de seguridad informática en las organizaciones.<br /><br />
            •Administrador del cambio, definiendo e implantando planes que permitan la adopción de las nuevas tecnologías, o innovaciones en la gestión de la organización.<br /><br />
          </div>,
        terminar: 
          <div>
            Un Profesionista Especializado en Sistemas Computacionales, podrá desarrollarse en organizaciones públicas o privadas, a nivel nacional e internacional, en donde el desarrollo y la innovación tecnológica sean estratégicos.<br /><br />
            El campo de trabajo está en empresas cuyo negocio es el desarrollo de software y/o las tecnologías de información, así como en cualquier otro tipo de organización que cuente con un área de apoyo en tecnologías de información.<br /><br />
          </div>,
        actividades: 
          <div>
            Durante tu estancia con nosotros realizarás prácticas en laboratorios de vanguardia, podrás realizar: estancias académicas en instituciones hermanas tanto nacionales como internacionales, practicar deportes y actividades culturales, participar en concursos de programación, de innovación tecnológica, asistir a eventos académicos como congresos, simposios y semanas académicas, ser parte de grupos estudiantiles como el club de robótica, el equipo de deportes electrónicos y de juegos de estrategia.<br /><br />
            Todas estas actividades buscan ofrecerte una formación integral y un ambiente propicio para tu desarrollo profesional y personal.<br /><br />
          </div>,
        materias: "https://www.itdurango.edu.mx/licenciaturas//reticulas/sistemas.pdf",
        perfil: "",
        perfilE: "https://www.itdurango.edu.mx/licenciaturas//reticulas/Perfil-Objetivo%20Ingenieria%20en%20Sistemas%20Computacionales.pdf",
        cordinador:"SALVADOR RAMOS COLLINS",
        imgcord:"../../src/assets/images/carreras/c_sistemas.png",
        correo:"coordinacion.sistemas@itdurango.edu.mx",
    },
    semiconductores: {
        title: "Ingeniería en Semiconductores",
        description: "Formar ingenieros competentes en el diseño y síntesis de materiales semiconductores, componentes electrónicos y circuitos integrados a través de la investigación y desarrollo tecnológico, que coadyuven al fortalecimiento de la industria estratégica de los semiconductores de nuestra nación, propiciando el crecimiento de la cadena de valor, dentro de un marco legal y sostenible con un sentido social, ético y humanista.",
        mision: "",
        vision: "",
        video: "https://www.youtube.com/embed/-r687V8yqKY",
        campo: 
          <div>
            •Producción de circuitos integrados.<br /><br />
            •Diseño y fabricación de sensores.<br /><br />
            •Diseño y fabricación de celdas fotovoltaicas.<br /><br />
            •Sintetización de materiales semiconductores.<br /><br />
            •Sistemas de alta tecnología en producción de semiconductores.<br /><br />
            •Pruebas y caracterización de circuitos semiconductores.<br /><br />
            •Diseño de sistemas embebidos.<br /><br />
          </div>,
        terminar: 
        <div>
          •Sector energético.<br /><br />
          •Sector minero.<br /><br />
          •Sector de Telecomunicaciones.<br /><br />
          •Sector Salud.<br /><br />
          •Sector Educativo.<br /><br />
          •Sector Manufactura.<br /><br />
          •Investigación.<br /><br />
        </div>,
        actividades: 
          <div>
            •Concursos académicos.<br /><br />
            •Incubación de empresas.<br /><br />
            •Asociaciones de tu especialidad.<br /><br />
            •Asesoría por psicólogos.<br /><br />
            •Programa de tutorías.<br /><br />
            •Talleres de habilidades de estudio.<br /><br />
            •Prácticas de laboratorio.<br /><br />
          </div>,
        materias: "https://www.itdurango.edu.mx/licenciaturas//reticulas/semiconductores.pdf",
        perfil: "",
        perfilE: "",
        cordinador:"Julia Sabel Hernández Carrillo",
        imgcord:"../../src/assets/images/carreras/c_semi.png",
        correo:"coordinacion.semiconductores@itdurango.edu.mx",
    },
    electronica: {
      title:"Ingeniería Electrónica",
      description:"Formar profesionistas competentes para diseñar, modelar, implementar, operar, integrar, mantener, instalar y administrar sistemas electrónicos; así como innovar"+
   "y transferir tecnología electrónica existente y emergente en proyectos interdisciplinarios y multidisciplinarios, a nivel nacional e internacional, con capacidad de resolver problemas"+
   " y atender las necesidades de su entorno con ética, actitud analítica, emprendedora y creativa, comprometidos con el desarrollo sustentable.",
       mision:"",
       vision:"",
       video:"https://www.youtube.com/embed/zEb6ygbEn-Y",
       campo:
           <div>
               •Los sectores de servicios e industrial, demandan profesionistas competentes en el área de Electrónica, para la solución a sus múltiples necesidades sentidas, en su quehacer diario. También existe una importante demanda empresarial en los campos de diseño y construcción de equipos electrónicos así como en el mantenimiento de los mismos.<br /><br />
               •Análisis para el control de redes de comunicación de datos.<br /><br />
               •Mantenimiento de equipo médico.<br /><br />
               •Telecomunicación móvil.<br /><br />
               •Sistemas de Control e Instrumentación.<br /><br />
               •Sistemas Digitales.<br /><br />
               •Diseño de Sistemas Electrónicos.<br /><br />
               •Optimizar los procesos de obtención de Energías Renovables.<br /><br />
           </div>,
       terminar:
           <div>
               •Sector Energético.<br /><br />
               •Sector Minero.<br /><br />
               •Sector de Telecomunicaciones.<br /><br />
               •Sector Salud.<br /><br />
               •Sector Educativo.<br /><br />
               •Sector Manufactura.<br /><br />
           </div>,
       actividades:
           <div>
               •Concursos académicos.<br /><br />
               •Incubación de empresas.<br /><br />
               •Asociaciones de tu especialidad.<br /><br />
               •Asesoría por psicólogos.<br /><br />
               •Programa de tutorías.<br /><br />
               •Talleres de habilidades de estudio.<br /><br />
               •Giras de estudio.<br /><br />
               •Prácticas de laboratorio.<br /><br />
           </div>,
       materias:"https://www.itdurango.edu.mx/licenciaturas//reticulas/electronica.pdf",
       perfil:"",
       perfilE:"https://www.itdurango.edu.mx/licenciaturas//reticulas/Perfil-Objetivo%20Ingenieria%20Electronica.pdf",
       cordinador:"OMAR CARIM TRIANA GALLEGOS",
       imgcord:"../../src/assets/images/carreras/c_electronica.png",
       correo:"coordinacion.electronica@itdurango.edu.mx",
    },

  };

  const career = careerDetail[id];

  console.log("Career Detail:", career); // Log del detalle de la carrera para verificar qué datos se están obteniendo
//Busca si existe la pagina sino manda a una pagina de error
  if (!career) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[100dvh] bg-gray-50 dark:bg-gray-900 px-4 sm:px-6 md:px-8">
        <div className="max-w-md w-full space-y-6 text-center">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-50">{career ? 'Detalles de la carrera' : 'No se encontró la carrera'}</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              {career ? career.name : "Lo sentimos, la página que buscas no pudo ser encontrada. Revisa la URL o intenta buscar de nuevo."}
            </p>
          </div>
          <div className="flex justify-center">
            <img src="../../src/assets/images/Jomi.jpg" alt="Error illustration" width={200} height={200} className="w-auto h-auto" />
          </div>
        </div>
      </div>
    );
  }

  const playerRef = useRef(null);

  useEffect(()=>{
    const tag =document.createElement('script');
    tag.src='https://www.youtube.com/iframe_api';
    const firstScriptTag=document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag,firstScriptTag);

    const onPlayerReady = event => {
        // Aquí puedes agregar cualquier lógica que desees cuando el reproductor esté listo
      };

      const onPlayerStateChange = event => {
        // Aquí puedes agregar cualquier lógica que desees cuando el estado del reproductor cambie
      };

      window.onYouTubeIframeAPIReady = () => {
        playerRef.current = new window.YT.Player('youtube-player', {
          height: '360',
          width: '640',
          videoId: career.video.split("/").pop(), // Extracción del ID del video desde el enlace
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          },
        });
      };  
      return () => {
        if (playerRef.current) {
          playerRef.current.destroy();
        }
        delete window.onYouTubeIframeAPIReady;
      };
  },[career]);

  return (
    <div className="w-screen h-auto bg-gradient-linear">
      <nav>
        <NavbarHome />
      </nav>
      <main>
  {(career.mision || career.vision || career.description || career.campo || career.terminar || career.actividades) && (
    <div className="w-screen h-auto bg-gradient-to-r from-blue-100 to-white">
      <div className="container px-4 md:px-6">
        <h1 className="text-4xl font-bold text-[#0d2d5e] text-center">
          {career.title}
        </h1>
        <div className="flex justify-center gap-8 mt-8">
          <Link to="https://www.itdurango.edu.mx/aspirantes/" className="flex items-center gap-2 text-[#b3d1ff] hover:underline">
            💻Proceso de Admisión
          </Link>
          <Link to={career.materias}className="flex items-center gap-2 text-[#b3d1ff] hover:underline">
            📚Materias a Cursar
          </Link>
          <Link to={career.perfil} className="flex items-center gap-2 text-[#b3d1ff] hover:underline">
            🪪Perfil de Ingreso
          </Link>
          <Link to={career.perfilE} className="flex items-center gap-2 text-[#b3d1ff] hover:underline">
            🧑🏿‍🎓Perfil de Egreso
          </Link>
        </div>
        <section className="mt-12 md:mt-16 lg:mt-20">
          <div className="grid gap-10 sm:px-10 md:grid-cols-2 md:gap-16">
            <div className="aspect-video overflow-hidden rounded-xl">
                <div id="youtube-player"></div>
            </div>
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-blue-900 px-3 py-1 text-4xl font-bold text-[#f3f6f4] text-center">
                Carrera
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                {career.title}
              </h2>
              <div className="grid gap-4">
                {career.description && (
                  <div>
                    <h3 className="text-xl font-bold">Objetivo General</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      {career.description}
                    </p>
                  </div>
                )}
                {career.mision && (
                  <div>
                    <h3 className="text-xl font-bold">Misión</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      {career.mision}
                    </p>
                  </div>
                )}
                {career.vision && (
                  <div>
                    <h3 className="text-xl font-bold">Visión</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      {career.vision}
                    </p>
                  </div>
                )}
                {career.campo && (
                  <div>
                    <h3 className="text-xl font-bold">Campo laboral</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      {career.campo}
                    </p>
                  </div>
                )}
                {career.terminar && (
                  <div>
                    <h3 className="text-xl font-bold">Al terminar tu carrera</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      {career.terminar}
                    </p>
                  </div>
                )}
                {career.actividades && (
                  <div>
                    <h3 className="text-xl font-bold">Actividades a desarrollar</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      {career.actividades}
                    </p>
                  </div>
                )}
              </div>
              {/*
              <div className="grid grid-cols-2 gap-4 mt-8 sm:px-10">
                <img
                  src={career.img}
                  alt="Carrera de Administración"
                  width={300}
                  height={200}
                  className="rounded-lg object-cover"
                />
                <img
                  src="/placeholder.svg"
                  alt="Carrera de Administración"
                  width={300}
                  height={200}
                  className="rounded-lg object-cover"
                />
              </div>*/}
            </div>
          </div>
        </section>
        <div className="bg-[#e6e6e6] p-4 grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 w-full">
              <div className="space-y-2">
                <h2 className="text-lg font-bold">MAYORES INFORMES</h2>
                <p className="font-semibold">Departamento de Desarrollo Académico</p>
                <div>
                  <h3 className="font-semibold">Contacto</h3>
                  <p>Teléfono:</p>
                  <p>(618) 829-0900 ext 136</p>
                  <p>Correo Electrónico:</p>
                  <p>depdesarrolloacademico@durango.tecnm.mx</p>
                </div>
              </div>
              <div className="col-span-1">
                <img src={career.imgcord} alt="Person" className="w-64 h-64 md:w-100 md:h-100 rounded-full" />
              </div>
              <div className="space-y-2">
                <h2 className="text-lg font-bold">COORDINADOR</h2>
                <p className="font-semibold">{career.cordinador}</p>
                <div>
                  <h3 className="font-semibold">Contacto</h3>
                  <p>Correo Electrónico:</p>
                  <p>{career.correo}</p>
                </div>
              </div>
            </div>
      </div>
    </div>
  )}
</main>
      <footer>
        <FooterHome />
      </footer>
    </div>
  );
};

export {CareerDetails};
