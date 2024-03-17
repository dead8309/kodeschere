import React from "react";

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
      <Icon.type color="#BF40BF" size={64} strokeWidth={1} />
      <h1 className=" font-bold  transition-all">{title}</h1>
      <p className="text-center text-sm">{content}</p>
    </div>
  );
};

export default SuccessCard;
