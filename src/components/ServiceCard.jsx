import React from "react";

const ServiceCard = ({ title, icon }) => {
  return (
    <div className="w-44 bg-[#8bda64] p-4 flex flex-col items-center gap-8 rounded-xl">
      <h1 className="text-xl font-semibold capitalize">{title}</h1>
      <img src={icon} alt={title} className="w-28" />
    </div>
  );
};

export default ServiceCard;
