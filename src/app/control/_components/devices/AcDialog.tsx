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
import { AirVent, Minus, Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import { stat } from "fs";

const URL = "https://kodessphere-api.vercel.app";

const AcDialog = ({ state, temp }: { temp: number; state: number }) => {
  const [temperature, setTemperature] = useState(temp);
  const [turnedOn, setTurnedOn] = useState(state === 1 ? true : false);
  const [show, setShow] = useState(false);
  const router = useRouter();

  const submitSpeed = () => {
    const request = async () => {
      const res = await fetch(`${URL}/devices`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          teamid: "PNrBeiG",
          device: "ac",
          value: {
            temp: temperature,
            state: turnedOn ? 1 : 0,
          },
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
        setTemperature((prev) => temp);
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
                <AirVent size={42} />
                <p
                  className={cn(
                    "text-lg",
                    !turnedOn && "text-muted-foreground"
                  )}
                >
                  {turnedOn ? `Ac is running at ${temp}` : "Ac is turned off"}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Set Temperature</DialogTitle>
        </DialogHeader>
        <div className="p-4 pb-0">
          <div className="flex items-center justify-center space-x-2">
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8 shrink-0 rounded-full"
              onClick={() => {
                if (temperature === 17) {
                  return;
                }
                setTemperature((prev) => prev - 1);
              }}
            >
              <Minus className="h-4 w-4" />
              <span className="sr-only">Decrease</span>
            </Button>
            <div className="flex-1 text-center">
              <div className="text-7xl font-bold tracking-tighter">
                {temperature}
              </div>
              <div className="text-[0.70rem] uppercase text-muted-foreground">
                Temperature
              </div>
            </div>
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8 shrink-0 rounded-full"
              onClick={() => {
                if (temperature === 29) {
                  return;
                }
                setTemperature((prev) => prev + 1);
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

export default AcDialog;
