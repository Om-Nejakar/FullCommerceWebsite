import * as React from 'react';
import Button from "@mui/material/Button";
import { FaAngleDown } from 'react-icons/fa';
import Dialog from '@mui/material/Dialog';
import Search from "../Header/Search";
import { IoClose } from "react-icons/io5";
import { useState, useEffect } from "react";
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';

// Transition for Dialog
const Transition = React.forwardRef(function Transition(
    props: TransitionProps & { children: React.ReactElement<any, any>; },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const CountryDropdown = ({ countries = [], fetchCountries }) => {
    const [isopen, setisopen] = useState(false);
    const [countryName, setcountryName] = useState("");
    const [activeCountry, setActiveCountry] = useState(null);
    const [filteredCountries, setFilteredCountries] = useState(countries);

    // Fetch countries when the modal opens
    useEffect(() => {
        // console.log("Dropdown opened:", isopen);
        if (isopen) {
            // console.log("Calling fetchCountries...");
            fetchCountries();
        }
    }, [isopen]);

    // Log received countries
    useEffect(() => {
        // console.log("Received countries in Dropdown:", countries);
    }, [countries]);

    // Update filteredCountries when countries change
    useEffect(() => {
        setFilteredCountries(countries);
    }, [countries]);

    function handleClick(event, country) {
        setisopen(false);
        setcountryName(country);  // Fix: Assigning country directly instead of event.target.value
        setActiveCountry(country);
    }

    return (
        <>
            <Button className="countryDrop" onClick={() => setisopen(true)}>
                <div className="info d-flex flex-column">
                    <span className="label">Your Location</span>
                    <span className="name">{countryName == ""? "Select Location" : countryName.length>10 ? countryName.substr(0,10) +"..." : countryName}</span>
                </div>
                <span className="ml-auto"><FaAngleDown /></span>
            </Button>
            <Dialog open={isopen} onClose={() => setisopen(false)} className="locationModal" TransitionComponent={Transition}>
                <Button className="close_" onClick={() => setisopen(false)} ><IoClose /></Button>
                <h4 className="mb-0">Choose your Delivery Location</h4>
                <p>Enter your address and we will specify the offer for your area.</p>

                <Search 
                    width={100} 
                    margin={0} 
                    placeholder="Search your area..." 
                    className=" bg-light"
                    list={countries}
                    onFilter={setFilteredCountries} 
                />

                <ul className="countryList mt-3">
                    {filteredCountries.length > 0 ? (
                        filteredCountries.map((country, index) => (
                            <li key={index}>
                                <Button
                                    onClick={(event) => handleClick(event, country)}
                                    className={country === activeCountry ? 'active' : ''}
                                >
                                    {country}
                                </Button>
                            </li>
                        ))
                    ) : (
                        <li>No countries available</li>
                    )}
                </ul>
            </Dialog>
        </>
    );
}

export default CountryDropdown;
