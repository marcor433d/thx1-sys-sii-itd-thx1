import React, { useState, useEffect } from "react";
import { NoticeCard } from "../Card/NoticeCard";
import "./NoticeHome.css";
import { PrimaryButton } from "../Button/PrimaryButton";
import { FooterHome } from "../Footer/FooterHome";

function NoticeHome() {
  return (
    <>
      <div className="w-screen h-screen mt-32">
        <div className="w-8/10 notice-container h-8/10 m-auto">
          <h4 className="text-black font-extrabold text-3xl flex items-center mt-10">
            Noticias
          </h4>
          <div className="w-full h-full m-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center justify-center">
            <NoticeCard />
            <NoticeCard />
            <NoticeCard />
            <NoticeCard />
          </div>
          <div className="flex items-start justify-center">
            <PrimaryButton text="Ver más" subtext="Noticias" />
          </div>
        </div>
        <FooterHome />
      </div>
    </>
  );
}

export { NoticeHome };
