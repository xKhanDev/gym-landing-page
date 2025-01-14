import React from "react";
import Button from "../../components/Button";

const RegisterForm = () => {
  return (
    <div className="w-full flex flex-col items-center gap-8 my-8">
      <h1 className="text-3xl font-bold header-font uppercase">Register now</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
        veniam dolore soluta, at voluptatum nam, necessitatibus cumque dolorem
        aspernatur odit harum commodi unde rerum voluptas sequi natus optio enim
        ipsum.
      </p>
      <form
        id="contact-form"
        action=""
        className="w-full flex flex-col items-center gap-8 p-6 bg-[#6da7ff] rounded-xl"
      >
        <h1 className="text-xl font-bold header-font uppercase">
          Contact form
        </h1>
        <div className="w-1/2 flex gap-4">
          <div className="flex flex-col w-full h-10">
            <label
              htmlFor="firstname"
              id="firstname-label"
              className="z-10 text-white capitalize -mb-1"
            >
              firstname
            </label>
            <input
              type="text"
              name="firstname"
              id="firstname"
              className="h-full p-2 border-2 border-white  focus:outline-none transition ease-in-out duration-200"
            />
          </div>
          <div className="flex flex-col w-full h-10">
            <label
              htmlFor="lastname"
              className="z-10 text-white capitalize -mb-1"
            >
              lastname
            </label>
            <input
              type="text"
              name="lastname"
              className="h-full p-2 border-2 border-white  focus:outline-none"
            />
          </div>
        </div>
        <div className="flex flex-col w-1/2 h-10">
          <label htmlFor="email" className="z-10 text-white capitalize -mb-1">
            email
          </label>
          <input
            type="email"
            name="email"
            className="h-full p-2 border-2 border-white  focus:outline-none"
          />
        </div>
        <div className="flex flex-col w-1/2">
          <label htmlFor="message" className="capitalize z-10 text-white -mb-1">
            message
          </label>
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            className="p-2 border-2 border-white  focus:outline-none"
          ></textarea>
        </div>
        <Button name="submit your info" />
      </form>
    </div>
  );
};

export default RegisterForm;
