import React , {useContext} from 'react';
import { Link } from 'react-router-dom';

import styles from '../styles/card.module.css'

// context
import { CartContext } from '../contexts/CartContextProvider';

// functions
import { shortName } from '../services/shortName';

// icons
import trashIcon from '../icons/trash-solid.svg'
import addIcon from '../icons/cart-plus-solid.svg'
import plussIcon from '../icons/plus-solid.svg'
import minusIcon from '../icons/minus-solid.svg'






const Card = ({data}) => {
    
    const {state , dispatch} = useContext(CartContext);

    const numberInCart = state.selectedProducts.find(item => item.id == data.id) ? 
                                    state.selectedProducts.find(item => item.id == data.id).numberInCart :
                                    0 ;

    return (
        <div className={styles.card}>

                <div className={styles.imageBox}>
                        {numberInCart !==0  &&   <span className={styles.number}>{numberInCart}</span>}
                        <img src={data.image} alt="product" width={100} />
                </div>


                <div className={styles.informationBox}>

                        <h4>{shortName(data.title)} </h4>
                        <h4> price : {data.price} $</h4>

                        <div className={styles.buttons}>
                                {numberInCart == 0 ?  
                                        <button onClick={()=> dispatch({type:"addToCart",payload: data})} id={styles.add}> <img src={addIcon} alt="add"/> </button>:
                                        <button onClick={()=> dispatch({type:"increase",payload: data})}> <img src={plussIcon} alt="pluss"/>  </button>
                                }

                                {numberInCart > 1  && <button onClick={()=> dispatch({type:"decrease",payload: data})}> <img src={minusIcon} alt="minus"/>  </button>}

                                {numberInCart == 1  && <button onClick={()=> dispatch({type:"removeFromCart",payload: data})}> <img src={trashIcon} alt="trash"/> </button> }
                        </div>

                        <div>
                                  <Link to={`${data.id}`}>see details </Link>
                        </div>
                </div>

        </div>
    );
};

export default Card;