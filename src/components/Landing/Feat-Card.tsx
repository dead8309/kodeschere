import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

const FeatCard = ({ Icon, name, content }) => {
  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex justify-center animate-bounce">
          <Icon.type {...Icon.props} />
        </div>
        <CardTitle className="text-center">{name}</CardTitle>
      </CardHeader>
      <CardContent className="text-center text-wrap flex-0">
        {content}
      </CardContent>
    </Card>
  );
};

export default FeatCard;
