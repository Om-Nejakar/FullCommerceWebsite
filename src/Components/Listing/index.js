import Sidebar from "../sideBar";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Review from "../Review";
import HomeBanner from "../homeBanner";
import ProductItem from "../productItems";
import fetchProducts from "../fetchProducts";
import { useState, useEffect } from "react";
import ReviewList from "../reviewList";

function Listing()
{

      const [products , setProducts] = useState([]);
      const [reviews, setReviews] = useState([]);
      const [filteredProducts, setFilteredProducts] = useState([]);
      const [priceRangeFilter, setPriceRangeFilter] = useState([0, 1000]);


    useEffect(() => {
        const getProducts = async () => {
            const data = await fetchProducts();
            setProducts(data);    // Set the fetched products into state
            setFilteredProducts(data);
        };

        getProducts();
    }, []);

    
    useEffect(() => {
        const fetchReviews = async () => {
            const response = await fetch('http://localhost:5000/review/all');
            const data = await response.json();
            setReviews(data);
            
        };
        fetchReviews();
    }, []);
    
    const handlePriceChange = (newRange) =>
    {
        setPriceRangeFilter(newRange);
        const filtered = products.filter((product)=> product.netPrice >= newRange[0] && product.netPrice <= newRange[1]);
        setFilteredProducts(filtered)
    }
    return (
        <>
            <Header />
            <section className="product_Listing_Page">
                <div className="container ">
                    <div className="productListing  me-5">
                        <Sidebar priceRange={priceRangeFilter} onPriceChange={handlePriceChange}/>
                    </div>
                    <div className="content_right ">
                        <HomeBanner />

                        <div className="productDiv w-100 ">
                            {filteredProducts.map((product, index) => (
                                <div className="itemBox" key={index}>
                                    <ProductItem product={product} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                
                <Review setReviews={setReviews} />
                <ReviewList key={reviews.length}  reviews={reviews}/> {/*key = {reviews.length} causes to rerender the component forcefully*/}
               
                
            </section>
            <Footer />
        </>
    )
}
export default Listing;