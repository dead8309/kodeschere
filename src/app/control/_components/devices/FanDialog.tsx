import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import Image from "next/image";

const URL = "https://kodessphere-api.vercel.app";

const FanDialog = ({ value }: { value: number }) => {
  const [speed, setSpeed] = useState(value);
  const [show, setShow] = useState(false);
  const router = useRouter();
  const turnedOn = value > 0 ? true : false;

  const submitSpeed = () => {
    const request = async () => {
      const res = await fetch(`${URL}/devices`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          teamid: "PNrBeiG",
          device: "fan",
          value: speed,
        }),
      });
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }

      setShow(false);
      router.refresh();
    };
    request();
  };
  return (
    <Dialog
      open={show}
      onOpenChange={(v) => {
        setSpeed((prev) => value);
        setShow(v);
      }}
    >
      <DialogTrigger>
        <div>
          <Card
            className={cn("rounded-3xl", {
              "bg-gradient-to-tl from-[#6441A5] to-[#2a0845]": turnedOn,
            })}
          >
            <CardHeader>
              <CardTitle className="text-3xl">
                <div className="flex items-center justify-between">
                  <Label htmlFor="mode">{turnedOn ? `On` : "Off"}</Label>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col space-y-6 items-start">
                <Image
                  src="/fan.svg"
                  alt="Fan"
                  width={50}
                  height={50}
                  className={cn({
                    "animate-spin": turnedOn,
                  })}
                />
                <p
                  className={cn(
                    "text-lg",
                    !turnedOn && "text-muted-foreground"
                  )}
                >
                  {turnedOn
                    ? `Fan is running at ${value}`
                    : "Fan is turned off"}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Set Fan Speed</DialogTitle>
        </DialogHeader>
        <div className="p-4 pb-0">
          <div className="flex items-center justify-center space-x-2">
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8 shrink-0 rounded-full"
              onClick={() => {
                if (speed === 0) {
                  return;
                }
                setSpeed((prev) => prev - 1);
              }}
            >
              <Minus className="h-4 w-4" />
              <span className="sr-only">Decrease</span>
            </Button>
            <div className="flex-1 text-center">
              <div className="text-7xl font-bold tracking-tighter">{speed}</div>
              <div className="text-[0.70rem] uppercase text-muted-foreground">
                Speed
              </div>
            </div>
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8 shrink-0 rounded-full"
              onClick={() => {
                if (speed === 5) {
                  return;
                }
                setSpeed((prev) => prev + 1);
              }}
            >
              <Plus className="h-4 w-4" />
              <span className="sr-only">Increase</span>
            </Button>
          </div>
        </div>
        <DialogFooter className="flex w-full items-center justify-center">
          <Button onClick={submitSpeed}>Save</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default FanDialog;
