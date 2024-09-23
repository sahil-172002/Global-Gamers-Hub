"use client";
import Image from 'next/image';
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
import {
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Shield,
  Sword,
  Crown,
  Sun,
  Moon,
  Swords,
  Menu,
} from "lucide-react";
import ShimmerButton from "./magicui/shimmer-button";
import accounts from "@/data/accounts.json";
import Link from "next/link";

export default function Component() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary">
      <header className="sticky top-0 flex h-16 items-center justify-between gap-4 border-b bg-background px-4 md:px-6">
        <div className="flex items-center space-x-2 w-full">
          <Swords className="h-8 w-8 text-primary" />
          <span className="text-xl sm:text-2xl font-bold text-primary">
            Gamers Soul Store
          </span>
        </div>
        <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <Link
            href="#"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Home
          </Link>
          <Link
            href="#"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Games
          </Link>
          <Link
            href="#"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Contact
          </Link>
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="grid gap-6 text-lg font-medium">
              <Link
                href="#"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                Home
              </Link>
              <Link
                href="#"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                Accounts
              </Link>
              <Link
                href="#"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                Contact
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
        <div className="flex items-center space-x-2">
          <Button variant="outline" className="hidden md:inline-flex">
            Sign In
          </Button>
          <Button variant="ghost" size="icon" onClick={toggleTheme}>
            {theme === "light" ? (
              <Moon className="h-5 w-5" />
            ) : (
              <Sun className="h-5 w-5" />
            )}
          </Button>
        </div>
      </header>
      <main className="container mx-auto px-4 py-2">
      <section className="h-screen flex flex-col justify-center items-center text-center px-2">
      <div className="py-0">
    <div className="pt-10 py-12 md:pt-12"> {/* Adjusted padding to reduce space from navbar */}
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-2"> {/* Reduced margin */}
        Level Up Your Game with Premium Accounts
      </h1>
      <p className="text-lg pt-6 md:text-xl text-foreground mb-2"> {/* Reduced margin */}
      Trusted Marketplace for Secure Transactions of Clash of Clans Accounts and More Games!
      </p>
      <p className="text-md md:text-lg text-foreground mb-4"> {/* Kept margin for spacing below */}
      Explore & Purchase | Quality Assets | Risk-Free Transactions
      </p>
    </div>
    </div>
    <div className="flex flex-col md:flex-row justify-center pt-8 space-y-4 md:space-y-0 md:space-x-4 w-full max-w-lg">
      <Input className="w-full md:w-3/4 py-4 md:py-5" placeholder="Search accounts..." />
      <ShimmerButton className="shadow-2xl w-full md:w-auto">
        <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white lg:text-lg px-1 py-0">
          Search
        </span>
      </ShimmerButton>
    </div>
  </section>

  <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
      {accounts.map((account, index) => (
        <Card key={index}>
          <CardHeader>
            <CardTitle>{account.title}</CardTitle>
            <CardDescription>{account.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center space-x-2">
                <Sword className="h-5 w-5 text-orange-500" />
                <span>{account.troops}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Crown className="h-5 w-5 text-yellow-500" />
                <span>{account.trophies}</span>
              </div>
            </div>
            <img
              src={account.image}
              alt="Account Preview"
              className="w-full h-48 object-cover rounded-md"
            />
          </CardContent>
          <CardFooter className="flex justify-between">
            <span className="text-2xl font-bold text-green-600 dark:text-green-400">
              {account.price}
            </span>
            <Button>Buy Now</Button>
          </CardFooter>
        </Card>
      ))}
    </section>

    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
  {accounts.map((account, index) => (
    <Card key={index}>
      <CardHeader>
        <CardTitle>{account.title}</CardTitle>
        <CardDescription>{account.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center space-x-2">
            <Sword className="h-5 w-5 text-orange-500" />
            <span>{account.troops}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Crown className="h-5 w-5 text-yellow-500" />
            <span>{account.trophies}</span>
          </div>
        </div>
        <Image
          src={account.image} // Make sure this is the correct path
          alt={`${account.title} Preview`}
          className="w-full h-48 object-cover rounded-md"
          width={400} // Specify width
          height={200} // Specify height
        />
      </CardContent>
      <CardFooter className="flex justify-between">
        <span className="text-2xl font-bold text-green-600 dark:text-green-400">
          {account.price}
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

      <footer className="bg-background text-black dark:text-white py-8 px-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="text-2xl font-bold">GameAccounts</span>
            <p className="text-sm mt-2">
              Your trusted source for premium game accounts.
            </p>
          </div>
          <nav className="flex flex-wrap justify-center md:justify-end space-x-4">
            <a href="#" className="hover:text-secondary">
              Terms of Service
            </a>
            <a href="#" className="hover:text-secondary">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-secondary">
              Contact Us
            </a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
