import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Lightbulb, Minus, Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import Wheel from "@uiw/react-color-wheel";

const URL = "https://kodessphere-api.vercel.app";

const LedDialog = ({ value }: { value: string }) => {
  const [color, setColor] = useState(value);
  const [show, setShow] = useState(false);
  const router = useRouter();

  const submitColor = () => {
    const request = async () => {
      const res = await fetch(`${URL}/devices`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          teamid: "PNrBeiG",
          device: "led",
          value: color,
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
        setColor((prev) => value);
        setShow(v);
      }}
    >
      <DialogTrigger>
        <Card className="rounded-3xl h-52">
          <CardHeader>
            <CardTitle className="text-3xl">
              <div className="flex items-center justify-between">
                <Label htmlFor="mode">Pick a Color</Label>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col space-y-6 items-start">
              <Lightbulb
                size={42}
                className={"fill-current"}
                style={{
                  color: color,
                }}
              />
              <p className="text-lg">Led</p>
            </div>
          </CardContent>
        </Card>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Set Led Color</DialogTitle>
        </DialogHeader>
        <div className="flex w-full items-center gap-20 md:gap-20">
          <Wheel
            color={color}
            onChange={(color) => {
              console.log(color.hex);
              setColor(color.hex);
            }}
          />
          <Lightbulb
            size={92}
            className="fill-current"
            style={{
              color: color,
            }}
          />
        </div>

        <DialogFooter className="flex w-full items-center justify-center">
          <Button onClick={submitColor}>Save</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default LedDialog;
