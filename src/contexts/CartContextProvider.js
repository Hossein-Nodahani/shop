import React, { useReducer } from 'react';
import { notify } from '../services/notify';


export const CartContext = React.createContext();


const initialState = {
    selectedProducts : [] ,
    totalNumberOfProducts : 0,
    totalPriceOfProducts : 0 ,
    isCheckOut : false 
}


const reducer = (state,{type , payload}) => {

    let thisProductInCart ;

    if( type != "clearCart" && type != "checkOut"){
         thisProductInCart = state.selectedProducts.find(item => item.id == payload.id);
    }

    
    switch (type) {

        case "addToCart":
                const addedProduct = {...payload , numberInCart : 1 , totalPrice : payload.price}
                state.totalNumberOfProducts++;
                state.totalPriceOfProducts += payload.price ;
                state = {...state , selectedProducts : [...state.selectedProducts , addedProduct ] }
                return state ;

        case "removeFromCart":
                const newSelectedProducts = state.selectedProducts.filter( item => item != thisProductInCart );
                state.totalNumberOfProducts -= thisProductInCart.numberInCart;
                state.totalPriceOfProducts -= thisProductInCart.totalPrice ;
                state = {...state , selectedProducts : newSelectedProducts};
                return state ;

        case "increase":
                thisProductInCart.numberInCart++;
                thisProductInCart.totalPrice += payload.price ;
                state.totalNumberOfProducts++;
                state.totalPriceOfProducts += payload.price ;
                state = {...state };
                return state ;

        case "decrease":
                thisProductInCart.numberInCart--;
                thisProductInCart.totalPrice -= payload.price ;
                state.totalNumberOfProducts--;
                state.totalPriceOfProducts -= payload.price ;
                state = {...state };
                return state ; 

        case "clearCart":
            if(state.selectedProducts.length != 0){
                state = { selectedProducts : [] ,
                    totalNumberOfProducts : 0,
                    totalPriceOfProducts : 0 ,
                    isCheckOut : false}   ;
                notify("The shopping cart has been successfully emptied" , "success");          
            }else{
                notify("There is nothing in the shopping cart" , "error");          
            }
            return state ;   
                
        case "checkOut":
            if(state.selectedProducts.length != 0){
                state = { selectedProducts : [] ,
                        totalNumberOfProducts : 0,
                        totalPriceOfProducts : 0 ,
                        isCheckOut : true };
                notify("Checkout was done successfully" , "success");          
            }else{
                notify("There is nothing in the shopping cart" , "error");          
            }

            return state ; 
    }

}



function CartContextProvider({children}) {

    const [state , dispatch ] = useReducer(reducer ,initialState);

    return (
        <CartContext.Provider value={{state,dispatch}}>
            {children}
        </CartContext.Provider>
    );
}





export default CartContextProvider;