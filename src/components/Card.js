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
                        <img src={data.image} alt="product" width={100} />
                </div>


                <div className={styles.informationBox}>

                        <h4>{shortName(data.title)} </h4>
                        <p className={styles.description}>{data.description}</p>
                        <div > <Link to={`${data.id}`} className={styles.seeDetails}>see more... </Link></div>

                        <div  className={styles.buttons} >
                                <div>
                                        {numberInCart > 1  && <button onClick={()=> dispatch({type:"decrease",payload: data})} className={styles.minus}> <img src={minusIcon} alt="minus"/>  </button>}

                                        {numberInCart == 1  && <button onClick={()=> dispatch({type:"removeFromCart",payload: data})} className={styles.trash}> <img src={trashIcon} alt="trash"/> </button> }
                                        {numberInCart !==0  &&   <div className={styles.number}>{numberInCart}</div>}
                                        {numberInCart == 0 ?  
                                                <button onClick={()=> dispatch({type:"addToCart",payload: data})} className={styles.add}> <img src={addIcon} alt="add"/> </button>:
                                                <button onClick={()=> dispatch({type:"increase",payload: data})} className={styles.plus}> <img src={plussIcon} alt="pluss"/>  </button>
                                        }


                                </div>

                                <h4 className={styles.price}>{data.price} $</h4>

                        </div>

                </div>

        </div>
    );
};

export default Card;