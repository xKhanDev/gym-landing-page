import React from "react";
import { BiSolidError } from "react-icons/bi";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <div className="w-full h-screen flex gap-4 flex-col justify-center items-center">
      <h1 className="text-[250px] font-bold text-purple-500">
        <BiSolidError />
      </h1>
      <p className="text-3xl font-semibold">Sorry for Their is No Blog</p>
      <Link
        to="/"
        className="flex justify-center items-center capitalize bg-purple-500 text-white px-4 py-2 rounded-full my-cursor font-semibold"
      >
        Home
      </Link>
    </div>
  );
};

export default Blog;
