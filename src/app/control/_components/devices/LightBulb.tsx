"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Lightbulb } from "lucide-react";

const URL = "https://kodessphere-api.vercel.app";

const LightBulb = ({ data }: { data: any }) => {
  const [turnedOn, setTurnedOn] = useState(data.state === 1);
  const router = useRouter();
  const onChange = (e: Boolean) => {
    const request = async () => {
      const res = await fetch(`${URL}/devices`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          teamid: "PNrBeiG",
          device: data.device,
          value: e ? 1 : 0,
        }),
      });
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      // @ts-ignore
      setTurnedOn(e);
      router.refresh();
    };
    request();
  };
  return (
    <div>
      <Card
        className={cn("rounded-3xl", {
          "bg-gradient-to-tl from-[#6441A5] to-[#2a0845]": turnedOn,
        })}
      >
        <CardHeader>
          <CardTitle className="text-3xl">
            <div className="flex items-center justify-between">
              <Switch
                id={"mode"}
                checked={turnedOn}
                onCheckedChange={onChange}
              />
              <Label htmlFor="mode">{turnedOn ? "On" : "Off"}</Label>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col space-y-6">
            <Lightbulb
              size={42}
              className={cn({
                "fill-current text-yellow-500": turnedOn,
              })}
            />
            <p className={cn("text-lg", !turnedOn && "text-muted-foreground")}>
              {data.name}
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LightBulb;
