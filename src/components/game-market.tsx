"use client";

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
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Shield,
  Sword,
  Crown,
  Gem,
  Sun,
  Moon,
  Swords,
  Package2,
  Menu,
  Search,
  CircleUser,
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
      {/* <header className="sticky top-0 flex h-16 items-center justify-between gap-4 border-b bg-background px-4 md:px-6">
        <div className="flex items-center space-x-2">
          <Swords className="h-8 w-8 text-primary" />
          <span className="text-2xl font-bold text-primary">
            Gamers Soul Store
          </span>
        </div>
        <nav className="hidden md:flex space-x-4">
          <a href="#" className="text-foreground hover:text-primary">
            Home
          </a>
          <a href="#" className="text-foreground hover:text-primary">
            Accounts
          </a>
          <a href="#" className="text-foreground hover:text-primary">
            How It Works
          </a>
          <a href="#" className="text-foreground hover:text-primary">
            Contact
          </a>
        </nav>
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
      </header> */}
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
            Accounts
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
      <main className="container mx-auto px-4 py-8">
        <section className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Level Up Your Game with Premium Accounts
          </h1>
          <p className="text-xl text-foreground mb-8">
            Find the perfect Clash of Clans account to dominate the battlefield!
          </p>
          <div className="flex justify-center space-x-4">
            <Input className="max-w-lg py-5" placeholder="Search accounts..." />
            <ShimmerButton className="shadow-2xl">
              <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-200/10 lg:text-lg px-2">
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

        <section className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4">
              <Shield className="h-12 w-12 text-primary mx-auto mb-2" />
              <h3 className="text-xl font-semibold mb-2">
                Secure Transactions
              </h3>
              <p className="text-foreground">
                Your payment and personal information are always protected.
              </p>
            </div>
            <div className="p-4">
              <Sword className="h-12 w-12 text-orange-500 mx-auto mb-2" />
              <h3 className="text-xl font-semibold mb-2">Verified Accounts</h3>
              <p className="text-foreground">
                All accounts are thoroughly checked for authenticity.
              </p>
            </div>
            <div className="p-4">
              <Crown className="h-12 w-12 text-yellow-500 mx-auto mb-2" />
              <h3 className="text-xl font-semibold mb-2">Premium Selection</h3>
              <p className="text-foreground">
                Choose from a wide range of high-quality accounts.
              </p>
            </div>
          </div>
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
