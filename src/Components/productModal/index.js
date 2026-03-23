// import * as React from 'react';
import Button from "@mui/material/Button";
import Dialog from '@mui/material/Dialog';
import { IoClose } from "react-icons/io5";
import Rating from '@mui/material/Rating';
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import QuantityBox from '../quantityBox';
import { FaRegHeart } from "react-icons/fa6";
import { useContext, useState } from 'react';
import {Cart} from "../context/cart-context";


function ProductModal({product,isopen ,setisopen})
{
    const {cart , setCart} = useContext(Cart);
    const [quantity, setQuantity] = useState(0);

    function handleCart()
    {
        setCart( (prevCart) =>
        {
            const isInCart = prevCart.some((item)=> item.name === product.name);
            if(isInCart)
            {
                return prevCart.filter((item) => item.name !== product.name);
            }
            else {
                return [...prevCart, { ...product, quantity }];
            }
        })
    }

    let isInCart = cart.some((item)=> item.name === product.name);
    return (
        <>
        <div className='content-info'>

       
            <Dialog open={isopen} >
                            <div className='close-div-button'>
                                <Button className="close-button" onClick={() => setisopen(false)} ><IoClose /></Button>
                            </div>
                            
                            <div className='product-header mt-5 ms-3'>
                                <h4 className="mb-0">{product.name}</h4>
                                <span >{product.rating}<Rating className="mt-2 mb-5" name="read-only" value={product.rating} readOnly size="small" /></span>
                            </div>
                        
                         

                           
                        
                            <div className=' row Product-info'>
                                <div className="col productimage">
                                 
                                        <div className="item " >
                                            <InnerImageZoom src={product.image} zoomSrc={product.image} />
                                        </div>
                                        
                                  
                                    <span className="badge bg-primary">{Math.floor(Math.random()*(90-10+1))+10}%</span>
                                </div>
                                <div className="col productdetail">
                                    <span className="oldPrice">${product.oldPrice}</span>
                                    <span className="netPrice text-danger">${product.netPrice}</span>
                                    <span className="text-success d-block color-green">In Stock</span>
                                    <p>{product.description}</p>


                                    <div className='d-flex align-items-center'>

                                        <QuantityBox quantity = {quantity} setQuantity={setQuantity}/>
                                        
                                        <div className='addtocart' 
                                        onClick={() => {
                                            if(quantity > 0) {
                                                handleCart();
                                            }
                                        }}
                                        >
                                        {quantity === 0 ? "Add to Cart" : (isInCart ? "Remove from Cart":"Add to Cart")}</div>
                                    </div>

                                    <div className='d-flex align-items-center mt-5'>
                                    <Button><FaRegHeart className="me-1"/>Add to wishList</Button>
                                </div>
                                </div>

                                
                            </div>
                            
                            
                        </Dialog>
        </div>
     </>
    )

}

export default ProductModal;