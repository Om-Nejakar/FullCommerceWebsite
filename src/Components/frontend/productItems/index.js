import Rating from '@mui/material/Rating';
import { SlSizeFullscreen } from "react-icons/sl";
import Button from "@mui/material/Button";
import { FaRegHeart } from "react-icons/fa";
import Productmodal from "../productModal";
import { useContext, useState } from 'react';

function ProductItem({ product }) {

    const [isopenproductModal, setisopenproductModal] = useState(false);

    const viewProductDetails = () => {
        setisopenproductModal(true);
    };

    return (
        <>
            <div className="item productItem">
                <div className="imgWrapper">
                    <img src={product.image} className="w-100" alt={product.name} />
                    <span className="badge bg-primary">
                        {Math.floor(Math.random() * (90 - 10 + 1)) + 10}%
                    </span>
                </div>
                <div className="info">
                    <h4>{product.name}</h4>
                    <span className="text-success d-block color-green">In Stock</span>
                    <Rating className="mt-2 mb-2" name="read-only" value={product.rating} readOnly size="small" />
                    <div className="d-flex priceRow">
                        <span className="oldPrice">${product.oldPrice}</span>
                        <span className="netPrice text-danger">${product.netPrice}</span>
                    </div>
                    <div className='action'>
                        <Button className='fullScreen' onClick={viewProductDetails}>
                            <SlSizeFullscreen />
                        </Button>
                        <Button className='heart'><FaRegHeart /></Button>
                    </div>
                </div>
            </div>

            {isopenproductModal && (
                <Productmodal 
                    product={product} 
                    isopen={isopenproductModal} 
                    setisopen={setisopenproductModal} 
                />
            )}
        </>
    );
}

export default ProductItem;
