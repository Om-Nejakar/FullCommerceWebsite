import axios from "axios";

async function FetchCategory()
{
    try {
        const response = await axios.get('https://fakestoreapi.com/products');
        const categoryArray = [...new Set(response.data.map(item => item.category))];
        const fetchedCategory = categoryArray
        return fetchedCategory;
    }
    catch(err) {
        console.log(err);
        return [];
    }

}

export default FetchCategory;
