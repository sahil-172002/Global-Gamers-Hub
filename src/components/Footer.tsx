import React from "react";

const Footer = () => {
  return (
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
  );
};

export default Footer;
