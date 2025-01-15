import React from "react";

const RefrenceCard = ({ image, name, message }) => {
  return (
    <div className="card-testimonial-bg flex flex-col items-center md:size-[250px] lg:size-[400px]">
      <img
        src={image}
        alt={name}
        className="w-20 md:w-10 lg:w-20 ml-8 rounded-full"
      />
      <h1 className="text-xl font-semibold capitalize ml-8 md:text-base md:font-bold">
        {name}
      </h1>
      <p className="mt-8 md:mt-2 md:mx-10 lg:mt-8 lg:mx-24 lg:text-base text-sm text-center mx-24">
        {message}
      </p>
    </div>
  );
};

export default RefrenceCard;
