import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-row bg-gray-900 h-20 items-center px-6">
      <h1 className="hover:text-fuchsia-600 shrink-0 font-bold transition-all">
        Konnex-Control
      </h1>
      <div className="flex w-full gap-6 justify-end">
        <Link href="/control">Controls</Link>
        <Link href="#claims">Our Claims</Link>
        <Link href="#achievements">Achievements</Link>
        <Link href="/control">Controls</Link>
      </div>
    </div>
  );
};

export default Footer;
