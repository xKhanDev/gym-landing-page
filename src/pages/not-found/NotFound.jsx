import React from "react";
import { IoWarning } from "react-icons/io5";
import Button from "../../components/Button";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="w-full h-screen flex flex-col gap-6 justify-center items-center">
      <IoWarning className="text-6xl text-red-500" />
      <p className="text-3xl font-semibold text-center">
        Wrong route Dude 😒 <br />{" "}
        <span className="text-gray-600 text-base">
          Please check your URL Link
        </span>
      </p>
      <Link to="/">
        <Button name="Home" />
      </Link>
    </div>
  );
};

export default NotFound;
