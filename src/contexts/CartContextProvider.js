import React, { useReducer } from 'react';

export const CartContext = React.createContext();


const initialState = {
    selectedProducts : [] ,
    totalNumberOfProducts : 0,
    totalPriceOfProducts : 0

}


const reducer = (state,{type , payload}) => {

    let thisProductInCart ;

    if( type != "clearCart"){
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
                state = {...state , selectedProducts : [] , totalNumberOfProducts : 0, totalPriceOfProducts : 0};
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