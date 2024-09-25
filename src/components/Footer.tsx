import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-[#000205] py-8 px-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0 text-center">
          <span className="text-2xl font-bold">Gamer Soul Store</span>
          <p className="text-sm mt-2">
            Your trusted source for premium game accounts.
          </p>
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
    </footer>
  );
};

export default Footer;
