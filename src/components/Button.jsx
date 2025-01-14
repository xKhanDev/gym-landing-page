import React from "react";

const Button = ({ name }) => {
  return (
    <div className="flex justify-center items-center capitalize bg-purple-500 text-white px-4 py-2 rounded-full my-cursor font-semibold">
      {name}
    </div>
  );
};

export default Button;
