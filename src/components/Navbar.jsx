import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logOut } = UserAuth();
  console.log(user);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-between p-4 w-full absolute z-10">
      <Link to="/">
        <h1 className="text-red-600 ab text-4xl font-bold  cursor-pointer">
          NETFLIX
        </h1>
      </Link>
      {user?.email ? (
        <div>
          <Link to="/account">
            <button className="border-neutral-500 px-6 py-2  cursor-pointer rounded-md m-2 text-white">
              Account
            </button>
          </Link>

          <button
            onClick={handleLogout}
            className="bg-red-500 px-6 py-2 cursor-pointer rounded-md  text-white"
          >
            Logout
          </button>
        </div>
      ) : (
        <div>
          <Link to="/login">
            <button className="border-neutral-500 px-6 py-2  cursor-pointer rounded-md m-2 text-white">
              Sign In
            </button>
          </Link>
          <Link to="/signup">
            <button className="bg-red-500 px-6 py-2 cursor-pointer rounded-md  text-white">
              Sign Up
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
