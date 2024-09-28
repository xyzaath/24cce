import { createContext, useEffect, useState } from "react";
import { assets } from "../assets/assets";

export const storeContext = createContext(null)

function storeContextProvider({children}){
    const [medData,setmedData] = useState([])
    const[cartItems,setcartItems] = useState({})

    const addtocart = (id)=>{
        if(!cartItems[id]){
            setcartItems((prev)=>({...prev,[id]:1}))
        }else{
            setcartItems((prev)=>({...prev,[id]:prev[id]+1}))
        }
    }

    const removecart = (id)=>{
        setcartItems((prev)=>({...prev,[id]:prev[id]-1}))
    }

    const getTotalAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemId = Number(item);
                let itemInfo = assets.medicineData.find((product) => product.id === itemId);
                if (itemInfo) {
                    totalAmount += itemInfo.price * cartItems[item];
                } else {
                    console.warn(`Item with ID ${itemId} not found.`);
                }
            }
        }
        return totalAmount;
    };
    

    const contextValue = {
        cartItems,
        setcartItems,
        addtocart,
        removecart,
        getTotalAmount
    }
    useEffect(() => {
        return () => {
            setmedData(assets.medicineData)
        };
    }, []); 
    return(
        <storeContext.Provider value={contextValue}>
            {children}
        </storeContext.Provider>
    )
}

export default storeContextProvider