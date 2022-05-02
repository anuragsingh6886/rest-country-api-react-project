import React from "react";
import CountryBorders from "./CountryBorders";
export default function CountryInfo({ data }) {
  const curr = Object.values(data.currencies).map((curr) => curr);
  return (
    <div className="dark:text-white text-lightText grid sm:grid-cols-2 my-auto">
      <h1 className="text-2xl font-bold sm:col-span-2">{data.name.common}</h1>
      {/* INFO */}

      {/* left*/}
      <div className="space-y-3 font-semibold mb-10 sm:mb-0 ">
        <p>
          Native Name:
          <span className="font-normal ml-2">
            {Object.values(data.name.nativeName)[0].common}
          </span>
        </p>
        <p>
          Population:
          <span className="font-noraml ml-2">
            {data.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </span>
        </p>
        <p>
          Region: <span className="font-normal ml-2">{data.region}</span>
        </p>
        <p>
          Sub Region:
          <span className="font-normal ml-2">{data.subregion}</span>
        </p>
        <p>
          Capital: <span className="font-normal ml-2 ">{data.capital}</span>
        </p>
      </div>
      {/* right */}
      <div className="space-y-2 font-semibold mb-10 sm:mb-0 ">
        <p>
          Top Level Domain:
          <span className="font-normal ml-2">{data.tld[0]}</span>
        </p>
        <p>
          Currencies:
          <span className="font-normal ml-2">{curr.map((c) => c.name)}</span>
        </p>
        <p>
          Languagees:
          <span className="font-normal ml-2 ">
            {Object.values(data.languages).join(", ")}
          </span>
        </p>
      </div>
      <div className="sm:col-span-2">
        <CountryBorders borders={data.borders} />
      </div>
    </div>
  );
}
