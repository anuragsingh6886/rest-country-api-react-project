import React from "react";
import { useCountries } from "../data/useCountries";
export default function Card({
  population,
  region,
  capital,
  countryName,
  flag,
  index,
}) {
  const { setCountryDetail } = useCountries();
  return (
    <div
      className=" flex flex-col dark:bg-darkblue bg-white dark:shadow-2xl 
    dark:text-white text-lightText rounded-md"
      onClick={() =>
        setCountryDetail((current) => ({ isClicked: true, index }))
      }
    >
      <div className="lg:max-h-[10rem]">
        <img
          src={flag}
          alt="Flag"
          className="rounded-t-md w-full max-h-[96%]  object-cover"
        />
      </div>
      <div className="py-10 px-5 space-y-2 > *+* font-semibold">
        <h1 className="font-bold">{countryName}</h1>
        <div className="space-y-2 ">
          <p>
            Population:
            <span className="font-normal ml-1">
              {population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </span>
          </p>
          <p>
            Region: <span className="font-normal ml-1">{region}</span>
          </p>
          <p>
            Capital: <span className="font-normal ml-1 ">{capital}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
