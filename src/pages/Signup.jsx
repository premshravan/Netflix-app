import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";


const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, signUp } = UserAuth();
  const navigate=useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signUp(email, password);
      navigate('/')
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="w-full h-screen">
        <img
          className="hidden sm:block absolute w-full h-full object-cover"
          src="https://cdn.mos.cms.futurecdn.net/rDJegQJaCyGaYysj2g5XWY-970-80.jpg.webp"
          alt=""
        />
        <div className="bg-black/50 fixed top-0 left-0 w-full h-screen"></div>
        <div className="fixed w-full px-4 py-24 ">
          <div className="max-w-[400px] h-[500px] mx-auto bg-black/75 text-white">
            <div className="max-w-[320px] mx-auto py-16">
              <h1 className="text-2xl font-bold text-center">Sign Up</h1>
              <form
                onSubmit={handleSubmit}
                className="w-full flex flex-col py-4"
              >
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  className="p-3 my-2 bg-gray-700 rounded"
                  type="email"
                  placeholder="email"
                  autoComplete="email"
                />
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  className="p-3 my-2 bg-gray-700 rounded"
                  type="password"
                  placeholder="password"
                  autoComplete="current-password"
                />
                <button className="bg-red-600 py-3 my-6 rounded-md font-bold">
                  Sign Up
                </button>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <p>
                    <input type="checkbox" /> Remember Me
                  </p>
                  <p>Need help?</p>
                </div>
                <p className="py-8">
                  <span className=" text-gray-500">
                    Already subscribed to Netflix..?
                  </span>{" "}
                  <Link to="/login">Sign In</Link>{" "}
                </p>
              </form>
              
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
