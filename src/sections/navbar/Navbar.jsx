import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import { RiMenu3Fill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Desktop Menu */}
      <nav className="w-full hidden md:flex lg:flex justify-between items-center">
        <a href="/" className="w-1/2 text-xl font-medium">
          <span className="font-bold">xKhan</span>Coach
        </a>
        <ul className="w-1/2 flex justify-between items-center *:font-medium *:capitalize">
          <li>
            <a href="#about">about me</a>
          </li>
          <li>
            <a href="#services">services</a>
          </li>
          <li>
            <a href="#benefits">Benefits</a>
          </li>
          <li>
            <a href="/blog">blog</a>
          </li>
          <Link to="/register" className="">
            <Button name="start now" />
          </Link>
        </ul>
      </nav>
      {/* Mobile Menu */}
      <nav
        className={`w-full bg-[#8bda64] p-4 rounded-xl md:hidden lg:hidden justify-between items-center transition-all duration-300 ${
          open ? "hidden" : "flex"
        }`}
      >
        <a
          href="/"
          className={`text-xl font-medium ${open ? "hidden" : "block"}`}
        >
          <span className="font-bold">xKhan</span>Coach
        </a>
        <div className="flex justify-between gap-4">
          <Link to={"/register"}>
            <Button name="start now" />
          </Link>
          <button className="text-3xl" onClick={() => setOpen(!open)}>
            <RiMenu3Fill />
          </button>
        </div>
      </nav>
      {/* Mobile Menu Open Link List */}
      {open && (
        <div
          className={`w-full h-full flex flex-col gap-4 bg-white transition-all duration-300 ease-in-out ${
            open ? "translate-y-0" : "translate-y-full opacity-0"
          }`}
        >
          <button
            className="text-3xl z-50 absolute right-4 top-4"
            onClick={() => setOpen(!open)}
          >
            <RxCross2 />
          </button>
          <ul
            className={`mt-12 flex flex-col gap-2 justify-between items-center p-8 *:font-medium *:capitalize *:w-full *:py-2 *:px-4 *:text-center *:bg-gray-100 transition-all duration-300 ease-in-out ${
              !open
                ? "opacity-0 -translate-y-[600px]"
                : "opacity-100 translate-y-0"
            }`}
          >
            <li className="hover:bg-[#8bda64] transition-all duration-150">
              <a href="#about">about me</a>
            </li>
            <li className="hover:bg-[#8bda64] transition-all duration-150">
              <a href="#services">services</a>
            </li>
            <li className=" hover:bg-[#8bda64] transition-all duration-150">
              <a href="#benefits">Benefits</a>
            </li>
            <li className=" hover:bg-[#8bda64] transition-all duration-150">
              <a href="/blog">blog</a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
