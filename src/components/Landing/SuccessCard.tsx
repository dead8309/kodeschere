import React from "react";
import { FadeInWhenVisible } from "../ui/fade-in-when-visible";
const SuccessCard = ({
  Icon,
  title,
  content,
}: {
  Icon: any;
  title: string;
  content: string;
}) => {
  return (
    <div className=" flex gap-4 items-center text-3xl flex-grow-0  hover:text-4xl justify-center flex-col w-64 p-4">
      <Icon.type color="#5100a3" size={64} strokeWidth={1} />
      <FadeInWhenVisible>
        <h1 className=" font-bold  transition-all ">{title}</h1>
      </FadeInWhenVisible>
      <p className="text-center text-sm">{content}</p>
    </div>
  );
};

export default SuccessCard;
