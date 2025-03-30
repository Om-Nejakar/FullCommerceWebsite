import { useState, useEffect } from "react";
import Axios from "axios";
import CountryDropdown from "../CountryDropdown";

const FetchCountries = () => {
  const [countries, setCountries] = useState([]);

  // Function to fetch country list from API
  const fetchCountries = async () => {
    try {
      console.log("Fetching countries...");
      const res = await Axios.get("https://countriesnow.space/api/v0.1/countries");
      // console.log("API Response:", res.data);

      const countryNames = res.data.data.map((country) => country.country);
      // console.log("Extracted Countries:", countryNames);

      setCountries(countryNames);
    } catch (err) {
      console.error("Error fetching countries:", err);
    }
  };

  useEffect(() => {
    fetchCountries(); // Fetch on mount
  }, []);

  return <CountryDropdown countries={countries} fetchCountries={fetchCountries} />;
};

export default FetchCountries;
