import Banner1 from "../../assets/images/banner1.jpg";
import Banner2 from "../../assets/images/banner2.png";
import Button from "@mui/material/Button";
import { HiOutlineArrowSmRight } from "react-icons/hi";
import Slider from "react-slick";
import ProductItem from "../productItems";
import fetchProducts from "../fetchProducts";
import { useState, useEffect } from "react";


function HomeProducts() {

    const [products , setProducts] = useState([]);
    useEffect(() => {
        const getProducts = async () => {
            const data = await fetchProducts();
            setProducts(data);    // Set the fetched products into state
        };

        getProducts();
    }, []);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
    };

    return (
        <div className="homeProducts">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <div className="banner">
                            <img src={Banner1} className="cursor w-100" />
                        </div>
                        <div className="banner mt-3">
                            <img src={Banner2} className="cursor w-100" />
                        </div>
                    </div>
                    <div className="col-md-9 productRow">
                        <div className="d-flex align-items-center">
                            <div className="info w-75">
                                <h3 className="mb-0 hd">Best Sellers</h3>
                                <p className="text-light text-sml mb-0">
                                    Do not miss the current offers until the end of March.
                                </p>
                            </div>
                            <Button className="viewAllBtn ms-auto">
                                View All <HiOutlineArrowSmRight />
                            </Button>
                        </div>

                        <div className="product_row w-100">
                            <Slider {...settings}>
                                {products.map((product, index) => (
                                    <ProductItem key={index} product={product} />
                                ))}
                            </Slider>
                        </div>

                        <div className="d-flex align-items-center mt-5">
                            <div className="info w-75">
                                <h3 className="mb-0 hd">New Products</h3>
                                <p className="text-light text-sml mb-0">
                                New products with updated stocks.
                                </p>
                            </div>
                            <Button className="viewAllBtn ms-auto">
                                View All <HiOutlineArrowSmRight />
                            </Button>
                        </div>

                        <div className="productDiv w-100">
                            {products.map((product, index) => (
                                <div className="itemBox" key={index}>
                                    <ProductItem product={product} />
                                </div>
                            ))}
                        </div>


                    </div>
                </div>
                
            </div>
        </div>
        
    );
}

export default HomeProducts;
