import React, { useEffect, useState } from "react";
import RefrenceCard from "../../components/RefrenceCard";

const Refrences = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const refrences = [
    {
      id: 1,
      image: "https://randomuser.me/api/portraits/men/1.jpg",
      name: "John Doe",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, dolores.Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, dolores.Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, dolores.",
    },
    {
      id: 2,
      image: "https://randomuser.me/api/portraits/women/2.jpg",
      name: "Saira",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, dolores.",
    },
    {
      id: 3,
      image: "https://randomuser.me/api/portraits/men/3.jpg",
      name: "Mohsin khan",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, dolores.",
    },
    {
      id: 4,
      image: "https://randomuser.me/api/portraits/women/4.jpg",
      name: "Angelina",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, dolores.",
    },
    {
      id: 5,
      image: "https://randomuser.me/api/portraits/men/5.jpg",
      name: "Ali",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, dolores.",
    },
  ];

  // Compute the items to display based on the current index
  const filteredRefrences = [
    ...refrences,
    ...refrences, // Duplicate array for infinite scrolling effect
  ].slice(currentIndex, currentIndex + 3);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % refrences.length);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [refrences.length]);

  return (
    <div className="w-full flex flex-col items-center gap-8 my-8 overflow-hidden">
      <h1 className="text-3xl font-bold header-font mb-8 uppercase">
        Refrences
      </h1>
      <div className="flex justify-between items-center md:w-full">
        {filteredRefrences.map((refrence, index) => (
          <RefrenceCard
            key={`${refrence.id}-${index}`}
            image={refrence.image}
            name={refrence.name}
            message={refrence.message}
          />
        ))}
      </div>
    </div>
  );
};

export default Refrences;
