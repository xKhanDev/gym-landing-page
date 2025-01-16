import React from "react";
import Button from "../../components/Button";

const Hero = () => {
  const [imageLoaded, setImageLoaded] = React.useState(false);

  const handleImage = () => {
    setImageLoaded(true);
  };
  return (
    <div className="w-full h-full flex flex-col-reverse md:flex-row justify-between items-center">
      <div className="w-full md:w-1/2 flex flex-col gap-4">
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
      <div className="h-1/2 md:w-1/2 md:h-full card-bg flex justify-center items-center">
        {!imageLoaded && (
          <div className="absolute top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center">
            <div className="loader"></div>
          </div>
        )}
        <img
          src="/man.png"
          alt="Bodybuilder Man"
          className="h-full md:h-[40vh] lg:h-[70vh]"
          onLoad={handleImage}
        />
      </div>
    </div>
  );
};

export default Hero;
