import React from "react";
import ShimmerButton from "./magicui/shimmer-button";
import { ArrowRight, Swords } from "lucide-react";
import {
  DiscordLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-[#000205] py-8 px-4">
      <div className="flex flex-col items-center justify-center gap-2 md:gap-4 my-8 border-b py-8 ">
        <h1 className="text-2xl md:text-4xl font-bold">
          Still have questions?
        </h1>
        <p>We&apos;re here to help.</p>

        <ShimmerButton className="shadow-2xl  md:w-auto flex gap-2">
          <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white lg:text-lg px-1 py-2 md:py-0">
            Let&apos;s Chat
          </span>
          <ArrowRight className="h-4 w-4" color="white" />
        </ShimmerButton>
      </div>
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0 text-center">
          <div className="flex justify-center gap-2">
            <Swords className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold">Global Gamers Hub</span>
          </div>
          <p className="text-sm mt-4">
            Your trusted source for premium game accounts.
          </p>
        </div>
        <div className="space-y-4">
          <div className="flex flex-wrap justify-center md:justify-center space-x-4">
            <a href="#" className="hover:text-muted-foreground">
              <InstagramLogoIcon className="h-8 w-8" />
            </a>
            <a href="#" className="hover:text-muted-foreground">
              <DiscordLogoIcon className="h-8 w-8" />
            </a>
            <a href="#" className="hover:text-muted-foreground">
              <TwitterLogoIcon className="h-8 w-8" />
            </a>
            <a href="#" className="hover:text-muted-foreground">
              <LinkedInLogoIcon className="h-8 w-8" />
            </a>
          </div>
          <nav className="flex flex-wrap justify-center md:justify-end space-x-4">
            <a href="#" className="hover:text-muted-foreground">
              Terms of Service
            </a>
            <a href="#" className="hover:text-muted-foreground">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-muted-foreground">
              Contact Us
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
