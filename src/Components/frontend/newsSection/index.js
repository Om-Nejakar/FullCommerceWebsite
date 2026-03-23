import SearchBar from "../Header/Search";


function NewsSection()
{
    return (
        <>
            <div className="newsSectionLetter mt-3 mb-3 w-100">
                <div className="containerbox ">
                    <div className="row">
                        <div className="col-md-6">
                            <p className="text-white mb-0 mt-5">$20 discount for your first order</p>
                            <h3 className="text-white">Join our newsletter and get...</h3>
                            
                            <p className="text-white mb-0 opacity-50"> Join our email subscription now to get updates</p>
                            <p className="text-white opacity-50">on promotions and coupons.</p>
                            <SearchBar marginvalue={0} placeholder={"Your email address"} buttonValue={1}/>
                        </div>
                        <div className="col-md-6">
                            <img src ="https://klbtheme.com/bacola/wp-content/uploads/2021/04/coupon.png" alt="image" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewsSection;