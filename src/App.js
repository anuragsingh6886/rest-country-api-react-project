import React from "react";
import CountryCardsGrid from "./components/CountryCardsGrid.js";
import Filter from "./components/Filter";
import SearchBar from "./components/SearchBar.js";
import Spinner from "./components/shared/spinner.js";
import { useCountries } from "./data/useCountries.js";
import Header from "./components/Header";
import Country from "./components/CountryDetail";
function App() {
  const { loading, dark, countryDetail, countries } = useCountries();
  return (
    <div className={dark ? "dark" : ""}>
      <div className="w-100% h-screen dark:bg-darkBg bg-lightBg overflow-x-hidden">
        <Header />
        {countryDetail.isClicked ? (
          <Country data={countries[countryDetail.index]} />
        ) : (
          <main className="w-screen h-screen  space-y-12 > *+* px-10 ">
            <div className="flex justify-between items-center flex-col sm:flex-row ">
              <SearchBar />
              <Filter />
            </div>
            {loading ? (
              <CountryCardsGrid />
            ) : (
              <div className="grid place-items-center w-full h-full">
                <Spinner />
              </div>
            )}
          </main>
        )}
      </div>
    </div>
  );
}

export default App;
