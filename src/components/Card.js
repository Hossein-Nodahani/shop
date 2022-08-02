import React , {useContext} from 'react';
import { Link } from 'react-router-dom';

import styles from '../styles/card.module.css'

// context
import { CartContext } from '../contexts/CartContextProvider';



const Card = ({data}) => {
    
    const {state , dispatch} = useContext(CartContext);

    const numberInCart = state.selectedProducts.find(item => item.id == data.id) ? 
                                    state.selectedProducts.find(item => item.id == data.id).numberInCart :
                                    0 ;

    return (
        <div className={styles.card}>


                {numberInCart !==0  &&   <h4> number : {numberInCart} </h4>}

                <img src={data.image} alt="product" width={100} />

                <h4> name : {data.title} </h4>
                <h4> price : {data.price} $</h4>


                {numberInCart == 0 ?  
                        <button onClick={()=> dispatch({type:"addToCart",payload: data})}> add </button>:
                        <button onClick={()=> dispatch({type:"increase",payload: data})}> + </button>
                }

                {numberInCart > 1  && <button onClick={()=> dispatch({type:"decrease",payload: data})}> - </button>}

                {numberInCart == 1  && <button onClick={()=> dispatch({type:"removeFromCart",payload: data})}> remove </button> }


                <Link to={`${data.id}`}>مشاهده جزئیات</Link>

        </div>
    );
};

export default Card;