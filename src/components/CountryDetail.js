import React from "react";
import { useCountries } from "../data/useCountries";
import Button from "./shared/Button";
import CountryInfo from "./CountryInfo";
export default function CountryDetail({ data }) {
  const { setCountryDetail } = useCountries();
  return (
    <div className="w-screen h-screen  space-y-12 > *+* px-10">
      <Button
        onClick={() =>
          setCountryDetail(() => ({ isChecked: false, index: null }))
        }
      />
      <div className="grid sm:grid-cols-2  gap-10 sm:gap-0 place-items-center sm:place-items-start">
        <div>
          <img src={data.flags.png} alt="flag" className="lg:min-w-[30rem] 	" />
        </div>
        <CountryInfo data={data} />
      </div>
    </div>
  );
}
