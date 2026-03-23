import HomeBannerSection from "../../Components/frontend/homeBanner";
import Header from "../../Components/frontend/Header";
import HomeProducts from "../../Components/frontend/homeProducts";
import NewsSection from "../../Components/frontend/newsSection";
import Footer from "../../Components/frontend/Footer";


function Home()
    {
        return (
            <>
                <Header />
                <HomeBannerSection />
                <HomeProducts />
                <NewsSection />
                <Footer />
               
            </>
        )
    }
    
export default Home;