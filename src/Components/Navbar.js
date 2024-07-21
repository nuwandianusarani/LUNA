import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/Logo.png";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

function Navbar() {
  return (
    <>
      <div className="relative">
        {/* Navbar content */}
        <div className="bg-black bg-opacity-25 py-4 relative z-10">
          <div className="container mx-auto flex justify-between items-center">
            <div>
              <Link to="/">
                <img src={logo} alt="LunaSphere Logo" className="h-10" />
              </Link>
            </div>
            <ul className="flex space-x-4">
              <li>
                <Link to="/" className="text-white hover:text-gray-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/mars" className="text-white hover:text-gray-300">
                  Mars
                </Link>
              </li>
              <li>
                <Link to="/earth" className="text-white hover:text-gray-300">
                  Earth
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white hover:text-gray-300">
                  About
                </Link>
              </li>
              <SignedOut>
                <SignInButton className="text-white hover:text-gray-300 bg-transparent border border-white px-3 py-1 rounded" />
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
