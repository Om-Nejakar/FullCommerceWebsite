import HomeBannerSection from "../../Components/homeBanner";
import Header from "../../Components/Header";
import HomeProducts from "../../Components/homeProducts";
import NewsSection from "../../Components/newsSection";
import Footer from "../../Components/Footer";


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