import React from "react";
import LightBulb from "./devices/LightBulb";
import { Lightbulb, Refrigerator } from "lucide-react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import FanDialog from "./devices/FanDialog";
import LedDialog from "./devices/LedDialog";
import AcDialog from "./devices/AcDialog";

const Home = ({ data }: { data: any }) => {
  return (
    <div className="flex flex-col space-y-4">
      <h1 className="text-3xl font-bold">User's Home</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
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
      </div>
    </div>
  );
};

export default Home;
