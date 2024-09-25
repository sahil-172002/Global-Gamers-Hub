import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="container min-h-screen mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">All Games</h1>
      <div>
        <div className="md:flex space-y-4 gap-8 mb-8 border p-4 rounded-lg">
          <div>
            <Image
              src="/coc.webp"
              alt="Clash of Clans"
              width={500}
              height={300}
              className="rounded-lg w-96 "
            />
          </div>
          <div className="">
            <h1 className="text-2xl font-bold">Clash of Clans Accounts</h1>
            <p className="mb-4 max-w-2xl">
              Clash of Clans is a popular strategy game where players build and
              defend their village, train troops, and battle against other
              players. Find your perfect account and dominate the game!
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge>Strategy</Badge>
              <Badge>Multiplayer</Badge>
              <Badge>Mobile</Badge>
              <Badge>Free-to-Play</Badge>
            </div>
            <Link href={"/games/coc"}>
              <Button size="lg">Browse All Accounts</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
