import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button";

const Navbar = () => {
  return (
    <nav className="w-full flex justify-between items-center">
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
        <li className="">
          <Button name="start now" />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
