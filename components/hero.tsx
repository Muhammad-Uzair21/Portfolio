import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { FaDownload } from "react-icons/fa";
import TechLogosBackground from "./LogosBackground";

const hero = () => {
  return (
    <div className="pb-20 pt-36 relative" id="home">
      <div>
        <Spotlight
          className="-top-40 -left-10 h-screen md:-top-20 md:-left-32"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div
        className="h-screen w-full dark:bg-black-100 dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <TechLogosBackground />

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Dynamic web magic with Next.Js
          </h2>

          <TextGenerateEffect
            words={"Transforming Concepts Into Seamless User Experience"}
            className="text-center text-[40px] md:5xl lg:6xl"
          />
          <p className="text-center text-sm md:text-lg lg:text-2xl mb-4">
            Hi! I&apos;m<span className="text-purple"> Uzair</span>, a Next.Js
            developer based in Karachi, Pakistan
          </p>

          <a href="/Uzair_Resume_Cybersecurity.pdf" download>
            <MagicButton
              title="Download Resume"
              position="right"
              icon={<FaDownload className="w-4 h-4 ml-2" />}
            />
          </a>
          <p className="text-xs text-blue-100 mt-8 tracking-wide opacity-45">
            🔄 Full site rebrand in progress - new experience coming soon
          </p>
        </div>
      </div>
    </div>
  );
};

export default hero;
