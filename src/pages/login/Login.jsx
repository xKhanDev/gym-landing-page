import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button";

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen gap-4 px-10">
      <h1 className="text-3xl font-bold">Welcome back</h1>
      <form
        action=""
        className="w-full lg:w-1/2 lg:p-8 flex flex-col gap-3 rounded-2xl border-[1px] border-purple-500 p-4"
      >
        <input
          type="email"
          className="input bg-gray-100"
          placeholder="Email"
          required
        />
        <input
          type="password"
          className="input bg-gray-100"
          placeholder="Password"
          required
        />
        <Link to="/" className="mt-6">
          <Button name="Login" />
        </Link>
      </form>
    </div>
  );
};

export default Login;
