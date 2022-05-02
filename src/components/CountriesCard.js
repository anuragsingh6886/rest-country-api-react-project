import React from "react";
import { useCountries } from "../data/useCountries";
import Card from "./Card";

export default function CountriesCard(props) {
  const { selectedRegion } = useCountries();

  if (props.countryName === "Israel") return;

  if (props.region === selectedRegion) {
    return <Card {...props} />;
  } else if (selectedRegion === "default") {
    return <Card {...props} />;
  }
}
