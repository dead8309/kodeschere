import React from "react";
import FeatCard from "./Feat-Card";

const Feat = () => {
  return (
    <div className="w-screen h-screen top-[100%] absolute flex-row flex justify-center">
      <div className="flex flex-col md:flex-row justify-between gap-2 ">
        <FeatCard name="Professional Team" />
        <FeatCard name="Professional Team" />
        <FeatCard name="Professional Team" />
      </div>
    </div>
  );
};

export default Feat;
