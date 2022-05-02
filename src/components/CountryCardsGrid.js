import React from "react";
import { useCountries } from "../data/useCountries";
import CountriesCard from "./CountriesCard";

export default function CountriesCardsGRid() {
  const { countries, searchedCountry } = useCountries();
  return (
    <div className=" w-full grid lg:grid-cols-4 gap-16  sm:grid-cols-3 ">
      {countries
        .filter((country) => {
          if (
            country.name.common
              .toLowerCase()
              .includes(searchedCountry.toLowerCase())
          ) {
            return country;
          } else if (!searchedCountry) {
            return country;
          }
        })
        .map((country, i) => {
          return (
            <CountriesCard
              key={i}
              index={countries.indexOf(country)}
              flag={country.flags.svg}
              countryName={country.name.common}
              population={country.population}
              region={country.region}
              capital={country.capital}
            />
          );
        })}
    </div>
  );
}
