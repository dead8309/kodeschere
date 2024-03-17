import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";
import Image from "next/image";
import { Cloudy, ThermometerSun } from "lucide-react";

const User = () => {
  return (
    <Card className="lg:grid grid-cols-[8fr_2fr] lg:items-center">
      <div>
        <CardHeader>
          <CardTitle className="text-3xl">Hello, User!!</CardTitle>
          <CardDescription className="text-lg">
            Welcome Home! The air quality is good today.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <ThermometerSun size={24} className="stroke-current text-yellow-300" />
              <p className="flex items-center space-x-2">
                <strong className="text-xl">25+°C</strong>
                <span className="text-sm">Bhubaneswar, 751024</span>
              </p>
            </div>

            <div className="flex items-center gap-4">
              <Cloudy size={24} className="stroke-current text-slate-500" />
              <p className="text-sm">Fuzzy cloudy weather</p>
            </div>
          </div>
        </CardContent>
      </div>
      <div className="hidden lg:block">
        <Image src={"/user.svg"} alt="User" width={300} height={300} />
      </div>
    </Card>
  );
};

export default User;
