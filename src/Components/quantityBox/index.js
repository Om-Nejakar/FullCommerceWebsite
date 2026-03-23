import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { useState } from 'react';
import Button from "@mui/material/Button";

function QuantityBox({quantity, setQuantity})
{

    function increment()
    {
        console.log(quantity);
        setQuantity(quantity+1);
    }
    function decrement()
    {
        if(quantity>0)
        {
            setQuantity(quantity-1);
        }
        else {
            setQuantity(0);
            
        }
    }
    return (
        <>
            <div className='quantityDrop d-flex align-items-center'>
                <Button
                    sx={{
                        width: 40,
                        height: 40,
                        borderRadius: '50%',
                        minWidth: 'unset',  // Prevents automatic stretching in MUI
                    }}

                    onClick={decrement}><FaMinus />
                    
                </Button>
                <input 
                    type='text' 
                    value={quantity} 
                    onChange={(e) => setQuantity(Number(e.target.value))} 
                />
                <Button
                sx={{
                        width: 40,
                        height: 40,
                        borderRadius: '50%',
                        minWidth: 'unset',  // Prevents automatic stretching in MUI
                    }}
                    onClick={increment}><FaPlus /></Button>
            </div>
        </>
    )
}

export default QuantityBox;