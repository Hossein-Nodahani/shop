import React, { useReducer } from 'react';


export const CartContext = React.createContext();


const initialState = {
    selectedProducts : [] ,
    
}


const reducer = (state,{type , payload}) => {
    
    switch (type) {

        case "addToCart":
                const selectedProduct = {...payload , numberInCart : 1}
                state = {...state , selectedProducts : [...state.selectedProducts , selectedProduct ] }
                console.log(state);
                return state ;

        case "removeFromCart":
                const newSelectedProducts = state.selectedProducts.filter( item => item.id != payload.id);
                state = {...state , selectedProducts : newSelectedProducts};
                console.log(state);
                return state ;

        case "increase":
                const increasedProduct = state.selectedProducts.find(item => item.id == payload.id);
                increasedProduct.numberInCart++;
                state = {...state };
                console.log(state);
                return state ;

        case "decrease":
                const decreasedProduct = state.selectedProducts.find(item => item.id == payload.id);
                decreasedProduct.numberInCart--;
                state = {...state };
                console.log(state);
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