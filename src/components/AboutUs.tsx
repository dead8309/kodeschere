import React from "react";
import AboutUsCard from "./AboutUsCard";

const AboutUs = () => {
  return (
    <div id="about-us">
      <h1 className="text-center w-full justify-center mb-8 text-3xl flex flex-row font-bold mt-8">
        About Us
      </h1>
      <div className="flex gap-4 p-4 md:flex-row flex-col">
        <AboutUsCard name="Adarsh Upadhyay" linkedin="asf/asf" />
        <AboutUsCard name="Vaibhav Raj" linkedin="asf/asf" />
        <AboutUsCard name="Adarsh Upadhyay" linkedin="asf/asf" />
      </div>
    </div>
  );
};

export default AboutUs;
