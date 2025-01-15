import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <div className="w-full flex justify-between items-center">
        <h1 className="text-xl font-semibold">xKhanCoach</h1>
        <p className="hidden md:flex">
          Copyright &copy; 2025 All Rights Reserved by{" "}
          <a
            href="www.linkedin.com/in/safeer-khan-x"
            target="_blank"
            className="font-medium text-red-500"
          >
            xKhanDev
          </a>
        </p>
        <div className="flex items-center gap-4 text-2xl">
          <a
            href="www.linkedin.com/in/safeer-khan-x"
            target="_blank"
            className="hover:text-blue-500 hover:scale-110 transition-all"
          >
            <BsLinkedin />
          </a>
          <a
            href="https://github.com/xKhanDev"
            target="_blank"
            className=" text-gray-700 hover:text-black hover:scale-110 transition-all"
          >
            <BsGithub />
          </a>
        </div>
      </div>
      <p className="w-full flex text-sm my-4 mx-auto md:hidden lg:hidden">
        Copyright &copy; 2025 All Rights Reserved by{" "}
        <a
          href="www.linkedin.com/in/safeer-khan-x"
          target="_blank"
          className="font-medium text-red-500"
        >
          xKhanDev
        </a>
      </p>
    </>
  );
};

export default Footer;
