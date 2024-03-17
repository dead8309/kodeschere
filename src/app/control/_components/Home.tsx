import React from "react";
import LightBulb from "./devices/LightBulb";
import FanDialog from "./devices/FanDialog";
import LedDialog from "./devices/LedDialog";
import AcDialog from "./devices/AcDialog";
import { Card } from "@/components/ui/card";

const Home = ({ data }: { data: any }) => {
  return (
    <div className="flex flex-col space-y-4">
      <h1 className="text-3xl font-bold">User&apos;s Home</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        <LightBulb
          data={{
            state: data.bulb,
            icon: "/light-bulb.svg",
            name: "Light Bulb",
            device: "bulb",
          }}
        />
        <FanDialog value={Number(data.fan)} />

        <AcDialog state={data.ac.state} temp={data.ac.temp} />

        <LedDialog value={data.led} />

        <Card className="flex h-52 w-full items-center justify-center rounded-3xl text-xl font-extrabold hover:bg-secondary/60">
          <p className="animate-pulse">Coming soon</p>
        </Card>
      </div>
    </div>
  );
};

export default Home;
