"use client";
import React from "react";
import { Button } from "./ui/button";
import { Menu, Swords } from "lucide-react";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ModeToggle } from "./ui/mode-toggle";

const Header = () => {
  return (
    <header className="sticky top-0 flex h-16 items-center justify-between gap-4 border-b bg-white dark:bg-[#000205]  px-4 md:px-6">
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

      <div className="flex items-center space-x-2">
        <Button variant="outline" className="hidden md:inline-flex">
          Sign In
        </Button>
        <ModeToggle />
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
                Games
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
      </div>
    </header>
  );
};

export default Header;
