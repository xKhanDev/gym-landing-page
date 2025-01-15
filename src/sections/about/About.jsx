import React from "react";

const About = () => {
  return (
    <div
      className="w-full md:h-full flex flex-col-reverse md:flex-row md:items-center lg:items-start gap-8 my-8"
      id="about"
    >
      <div className="w-full md:w-1/3 h-[50%] md:h-full">
        <img
          src="man-show.jpeg"
          alt="Man showing his body"
          className="rounded-xl md:h-[40%] lg:h-full"
        />
      </div>
      <div className="w-full flex flex-col ml-0 md:ml-8 lg:ml-8">
        <h1 className="text-3xl font-bold header-font mb-8 uppercase">About</h1>
        <div className="flex flex-col gap-4 *:text-gray-700 *:text-balance">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            tincidunt, nunc nec ultricies ultricies, nunc nunc ultricies nunc,
            ultricies nunc nunc ultricies nunc. Nullam tincidunt, nunc nec.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            tincidunt, nunc nec ultricies ultricies, nunc nunc ultricies nunc,
            ultricies nunc nunc ultricies nunc. Nullam tincidunt, nunc nec.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            tincidunt, nunc nec ultricies ultricies, nunc nunc ultricies nunc,
            ultricies nunc nunc ultricies nunc. Nullam tincidunt, nunc nec.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
