import { GiMilkCarton } from "react-icons/gi";
import { TbTruckDelivery } from "react-icons/tb";
import { RiDiscountPercentFill } from "react-icons/ri";
import { CiDollar } from "react-icons/ci";
import { Link } from "react-router";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

function Footer() 
{
    return(
        <>
                <footer>
                    <div className="container">
                        <div className="topinfo row">
                            <div className="col d-flex align-items-center justify-content-center  ">
                                <span><GiMilkCarton /></span>
                                <span className="ms-2">Everyday fresh products</span>
                            </div>
                            <div className="col d-flex align-items-center justify-content-center ">
                                <span ><TbTruckDelivery /></span>
                                <span className="ms-2">Free delivery for order over $70</span>
                            </div>
                            <div className="col d-flex align-items-center justify-content-center ">
                                <span><RiDiscountPercentFill /></span>
                                <span className="ms-2">Daily Mega Discounts</span>
                            </div>
                            <div className="col d-flex align-items-center justify-content-center border-0">
                                <span><CiDollar /></span>
                                <span className="ms-2">Best price on the market</span>
                            </div>
                        </div>


                        <div className="row linkWrap">
                        <div className="col mt-5">
                            <h5>FRUIT & VEGETABLES</h5>
                            <ul>
                                <li><Link to="#">Fresh Vegetables</Link></li>
                                <li><Link to="#">Herbs & Seasonings</Link></li>
                                <li><Link to="#">Fresh Fruits</Link></li>
                                <li><Link to="#">Cuts & Sprouts</Link></li>
                                <li><Link to="#">Exotic Fruits & Veggies</Link></li>
                            </ul>
                        </div>

                        {/* Column 2 - Breads & Bakery */}
                        <div className="col mt-5">
                            <h5>BREADS & BAKERY</h5>
                            <ul>
                                <li><Link to="#">Breads & Buns</Link></li>
                                <li><Link to="#">Cookies & Biscuits</Link></li>
                                <li><Link to="#">Cakes & Pastries</Link></li>
                                <li><Link to="#">Bakery Snacks</Link></li>
                                <li><Link to="#">Frozen Breads</Link></li>
                            </ul>
                        </div>

                        {/* Column 3 - Breakfast & Dairy */}
                        <div className="col mt-5">
                            <h5>BREAKFAST & DAIRY</h5>
                            <ul>
                                <li><Link to="#">Milk & Flavoured Milk</Link></li>
                                <li><Link to="#">Butter & Margarine</Link></li>
                                <li><Link to="#">Eggs & Substitutes</Link></li>
                                <li><Link to="#">Cheese</Link></li>
                                <li><Link to="#">Yogurt & Curd</Link></li>
                            </ul>
                        </div>

                        {/* Column 4 - Meat & Seafood */}
                        <div className="col mt-5">
                            <h5>MEAT & SEAFOOD</h5>
                            <ul>
                                <li><Link to="#">Fresh Meat</Link></li>
                                <li><Link to="#">Frozen Meat</Link></li>
                                <li><Link to="#">Marinated Meat</Link></li>
                                <li><Link to="#">Seafood</Link></li>
                                <li><Link to="#">Cold Cuts</Link></li>
                            </ul>
                        </div>

                        {/* Column 5 - Beverages */}
                        <div className="col mt-5">
                            <h5>BEVERAGES</h5>
                            <ul>
                                <li><Link to="#">Tea & Coffee</Link></li>
                                <li><Link to="#">Juices & Drinks</Link></li>
                                <li><Link to="#">Soft Drinks</Link></li>
                                <li><Link to="#">Energy Drinks</Link></li>
                                <li><Link to="#">Health Drinks</Link></li>
                            </ul>
                        </div>
                        </div>
                       
                       <div className="copyRight mt-3 pt-3 pb-3 d-flex">
                        <p className="mb-0 ">Copyright 2025 © Bacola WordPress Theme. All rights reserved. Powered by KlbTheme.</p>
                        <ul className="list list-inline ms-auto mb-0">
                            <li className="list-inline-item">
                                <Link to="#"><FaFacebook /> </Link>
                            </li>
                            <li className="list-inline-item">
                                <Link to="#"><FaSquareInstagram /> </Link>
                            </li>
                            <li className="list-inline-item">
                                <Link to="#"><FaXTwitter /></Link>
                            </li>
                        </ul>
                       </div>
                    </div>
                </footer>
        </>
    )
}

export default Footer;
