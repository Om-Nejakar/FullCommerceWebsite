import { FaCartPlus } from "react-icons/fa";
import Button from "@mui/material/Button"
import { Link } from "react-router-dom";
import {Cart} from "../context/cart-context";
import { useContext } from "react";


const CartLogo = () =>
{
    const {cart} = useContext(Cart);

    return (
        <>
            <div className="cartTab ms-5">
                    <span className="price">$ 33.6</span>
                    <div className="position-relative ms-2 d-flex align-items-center justify-content-center">
                      <Link to="/cart" ><Button className="cart"><FaCartPlus /></Button></Link>
                      <span className="count">{cart?.length || 0}</span>
                    </div>
                    
            </div>
        </>
    )
}
export default CartLogo;