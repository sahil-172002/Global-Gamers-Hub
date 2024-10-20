"use client";

import React from "react";
import { Button } from "./ui/button";
import { Gamepad, Home, Mail, Menu, Swords } from "lucide-react";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ModeToggle } from "./ui/mode-toggle";
import { useAuth } from "@/context/authContext";
import destroySession from "@/actions/destroySession";
import { useRouter } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [open, setOpen] = React.useState(false);
  const router = useRouter();

  const handleLinkClick = (href: string) => {
    setOpen(false);
    router.push(href);
  };
  const { currentUser, isAuthenticated, setIsAuthenticated } = useAuth();

  const handleLogout = async () => {
    const { success, error } = await destroySession();

    if (success) {
      setIsAuthenticated(false);
      router.push("/login");
    } else {
      console.error(error);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto  flex h-14 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Swords className="h-6 w-6" />
          <span className="font-bold hidden sm:inline-block">
            Global Gamers Hub
          </span>
        </Link>
        <div className="flex items-center space-x-4">
          <nav className=" items-center space-x-4 lg:space-x-6 hidden md:flex">
            <Link
              href="/"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Home
            </Link>
            <Link
              href="/games"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Games
            </Link>
            <Link
              href="#"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Contact
            </Link>
          </nav>
          <ModeToggle />
          {isAuthenticated ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="relative h-8 w-8 rounded-full"
                >
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="" alt={currentUser?.name} />
                    <AvatarFallback className="dark:bg-black border-2">
                      {currentUser?.name.charAt(0).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">
                      {currentUser?.name}
                    </p>
                    <p className="text-xs leading-none text-muted-foreground">
                      {currentUser?.email}
                    </p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout}>
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link href="/login">
              <Button variant="secondary">Login</Button>
            </Link>
          )}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden  rounded-full shadow"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[300px] sm:w-[400px]  flex flex-col"
            >
              <div className="flex-grow">
                <div className="flex mb-8 mt-4 items-center">
                  <Swords className="h-10 w-10 mr-2" />
                  <h1 className="text-xl font-bold">Global Gamers Hub</h1>
                </div>
                <nav className="flex flex-col gap-2 text-lg font-medium">
                  <Link
                    href="/"
                    className="flex items-center gap-2 transition-colors py-2 px-8  rounded dark:bg-zinc-900 bg-zinc-300 "
                    onClick={() => handleLinkClick("/")}
                  >
                    <Home className="h-5 w-5" />
                    Home
                  </Link>
                  <Link
                    href="/games"
                    className="flex items-center gap-2 transition-colors py-2 px-8 rounded dark:bg-zinc-900 bg-zinc-300 "
                    onClick={() => handleLinkClick("/games")}
                  >
                    <Gamepad className="h-5 w-5" />
                    Games
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center gap-2 transition-colors p-2 px-8 rounded dark:bg-zinc-900 bg-zinc-300 "
                    onClick={() => handleLinkClick("#")}
                  >
                    <Mail className="h-5 w-5" />
                    Contact
                  </Link>
                </nav>
              </div>
              <footer className="mt-auto pb-4 text-center text-sm">
                © {new Date().getFullYear()} Global Gamers Hub. All rights
                reserved.
              </footer>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
