import React from "react";
import { useCountries } from "../data/useCountries";
export default function CountryBorders({ borders }) {
  const { countries } = useCountries();
  return (
    <p className="font-semibold break-words">
      Border Countries:
      {borders.map((border, i) => {
        return (
          <span
            className="font-normal ml-2 py-2 px-5 dark:bg-darkblue dark:shadow-lg  sm:inline-block  "
            key={i}
          >
            {countries
              .filter(
                (country) => country.cioc === border || country.cca3 === border
              )
              .map((country) => country.name.common)}
          </span>
        );
      })}
    </p>
  );
}
