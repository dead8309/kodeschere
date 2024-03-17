import React from "react";
import FeatCard from "./Feat-Card";
import { Medal } from "lucide-react";
import { Handshake } from "lucide-react";
import { HardHat } from "lucide-react";

const Feat = () => {
  return (
    <div className="flex flex-col md:flex-row " id="claims">
      <FeatCard
        Icon={<HardHat />}
        name="Professional Team"
        content="At Konnex-Control, our team consists of experienced professionals in web development, user experience design, and home automation technology. We're committed to delivering exceptional service and innovative solutions to enhance your smart home experience."
      />
      <FeatCard
        Icon={<Handshake />}
        name="Product Warranty"
        content="Trust in Konnex-Control's warranty for quality assurance. We cover defects in materials and workmanship, ensuring your device performs reliably. Contact our support team for swift assistance with any issues during the warranty period."
      />
      <FeatCard
        Icon={<Medal />}
        name="Fastest Support"
        content="Experience prompt and helpful assistance with our 24/7 customer support team. Whether you're a new user or a long-time customer, we're here to ensure your smart home journey is smooth and hassle-free."
      />
    </div>
  );
};

export default Feat;
