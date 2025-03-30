import {createContext ,useState} from "react";

export const Cart = createContext();  //cart is a instance now which has access to the ele of the createcontext function


function Context({children})
{
    const [cart , setCart] = useState([]); //sending this component to all the compo present in the application is done by sending them as prop in provider tag 

    return (
        <>
            <Cart.Provider value={{cart , setCart}}>
                {children}
            </Cart.Provider>
        </>

    )
}

export default Context;