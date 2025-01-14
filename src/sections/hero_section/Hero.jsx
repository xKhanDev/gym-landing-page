import React from "react";
import Button from "../../components/Button";

const Hero = () => {
  return (
    <div className="w-full h-full flex justify-between items-center">
      <div className="w-1/2 flex flex-col gap-4">
        <h1 className="text-5xl font-extrabold capitalize header-font">
          discover your strength with a personal coach
        </h1>
        <p className="text-lg text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque eveniet
          quibusdam recusandae animi ratione, quod rerum aspernatur distinctio
          saepe consequuntur?
        </p>
        <div className="w-36 mx-auto my-0">
          <Button name="register now" />
        </div>
      </div>
      <div className="w-1/2 h-full card-bg flex justify-center items-center">
        <img src="/man.png" alt="Bodybuilder Man" className="h-[70vh]" />
      </div>
    </div>
  );
};

export default Hero;
