import React , { useContext } from 'react';


// context
import { CartContext } from '../contexts/CartContextProvider';


const Cart = () => {

    const {state , dispatch} = useContext(CartContext)

    return (
        <div>
                <div>
                    <h4>total nember : {state.totalNumberOfProducts} </h4>
                    <h4>total price : {state.totalPriceOfProducts} </h4>
                    <button onClick={() => dispatch({type:"clearCart"})}>clear cart</button>
                </div>

                <div>
                    {state.selectedProducts.map(item => <div key={item.id}>
                                                            <h4> name : {item.title} </h4>
                                                            <h4> price : {item.price} $</h4>
                                                            <h4> number : {item.numberInCart} </h4>
                                                            <h4> total price : {item.totalPrice} $</h4>
                                                            <img src={item.image} alt="product" width={100} />
                                                         </div>
                    )}
                </div>

        </div>
    );
};

export default Cart;