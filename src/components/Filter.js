import React, { useState, useEffect } from "react";

import { useCountries } from "../data/useCountries";

export default function Filter() {
  const { setSelectedRegion } = useCountries();
  const [region, setRegion] = useState("default");
  const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

  useEffect(() => {
    setSelectedRegion(region);
  }, [region, setSelectedRegion]);

  return (
    <div>
      <select
        name="regions"
        className="px-10 py-2 border-none outline-none dark:text-white text-black dark:bg-darkblue bg-lightBg dark:shadow-2xl space-y-10"
        value={region}
        onChange={(e) => setRegion(e.target.value)}
      >
        <option value="default" disabled hidden>
          Filter by Regions
        </option>
        {regions.map((region, i) => {
          return (
            <option value={region} key={i}>
              {region}
            </option>
          );
        })}
      </select>
    </div>
  );
}
