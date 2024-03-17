import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col gap-4 md:gap-0 justify-center md:flex-row bg-gray-900 h-20 items-center px-6">
      <h1 className="hover:text-fuchsia-600 shrink-0 font-bold transition-all">
        Konnex-Control
      </h1>
      <div className="flex w-full justify-center gap-6 md:justify-end items-center">
        <Link
          className="hover:text-lg md:text-[16px] text-xs transition-all hover:font-bold"
          href="/control"
        >
          Controls
        </Link>
        <Link
          className="hover:text-lg md:text-[16px] text-xs transition-all hover:font-bold"
          href="#claims"
        >
          Our Claims
        </Link>
        <Link
          className="hover:text-lg md:text-[16px] text-xs transition-all hover:font-bold"
          href="#achievements"
        >
          Achievements
        </Link>
      </div>
    </div>
  );
};

export default Footer;
