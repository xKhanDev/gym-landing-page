import React from "react";

const WhyUs = () => {
  const whyUsData = [
    {
      id: 1,
      title: "personlized training plans",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, dolores.",
    },
    {
      id: 2,
      title: "flexibility and convience",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, dolores.",
    },
    {
      id: 3,
      title: "Supportive community",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, dolores.",
    },
    {
      id: 4,
      title: "expert guidance",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, dolores.",
    },
  ];

  return (
    <div className="w-full flex flex-col items-center gap-8" id="benefits">
      <h1 className="text-3xl font-bold header-font mb-8 uppercase">
        Benefits of choosing our online coaching
      </h1>
      <div className="flex items-center gap-4">
        <div className="flex flex-col gap-4 *:text-gray-700">
          {whyUsData.map((data) => (
            <WhyUsCard
              key={data.id}
              title={data.title}
              description={data.description}
              index={data.id}
            />
          ))}
        </div>
        <div className="w-[40%] h-[85vh]">
          <img
            src="sit-pose.jpeg"
            alt="Man showing his body"
            className="rounded-xl h-full"
          />
        </div>
      </div>
    </div>
  );
};

const WhyUsCard = ({ title, description, index }) => {
  return (
    <div
      className={`flex flex-col gap-4 *:text-gray-700 p-3 rounded-xl ${
        index % 2 === 0 ? "bg-[#a6fea4]" : "bg-[#fec7dc]"
      }`}
    >
      <h3 className="text-xl font-semibold capitalize">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default WhyUs;
