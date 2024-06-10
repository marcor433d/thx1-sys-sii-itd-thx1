import React, { useEffect, useRef } from "react";
import { Header } from "../components/Header/Header";
import { SectionInf } from "../components/Section/SectionInf";
import { FloatButton } from "../components/Button/FloatButton";
import { MainHome } from "../components/Main/MainHome";
import { FloatScrollInf } from "../components/Button/FloatScrollInf";
import { SectionInfCarr } from "../components/Section/SectionInfCarr";
import scrollIntoView from "scroll-into-view-if-needed";
import { NoticeHome } from "../components/Section/NoticeHome";
import "./HomePage.css";

function HomePage() {
  return (
    <>
      <div>
        <Header />
        <div className="container-main-home m-auto">
          <SectionInf />
        </div>
        <div className="w-screen h-15vh bg-gradient-linear">
          <SectionInfCarr />
        </div>
      </div>
      <main className="bg-gradient-linear-white">
        <div>
          <MainHome />
        </div>
        <div>
          <NoticeHome />
        </div>
      </main>
      <FloatButton />
      <FloatScrollInf />
    </>
  );
}

export { HomePage };
