import React , { useContext } from 'react';
import { Link } from 'react-router-dom';

// context
import { CartContext } from '../contexts/CartContextProvider';


// styles
import styles from '../styles/cart.module.css'

const Cart = () => {

    const {state , dispatch} = useContext(CartContext)

    return (
        <div className={styles.cart}>
                <div className={styles.receipt}>
                    <h4>total nember : {state.totalNumberOfProducts} </h4>
                    <h4>total price : {state.totalPriceOfProducts} $</h4>
                    <button onClick={() => dispatch({type:"checkOut"})} className={styles.checkOut}>checkOut</button>
                    <button onClick={() => dispatch({type:"clearCart"})} className={styles.clear}>clear cart</button>
                </div>

                <div className={styles.cards}>
                    {state.selectedProducts.map(item => <div key={item.id} className={styles.card}>
                                                                <Link to={`/products/${item.id}`} className={styles.imageBox}>
                                                                        <img src={item.image} alt="product" />
                                                                </Link>
                                                                <div className={styles.description}>
                                                                    <h4> name : <Link to={`/products/${item.id}`} className={styles.title}>{item.title}</Link> </h4>
                                                                    <h4> price : {item.price} $</h4>
                                                                    <h4> number : {item.numberInCart} </h4>
                                                                    <h4> total price : {item.totalPrice} $</h4>
                                                                </div>
                                                         </div>
                    )}
                </div>

        </div>
    );
};

export default Cart;