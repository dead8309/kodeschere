import React from "react";
import { Spotlight } from "@/components/Spotlight";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export default function Page() {
  return (
    <div>
      <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(#F6F6F6,transparent_1px)] [background-size:16px_16px]">
        
      <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center antialiased bg-grid-white/[0.02] relative overflow-hidden">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />
        <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
          <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            Konnex-Control <br /> Your Smart home, Your way.
          </h1>
          <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
            Konnex-Control is your gateway to seamless and intuitive control of
            your smart home devices. Our platform is designed to empower you
            with effortless management of every aspect of your home environment.
          </p>
          <div className="flex w-full items-center justify-center pt-4">
            <Link href={"/control"} className={buttonVariants()}>
              Get Started
            </Link>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
