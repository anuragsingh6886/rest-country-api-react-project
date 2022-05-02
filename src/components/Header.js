import React from "react";
import { useCountries } from "../data/useCountries";
import { MdOutlineDarkMode } from "react-icons/md";
export default function Hrader() {
  const { setDark, dark } = useCountries();
  return (
    <header className="flex justify-between px-10 py-5 mb-12 dark:shadow-lg ">
      <h1 className="text-lightText dark:text-white text-2xl font-bold">
        Where In The World?
      </h1>
      <button
        onClick={() => setDark((dark) => !dark)}
        className="text-lg text-lightText dark:text-white flex items-center justify-center font-medium"
      >
        <MdOutlineDarkMode className="mr-2" fill={dark ? "white" : ""} />
        {dark ? "Light Mode" : "Dark Mode"}
      </button>
    </header>
  );
}
