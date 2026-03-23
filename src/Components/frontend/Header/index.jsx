import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Search from "./Search";
import { LuUser } from "react-icons/lu";
import CartLogo from "../Cart";
import Navigation from "./Navigation";
import FetchCountries from "../CountryDropdown/fetchCountries";


const Header = () => {
  return (
    <>
   
      <div className="headerwrapper">
        <div className="top-strip bg-blue">
          <div className="container">
            <p className="mb-0 mt-0 text-center">
              Due to the <b>COVID-19</b> epidemic, orders may be processed with a slight delay.
            </p>
          </div>
        </div>

        <header className="header">
          <div className="container">
            <div className="row">
              <div className="logoWrapper d-flex align-items-center col-sm-2">
                <Link to="/"><img src="https://static.vecteezy.com/system/resources/previews/009/150/016/original/aim-logo-aim-letter-aim-letter-logo-design-initials-aim-logo-linked-with-circle-and-uppercase-monogram-logo-aim-typography-for-technology-business-and-real-estate-brand-vector.jpg" style={{ height: "80px" ,width:"180px",borderRadius:"20px"}} alt="logo" /></Link>
              </div>

              <div className="col-sm-10 d-flex align-items-center part2">
                {/*  Using FetchCountries instead of CountryDropdown */}
                <FetchCountries />

                {/* Header search bar */}
                <Search placeholder="Search Products..." type="search" />

                {/* User icon */}
                <div className="part3 d-flex align-items-center ms-auto">
                  <Link to="/profile"> <Button className="circle mr-3"><LuUser /></Button></Link>
                  <CartLogo />
                </div>
              </div>
            </div>
          </div>
        </header>

        <Navigation />
      </div>
    </>
  );
};

export default Header;
