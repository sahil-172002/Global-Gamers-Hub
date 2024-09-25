import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { getData } from "@/action";
import { Button } from "../ui/button";
import { ShoppingBag } from "lucide-react";

const CocCard = async () => {
  const data = await getData("P09L8LVU9");
  return (
    <div className="max-w-sm p-4">
      <Card>
        <CardHeader>
          <div className="flex gap-2">
            <div className="flex justify-center items-center">
              <p className="font-medium flex gap-2">
                <ShoppingBag className="h-6 w-6" />
                <span>Order #455</span>
              </p>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <img
              src={`/test-image1.png`}
              className="drop-shadow-xl rounded-lg shadow-md z-10"
              alt="trophies"
            />
          </div>
          <div className="flex flex-col justify-around gap-4">
            <div className="flex gap-2 items-center">
              <img
                src={`/XP.png`}
                className="drop-shadow-xl h-9 w-9"
                alt="xp"
              />
              <div>
                <p className="font-medium">Experience Level: {data.expLevel}</p>
                <p className="font-medium"></p>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <img
                src={`/assets/townhall/Town_Hall${data.townHallLevel}.png`}
                className="drop-shadow-xl h-10 w-10"
                alt="townhall"
              />
              <div>
                <p className="font-medium">
                  TownHall Level: {data.townHallLevel}
                </p>
                <p className="font-medium"></p>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <img
                src={`/assets/builderhall/${data.builderHallLevel}.png`}
                className="drop-shadow-xl h-10 w-10"
                alt="townhall"
              />
              <div>
                <p className="font-medium">
                  BuilderHall Level: {data.builderHallLevel}
                </p>
                <p className="font-medium"></p>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <h1 className="text-2xl font-bold">Heroes</h1>
            <div className="flex flex-wrap gap-2 mb-4">
              {data.heroes.map((hero: any) => (
                <div className="relative w-fit" key={hero.name}>
                  <img
                    src={`/assets/heroes/${hero.name.split(" ").join("_")}.png`}
                    className="h-10 w-10 rounded-full"
                    alt="hero"
                  />
                  <p className="bg-blue-400 shadow-blue-500  shadow-lg rounded-full p-2 h-2 w-2 text-xs absolute flex items-center justify-center text-white bottom-0 right-0">
                    {hero.level}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Buy Now</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default CocCard;
