import React from "react";
import Slider from "react-slick";

function homeBanner() 
{
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows : true,
        autoplay : true,
      };

    return(
        <>
        <div className="homeBannerSection">
            <Slider {...settings}>
                <div className="item">
                    <img src="https://cmsimages.shoppersstop.com/001_web_7483be4eb9/001_web_7483be4eb9.png" className="w-100" />
                </div>
                <div className="item">
                    <img src="https://cmsimages.shoppersstop.com/static_web_bobbi_e7676de14f/static_web_bobbi_e7676de14f.png" className="w-100" />
                </div>
                <div className="item">
                    <img src="https://cmsimages.shoppersstop.com/Entry_Banner_web_f6137a6ed7/Entry_Banner_web_f6137a6ed7.gif" className="w-100" />
                </div>
            </Slider>
        </div>
            
        </>
    )
}

export default homeBanner;
