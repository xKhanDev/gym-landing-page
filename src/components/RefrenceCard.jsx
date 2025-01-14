import React from "react";

const RefrenceCard = ({ image, name, message }) => {
  return (
    <div className="card-testimonial-bg flex flex-col items-center">
      <img src={image} alt={name} className="w-20 ml-8 rounded-full" />
      <h1 className="text-xl font-semibold capitalize ml-8">{name}</h1>
      <p className="mt-8 text-sm text-center mx-24">{message}</p>
    </div>
  );
};

export default RefrenceCard;
