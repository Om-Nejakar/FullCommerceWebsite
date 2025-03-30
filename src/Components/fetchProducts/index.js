
import axios from 'axios';


    async function fetchProducts()
    {
        try {
            const response = await axios.get("https://fakestoreapi.com/products");
            // console.log(response);
            const fetchedProducts = response.data.map(item =>({
                name : item.title,
                rating : item.rating.rate,
                image : item.image,
                netPrice : item.price,
                oldPrice : 100,
                description : item.description,
            }));
            // console.log(fetchedProducts);
            return fetchedProducts
        }catch(error)
        {
            console.log("Error in fetching Products ",error);
            return [];
        }
    }

export default fetchProducts;