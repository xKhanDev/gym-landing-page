import React from "react";
import ServiceCard from "../../components/ServiceCard";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Individual Training plans",
      icon: "/plans.svg",
    },
    {
      id: 2,
      title: "online group lessons",
      icon: "/caoching.svg",
    },
    {
      id: 3,
      title: "support and motivation",
      icon: "/support.svg",
    },
  ];
  return (
    <div className="w-full flex flex-col items-center" id="services">
      <h1 className="text-3xl font-bold header-font mb-8 uppercase">
        Services
      </h1>
      <div className="flex justify-between items-center gap-8">
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            title={service.title}
            icon={service.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
