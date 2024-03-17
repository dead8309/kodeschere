import React from "react";
import { Home } from "lucide-react";
import { Laugh } from "lucide-react";
import { Trophy } from "lucide-react";
import SuccessCard from "./SuccessCard";

const Success = () => {
  return (
    <div className="p-4 mt-4" id="achievements">
      <div className=" flex flex-row mt-4 border-2 rounded-md w-full justify-evenly gap-2px">
        <SuccessCard Icon={<Home />} title="103+" content="Smart Devices" />
        <SuccessCard Icon={<Laugh />} title="75+" content="Happy Customers" />
        <SuccessCard Icon={<Trophy />} title="100%" content="Success Rate" />
      </div>
    </div>
  );
};

export default Success;
