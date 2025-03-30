import Button from "@mui/material/Button";
import { IoMdSearch } from "react-icons/io";
import {useState , useEffect} from "react";

const Search = ({ list, onFilter, width, margin, placeholder, className,marginvalue ,buttonValue,type }) =>
{
    const [searchTerm, setSearchTerm] = useState("");
    
    function handleInputChange(e) {
        const keyword = e.target.value;
        setSearchTerm(keyword);

        if(type === "search" && list && onFilter)
        {
            const filteredList = list.filter((item) =>
                item.toLowerCase().includes(keyword.toLowerCase())
            );
            onFilter(filteredList); // Pass filtered results to parent
        }
        
    };
    const handleSubmit = (e) =>
    {
        e.preventDefault();
        if(type==="subscribe")
        {
            console.log("collected Email for Subscription: ",searchTerm);

            setSearchTerm("");
        }
    }

    return(
        <>
            <form onSubmit={type=="subscribe"?handleSubmit : (e)=> e.preventDefault()} 
                  className={`headerSearch ml-${marginvalue} mr-3 w-${width} m-${margin} mb-2`}>
                 
                  <input 
                        type={type==="subscribe"?"email":"text"}
                        placeholder={placeholder} 
                        value={searchTerm} 
                        onChange={handleInputChange}
                        required={type==="subscribe"} 

                    />

                  <Button className={className}>
                    {buttonValue ? "Subscribe" : <IoMdSearch />}
                  </Button>
                  
            </form>
        </>
    );

}
Search.defaultProps = {
    width: 100,
    margin: 0,
    placeholder : "Search Products...",
};

export default Search;