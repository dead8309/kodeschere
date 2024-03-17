import React from "react";
import { Spotlight } from "@/components/Spotlight";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import Feat from "../components/Landing/Feat";
import Success from "../components/Landing/Success";
import Showcase from "@/components/Showcase/Showcase";
import Footer from "@/components/Footer";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter";
import AboutUs from "@/components/AboutUs";
export default function Page() {
  const subTitle = [
    {
      text: "Your",
      className:
        "text-xl md:text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50",
    },
    {
      text: "Smart",
      className:
        "text-xl md:text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50",
    },
    {
      text: "home,",
      className:
        "text-xl md:text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50",
    },
    {
      text: "Your",
      className:
        "text-xl md:text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50",
    },
    {
      text: "way.",
      className:
        "text-xl md:text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50",
    },
  ];
  return (
    <div className="overflow-hidden">
      <div className="absolute inset-0 h-full w-full bg-[radial-gradient(#F6F6F6,transparent_1px)] [background-size:16px_16px]">
        <div className="w-full rounded-md flex md:items-center md:justify-center antialiased bg-grid-white/[0.02] relative ">
          <Spotlight
            className="-top-40 left-0 md:left-60 md:-top-20"
            fill="white"
          />

          <div className=" p-4 max-w-7xl top-32 mx-auto relative z-10  w-full pt-20 md:pt-0">
            <div className="w-full flex-col items-center flex justify-center">
              <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                Konnex-Control
              </h1>
              <TypewriterEffectSmooth
                cursorClassName="bg-white h-8 sm:h-10"
                words={subTitle}
              />
            </div>
            <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
              Konnex-Control is your gateway to seamless and intuitive control
              of your smart home devices. Our platform is designed to empower
              you with effortless management of every aspect of your home
              environment.
            </p>
            <div className="flex w-full items-center justify-center pt-4 z-20">
              <Link href="/control" className={buttonVariants()}>
                Get Started
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute  bottom-0 inset-0 bg-gradient-to-t from-background to-transparent"></div>
      </div>
      <div className="h-screen pointer-events-none -z-20"></div>
      <Feat />
      <Success />
      <Showcase />
      <AboutUs />
      <Footer />
    </div>
  );
}
