import Button from "@mui/material/Button";
import { Link } from "react-router-dom";  // Fixed import
import { IoMenu } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa6";
import { CiHome } from "react-icons/ci";
import { useState, useEffect } from "react";
import { FaAngleRight } from "react-icons/fa";

const Navigation = () => {
    const [openVal, setOpenVal] = useState(false);
    const [categories, setCategories] = useState({});  // {categoryName: [brands]}

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch("https://dummyjson.com/products");
            const data = await response.json();

            // Process products to group brands under each category
            const categoryMap = {};

            data.products.forEach(product => {
                if (!categoryMap[product.category]) {
                    categoryMap[product.category] = new Set(); // Use Set to avoid duplicate brands
                }
                categoryMap[product.category].add(product.brand);
            });

            // Convert sets to arrays for rendering
            const finalCategories = {};
            for (const category in categoryMap) {
                finalCategories[category] = Array.from(categoryMap[category]);
            }

            setCategories(finalCategories);
        };

        fetchProducts();
    }, []);

    return (
        <nav>
            <div className="container">
                <div className="row">
                    <div className="col-sm-2 navPart1">
                        <div className="catWrapper">
                            <Button className="allCatTab" onClick={() => setOpenVal(!openVal)}>
                                <span className="icon1 me-2"><IoMenu /></span>
                                <span className="text">ALL CATEGORIES</span>
                                <span className="icon2 ms-2"><FaAngleDown /></span>
                            </Button>
                            <div className={`sidebarNav ${openVal ? 'open' : ''}`}>
                                <ul>
                                    {Object.keys(categories).map((category, index) => (
                                        <li key={index}>
                                            <Button>{category} <FaAngleRight /></Button>
                                            <div className="submenu">
                                                {categories[category].map((brand, brandIndex) => (
                                                    <li key={brandIndex}>
                                                        <Button>{brand}</Button>
                                                    </li>
                                                ))}
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Main Navigation Links */}
                    <div className="col-sm-10 navPart2 w-95 ms-auto">
                        <ul className="list list-inline">
                            <li className="list-inline-item">
                                <Link to="/">
                                    <Button>HOME</Button>
                                </Link>
                            </li>
                            <li className="list-inline-item"><Link to="/categories"><Button>CATEGORIES</Button></Link></li>
                            <li className="list-inline-item"><Link to="/"><Button>BLOG</Button></Link></li>
                            <li className="list-inline-item"><Link to="/contact"><Button>CONTACT</Button></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navigation;
