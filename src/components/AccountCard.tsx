import { Account } from "@/types/types";
import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Crown, Home, Shield, Star, Sword, Trophy, Zap } from "lucide-react";
import Image from "next/image";
import { Badge } from "./ui/badge";

type Props = {
  account: Account;
};
const AccountCard = ({ account }: Props) => {
  return (
    // <Card>
    //   <CardHeader>
    //     <CardTitle>{account.archer_queen}</CardTitle>
    //     <CardDescription>{account.archer_queen}</CardDescription>
    //   </CardHeader>
    //   <CardContent>
    //     <div className="flex justify-between items-center mb-4">
    //       <div className="flex items-center space-x-2">
    //         <Sword className="h-5 w-5 text-orange-500" />
    //         <span>{account.archer_queen}</span>
    //       </div>
    //       <div className="flex items-center space-x-2">
    //         <Crown className="h-5 w-5 text-yellow-500" />
    //         <span>{account.archer_queen}</span>
    //       </div>
    //     </div>
    //     <Image
    //       src={"/test-image.png"}
    //       alt="Account Preview"
    //       width={400}
    //       height={200}
    //       className="w-full h-48 object-cover rounded-md"
    //     />
    //   </CardContent>
    //   <CardFooter className="flex justify-between">
    //     <span className="text-2xl font-bold text-green-600 dark:text-green-400">
    //       {/* {account.price} */}
    //     </span>
    //     <Button>Buy Now</Button>
    //   </CardFooter>
    // </Card>
    <Card className="w-full max-w-sm mx-auto py-6">
      <CardHeader>
        {/* <CardTitle className="text-xl font-bold ">
          Clash of Clans Account
        </CardTitle> */}
        <p>Order No. {"#456"}</p>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <Image
              width={400}
              height={200}
              src={"/test-image1.png"}
              alt="Account Preview"
              className="w-full h-48 object-cover rounded-md"
            />
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="flex items-center space-x-2">
              <Home className="h-5 w-5 text-blue-500" />
              <span className="text-sm">Town Hall:</span>
              <Badge variant="secondary">{account.town_hall_level}</Badge>
            </div>
            <div className="flex items-center space-x-2">
              <Trophy className="h-5 w-5 text-yellow-500" />
              <span className="text-sm">Builder Hall:</span>
              <Badge variant="secondary">{account.builder_hall_level}</Badge>
            </div>
          </div>
          <div className="space-y-2">
            <h3 className="text-md font-semibold mb-2">Heroes</h3>
            <div className="grid grid-cols-2 gap-y-2">
  <div className="flex items-center space-x-2 flex-nowrap">
    <Sword className="h-4 w-4 text-red-500" />
    <span className="text-sm whitespace-nowrap">Barbarian King:</span>
    <Badge>{account.barbarian_king}</Badge>
  </div>
  <div className="flex items-center space-x-2 flex-nowrap">
    <Zap className="h-4 w-4 text-purple-500" />
    <span className="text-sm whitespace-nowrap">Grand Warden:</span>
    <Badge>{account.grand_warden}</Badge>
  </div>
  <div className="flex items-center space-x-2 flex-nowrap">
    <Crown className="h-4 w-4 text-pink-500" />
    <span className="text-sm whitespace-nowrap">Archer Queen:</span>
    <Badge>{account.archer_queen}</Badge>
  </div>
  <div className="flex items-center space-x-2 flex-nowrap">
    <Shield className="h-4 w-4 text-green-500" />
    <span className="text-sm whitespace-nowrap">Royal Champion:</span>
    <Badge>{account.royal_champion}</Badge>
  </div>
</div>

          </div>
          <div className="mt-4 flex items-center justify-center space-x-2">
            <Star className="h-5 w-5 text-yellow-400" />
            <span className="text-lg font-bold">XP: {account.xp}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AccountCard;
