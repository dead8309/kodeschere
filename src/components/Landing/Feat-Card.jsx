import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const FeatCard = ({ icon, name, content }) => {
  return (
    <div className="flex flex-col border border-solid border-white">
      <h1>{name}</h1>
    </div>
  );
};

export default FeatCard;
