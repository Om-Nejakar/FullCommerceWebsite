import Sidebar from "../sideBar";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Review from "../Review";
import HomeBanner from "../homeBanner";
import ProductItem from "../productItems";
import fetchProducts from "../fetchProducts";
import { useState, useEffect } from "react";
import ReviewList from "../reviewList";

function Listing() {

    const [products, setProducts] = useState([]);
    const [reviews, setReviews] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    const [priceRangeFilter, setPriceRangeFilter] = useState([0, 1000]);
    const [selectedCategories, setSelectedCategories] = useState([]);

    // Fetch products
    useEffect(() => {
        const getProducts = async () => {
            const data = await fetchProducts();
            setProducts(data);
            setFilteredProducts(data);
        };
        getProducts();
    }, []);

    // Fetch reviews
    useEffect(() => {
        const fetchReviews = async () => {
            const response = await fetch('http://localhost:5000/review/all');
            const data = await response.json();
            setReviews(data);
        };
        fetchReviews();
    }, []);

    // FILTER LOGIC
    useEffect(() => {
        let filtered = products;

        // Price filter
        filtered = filtered.filter(
            (p) =>
                p.netPrice >= priceRangeFilter[0] &&
                p.netPrice <= priceRangeFilter[1]
        );

        // Category filter
        if (selectedCategories.length > 0) {
            filtered = filtered.filter((p) =>
                selectedCategories.includes(p.category)
            );
        }

        setFilteredProducts(filtered);

    }, [priceRangeFilter, selectedCategories, products]);

    return (
        <>
            <Header />
            <section className="product_Listing_Page">
                <div className="container">
                    
                    <div className="productListing me-5">
                        <Sidebar
                            priceRange={priceRangeFilter}
                            onPriceChange={setPriceRangeFilter}
                            onCategoryChange={setSelectedCategories}
                        />
                    </div>

                    <div className="content_right">
                        <HomeBanner />

                        <div className="productDiv w-100">
                            {filteredProducts.map((product, index) => (
                                <div className="itemBox" key={index}>
                                    <ProductItem product={product} />
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

                <Review setReviews={setReviews} />
                <ReviewList key={reviews.length} reviews={reviews} />

            </section>
            <Footer />
        </>
    );
}

export default Listing;