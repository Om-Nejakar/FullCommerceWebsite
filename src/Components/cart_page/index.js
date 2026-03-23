import {useState , useContext } from "react";
import Header from "../Header";
import {Cart } from "../context/cart-context";
import Footer from "../Footer";
import Rating from '@mui/material/Rating';
import { SlSizeFullscreen } from "react-icons/sl";
import Button from "@mui/material/Button";
import { FaRegHeart } from "react-icons/fa";
import Productmodal from "../productModal";

function CartPage() 
{
  const {cart, setCart}  = useContext(Cart); //setCart is not requires in cart page only cart array is req 

  const [isopenproductModal, setisopenproductModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  
    const removeFromCart = (productName) => {
      setCart((prevCart) => prevCart.filter(item => item.name !== productName));
    };
  return (
    <>
      <Header />
      <div className="cart-page">
      {cart.length >0 ? cart.map((item, index)=>
      (
        
        <div className="item productItem">
                <div className="imgWrapper">
                    <img src={item.image} className="w-100" alt={item.name} />
                    <span className="badge bg-primary">
                        {Math.floor(Math.random() * (90 - 10 + 1)) + 10}%
                    </span>
                </div>
                <div className="info">
                    <h4>{item.name}</h4>
                    <span className="text-success d-block color-green">In Stock</span>
                    <Rating className="mt-2 mb-2" name="read-only" value={item.rating} readOnly size="small" />
                    <div className="d-flex priceRow">
                        <span className="oldPrice">${item.oldPrice}</span>
                        <span className="netPrice text-danger">${item.netPrice}</span>
                        <p>Quantity: {item.quantity}</p>
                    </div>
                    <div className='action'>
                        <Button className='heart'><FaRegHeart /></Button>
                    </div>
                    <Button
                      color="error"
                      onClick={() => removeFromCart(item.name)}
                    >
                    Remove from Cart
                    </Button>
                </div>
            </div>


      )): <>
        <div className="cart-empty">
          <h1>Your cart is empty</h1>
        </div>
      </>}

      </div>

      
{isopenproductModal && (
                <Productmodal 
                    product={selectedProduct} 
                    isopen={isopenproductModal} 
                    setisopen={setisopenproductModal} 
                />
            )}
      <Footer />
    </>
  );
}

export default CartPage;


