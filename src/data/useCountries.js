import React, { createContext, useContext, useEffect, useState } from "react";

const CountriesContext = createContext();
export const useCountries = () => useContext(CountriesContext);

export default function CountriesProvider({ children }) {
  const [countries, setCountries] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState("");
  const [loading, setLoading] = useState(false);
  const [searchedCountry, setSearchedCountry] = useState("");
  const [dark, setDark] = useState(true);
  const [countryDetail, setCountryDetail] = useState({
    isClicked: false,
    index: null,
  });

  useEffect(() => {
    const getContries = () => {
      fetch(`https://restcountries.com/v3.1/all`)
        .then((res) => res.json())
        .then((countriesData) => {
          setCountries(countriesData);
          setLoading(true);
        })
        .catch((err) => console.error(err));
    };
    getContries();
  }, [selectedRegion]);

  return (
    <CountriesContext.Provider
      value={{
        countries,
        selectedRegion,
        setSelectedRegion,
        loading,
        setSearchedCountry,
        searchedCountry,
        dark,
        setDark,
        countryDetail,
        setCountryDetail,
      }}
    >
      {children}
    </CountriesContext.Provider>
  );
}
