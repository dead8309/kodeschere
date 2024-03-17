import React from "react";
import Image from "next/image";
import Link from "next/link";
import screenImage from "../../../public/screen.jpg";
import { TextGenerateEffect } from "../ui/text-generate-effect";
const Showcase = () => {
  const words = `Take command of your home's comfort and efficiency with our
  user-friendly dashboard. Control your AC, adjust fan speed, illuminate
  your space with bulbs and LEDs, all in one place. Simplify your life,
  optimize your energy usage, and enjoy the convenience of smart living
  with our dashboard.`;
  return (
    <div className="w-screen flex justify-center mt-4 gap-4 min-[1050px]:flex-row flex-col p-12">
      <Image
        src={screenImage}
        className="rounded-xl flex-grow-0 border mb-4 grow-0 aspect-video min-[1050px]:w-[500px] border-primary shadow-multi-glow"
        style={{ objectFit: "contain" }}
      />
      <div className="flex flex-col md:p-4 gap-2 min-h-full items-center">
        <h1 className="text-3xl bg-clip-text md:text-left text-center text-transparent bg-gradient-to-l from-fuchsia-50 to-primary bg-opacity-50 text-primary font-bold">
          We make your Home Safe, Smart and Modern
        </h1>
        <div>
          <TextGenerateEffect
            className="mt-2 min-[1050px]:text-left text-center"
            words={words}
          />
        </div>
        <Link
          href="/control"
          className="bg-primary text-white font-bold p-4 rounded-3xl px-8 hover:border-solid border-2 mt-4 border-none border-primary hover:text-primary hover:bg-transparent transition-all"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default Showcase;
