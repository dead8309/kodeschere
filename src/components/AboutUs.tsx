import React from "react";
import AboutUsCard from "./AboutUsCard";

const AboutUs = () => {
  return (
    <div id="about-us">
      <h1 className="text-center w-full justify-center mb-8 text-3xl flex flex-row font-bold mt-8">
        About Us
      </h1>
      <div className="flex gap-4 p-4 md:flex-row flex-col">
        <AboutUsCard
          name="Adarsh Upadhyay"
          linkedin="https://www.linkedin.com/in/adarsh-upadhyay-8b8a55232/"
        />
        <AboutUsCard
          name="Vaibhav Raj"
          linkedin="https://www.linkedin.com/in/vaibhav-raj-b80489261/"
        />
        <AboutUsCard name="Sarthak Garg" linkedin="asf/asf" />
      </div>
    </div>
  );
};

export default AboutUs;
