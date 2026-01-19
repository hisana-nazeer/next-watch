"use client"
import Header from "../components/Header";
import { useState } from "react";

export default function Page() {
    const [ showSignUp, setShowSignUp ] = useState(false)

    const toggleSignUpForm = () => {
        setShowSignUp(!showSignUp);
    };

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      <form className="w-full max-w-md mx-auto mt-20 rounded bg-black/75 shadow:lg p-8 md:p-10 text-white">
        <h1 className="mb-6 pt-20  text-center text-3xl font-semibold">{showSignUp? "Sign Up": "Sign In"}</h1>

        {showSignUp &&(
        <input
          type="text"
          placeholder="Full Name"
          className="w-full mb-4 h-12 rounded bg-[#333] px-4 placeholder-gray-400 focus:outline-none"
        /> )}
        <input
          type="text"
          placeholder="Email address"
          className="w-full mb-4 h-12 rounded bg-[#333] px-4 placeholder-gray-400 focus:outline-none"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-6 h-12 rounded bg-[#333] px-4 placeholder-gray-400 focus:outline-none"
        />

        <button className="w-full rounded bg-orange-500 py-3 text-lg font-semibold hover:bg-red-700 transition">
          {showSignUp? "Sign Up": "Sign In"}
        </button>
      </form>
      <p className="cursor-pointer p-10 mx-20 " onClick={toggleSignUpForm}>{showSignUp?"New to nextWatch? Sign Up now":"Already Registered? Sign In" }</p>
    </div>
  );
    }
