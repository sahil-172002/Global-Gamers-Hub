"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {} from "@/components/ui/dropdown-menu";

import { Sword, Crown } from "lucide-react";
import ShimmerButton from "./magicui/shimmer-button";
import { databases } from "@/app/appwrite";
import { Query } from "appwrite";
import { Account } from "@/types/types";

export default function Component() {
  const [accounts, setAccounts] = useState<Account[]>([]);

  useEffect(() => {
    fetchAccounts();
  }, []);

  const fetchAccounts = async () => {
    try {
      const response = await databases.listDocuments(
        process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID!,
        process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID!,
        [Query.orderDesc("$createdAt"), Query.limit(3)]
      );
      console.log(response.documents);
      setAccounts(response.documents as unknown as Account[]);
    } catch (error) {
      console.error("Error fetching accounts:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary">
      <main className="container mx-auto px-4 py-2">
        <section className="h-screen flex flex-col justify-center items-center text-center px-2">
          <div className="py-0">
            <div className="pt-10 py-12 md:pt-12">
              {" "}
              {/* Adjusted padding to reduce space from navbar */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-2">
                {" "}
                {/* Reduced margin */}
                Level Up Your Game with Premium Accounts
              </h1>
              <p className="text-lg pt-6 md:text-xl text-foreground mb-2">
                {" "}
                {/* Reduced margin */}
                Trusted Marketplace for Secure Transactions of Clash of Clans
                Accounts and More Games!
              </p>
              <p className="text-md md:text-lg text-foreground mb-4">
                {" "}
                {/* Kept margin for spacing below */}
                Explore & Purchase | Quality Assets | Risk-Free Transactions
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center pt-8 gap-4 md:gap-2  w-full max-w-lg">
            <Input
              className="w-full md:w-3/4 py-6 md:py-5"
              placeholder="Search accounts..."
            />
            <ShimmerButton className="shadow-2xl w-full md:w-auto">
              <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white lg:text-lg px-1 py-2 md:py-0">
                Search
              </span>
            </ShimmerButton>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {accounts.map((account, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{account.archer_queen}</CardTitle>
                <CardDescription>{account.archer_queen}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center space-x-2">
                    <Sword className="h-5 w-5 text-orange-500" />
                    <span>{account.archer_queen}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Crown className="h-5 w-5 text-yellow-500" />
                    <span>{account.archer_queen}</span>
                  </div>
                </div>
                <Image
                  src={"/test-image.png"}
                  alt="Account Preview"
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover rounded-md"
                />
              </CardContent>
              <CardFooter className="flex justify-between">
                <span className="text-2xl font-bold text-green-600 dark:text-green-400">
                  {/* {account.price} */}
                </span>
                <Button>Buy Now</Button>
              </CardFooter>
            </Card>
          ))}
        </section>
        <section className="bg-card rounded-lg shadow-lg p-6 mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4 text-center">
            Ready to Level Up?
          </h2>
          <p className="text-center text-foreground mb-6">
            Join thousands of satisfied gamers who have boosted their gameplay!
          </p>
          <div className="flex justify-center space-x-4">
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select game" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="clash-of-clans">Clash of Clans</SelectItem>
                <SelectItem value="other-game-1">Other Game 1</SelectItem>
                <SelectItem value="other-game-2">Other Game 2</SelectItem>
              </SelectContent>
            </Select>
            <Button>Find Accounts</Button>
          </div>
        </section>
      </main>
    </div>
  );
}
