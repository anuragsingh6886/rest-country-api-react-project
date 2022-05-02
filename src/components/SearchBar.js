import React from "react";
import { BiSearch } from "react-icons/bi";
import { useCountries } from "../data/useCountries";

export default function SearchBar() {
  const { setSearchedCountry, searchedCountry, dark } = useCountries();

  return (
    <div className="relative pb-5 sm:pb-0">
      <BiSearch
        fill={dark ? "white" : "hsl(0, 0%, 52%)"}
        className="text-2xl absolute top-2 left-4"
      />
      <input
        type="search"
        name="search"
        value={searchedCountry}
        placeholder="Search for a country..."
        className="border-none  dark:bg-darkblue px-16 dark:placeholder:text-lightInput placeholder:text-gray-400 max-w-[100%] dark:text-white text-lightInput font-medium"
        onChange={(e) => setSearchedCountry(e.target.value)}
      />
    </div>
  );
}
