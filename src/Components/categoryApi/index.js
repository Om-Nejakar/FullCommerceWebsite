import axios from "axios";

async function FetchCategory()
{
    try {
        const response = await axios.get('https://dummyjson.com/products/category-list');
    
        const fetchedCategory = response.data;
        // console.log(fetchedCategory);
        return fetchedCategory;
    }
    catch(err) {
        console.log(err);
        return [];
    }

}

export default FetchCategory;
