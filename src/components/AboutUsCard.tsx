import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import Image from "next/image";
import { Linkedin } from "lucide-react";
import Link from "next/link";

const AboutUsCard = ({ src, name, linkedin }) => {
  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex justify-center animate-bounce">
          <Image />
        </div>
        <CardTitle className="text-center">{name}</CardTitle>
      </CardHeader>
      <CardContent className="text-center text-wrap flex text-primary justify-center w-full">
        <Link
          className="border border-1 flex border-primary hover:shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)] transition-all  p-4 justify-center items-center gap-4 w-fit rounded-2xl"
          href={linkedin}
        >
          <Linkedin /> Linked-in
        </Link>
      </CardContent>
    </Card>
  );
};

export default AboutUsCard;
