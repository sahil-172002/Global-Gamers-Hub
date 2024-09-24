"use client";
import BlurIn from "@/components/magicui/blur-in";

import { Input } from "@/components/ui/input";

import ShimmerButton from "./magicui/shimmer-button";
import { FadeText } from "./magicui/fade-text";

export default function Home() {
  return (
    <div className="min-h-screen dark:bg-background bg-white  dark:bg-grid-white/[0.05] bg-grid-black/[0.2] relative">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_40%,black)]"></div>
      <main className="container mx-auto px-4 py-2">
        <section className="h-[90vh] flex flex-col justify-center items-center text-center px-2 gap-12">
          <div className="max-w-6xl">
            <BlurIn
              className="w-full"
              word="Level Up Your Game with Premium Gaming Accounts"
            />
          </div>
          <div className="max-w-4xl">
            <FadeText
              className="pt-6 md:pt-12 text-foreground mb-2 text-2xl"
              text="Trusted Marketplace for Secure Transactions of Gaming 
            Accounts and More Games."
            />
          </div>

          {/* <FadeText
            className="text-md md:text-lg text-foreground mb-4"
            text="Explore & Purchase | Quality Assets | Risk-Free Transactions"
          /> */}
          <div className="flex flex-col md:flex-row justify-center items-center pt-8 gap-4 md:gap-2  w-full max-w-lg">
            <Input
              className="w-full md:w-3/4 py-6 md:py-5  dark:text-black border-black bg-white rounded-3xl md:rounded-sm"
              placeholder="Search accounts..."
            />
            <ShimmerButton className="shadow-2xl  md:w-auto">
              <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white lg:text-lg px-1 py-2 md:py-0">
                Search
              </span>
            </ShimmerButton>
          </div>
        </section>

        {/* <section className="flex justify-center items-center flex-wrap gap-2 mb-12">
          {[...accounts, ...accounts, ...accounts].map((account, index) => (
            <AccountCard account={account} key={index} />
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
        </section> */}
      </main>
    </div>
  );
}
