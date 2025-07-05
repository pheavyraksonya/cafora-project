import React from "react";
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-amber-500 to-orange-500 text-white py-6 mt-10">
      <div className="max-w-5xl mx-auto px-4 flex flex-col items-center gap-3">
        <p className="text-lg font-semibold">
          Brewed for Moments That Matter ☕
        </p>

        <div className="flex space-x-4">
          <a
            href="https://www.facebook.com/"
            className="hover:text-yellow-100 transition"
          >
            <Facebook size={20} />
          </a>
          <a
            href="https://www.instagram.com/?hl=en"
            className="hover:text-yellow-100 transition"
          >
            <Instagram size={20} />
          </a>
          <a
            href="https://x.com/home"
            className="hover:text-yellow-100 transition"
          >
            <Twitter size={20} />
          </a>
        </div>

        <p className="text-sm mt-2">
          © {new Date().getFullYear()} Cafora. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
