import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import FetchApi from "../categoryApi";
import { useState, useEffect } from "react";
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Banner1 from "../../../assets/images/banner1.jpg";
import Banner2 from "../../../assets/images/banner2.png";

function SideBar({ priceRange, onPriceChange, onCategoryChange }) {

    const [categories, setCategories] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState([]);

    // Fetch categories
    useEffect(() => {
        const getProducts = async () => {
            const data = await FetchApi();
            setCategories(data);
        };
        getProducts();
    }, []);

    // Send selected categories to parent
    useEffect(() => {
        onCategoryChange(selectedCategories);
    }, [selectedCategories]);

    const handleSliderChange = (e, newValue) => {
        onPriceChange(newValue);
    };

    const handleCategoryChange = (category) => {
        setSelectedCategories((prev) => {
            if (prev.includes(category)) {
                return prev.filter((c) => c !== category);
            } else {
                return [...prev, category];
            }
        });
    };

    return (
        <>
            <div className="sidebar">

                {/* CATEGORY */}
                <div className="filterBox">
                    <h6>PRODUCT CATEGORY</h6>

                    {categories.map((cat, index) => (
                        <div key={index}>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={selectedCategories.includes(cat)}
                                        onChange={() => handleCategoryChange(cat)}
                                    />
                                }
                                label={cat}
                            />
                        </div>
                    ))}
                </div>

                {/* PRICE */}
                <div className='range'>
                    <h6 className='d-block w-100'>Filter by price</h6>
                    <Box sx={{ width: "100%", pr: "10px" }}>
                        <Slider
                            value={priceRange}
                            onChange={handleSliderChange}
                            valueLabelDisplay="auto"
                            step={10}
                            marks
                            min={10}
                            max={110}
                        />
                    </Box>
                </div>

                {/* STATUS */}
                <div className='Status'>
                    <h6>Product Status</h6>
                    <FormControlLabel control={<Checkbox />} label="In Stock" />
                    <FormControlLabel control={<Checkbox />} label="On Sale" />
                </div>

                {/* BANNERS */}
                <div className="banner">
                    <img src={Banner1} className="cursor w-100 mt-5" />
                </div>

                <div className="banner mt-3">
                    <img src={Banner2} className="cursor w-100" />
                </div>

            </div>
        </>
    );
}

export default SideBar;