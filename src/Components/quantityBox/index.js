import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { useState } from 'react';
import Button from "@mui/material/Button";

function QuantityBox()
{
    const [value , setValue] = useState(0);

    function increment()
    {
        setValue(value+1);
    }
    function decrement()
    {
        if(value>0)
        {
            setValue(value-1)
        }
        else {
            setValue(0);
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

                    onClick={decrement}><FaMinus /></Button>
                <input 
                    type='text' 
                    value={value} 
                    onChange={(e) => setValue(Number(e.target.value))} 
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