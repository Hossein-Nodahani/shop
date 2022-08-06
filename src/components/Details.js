import React , {useContext} from 'react';
import { useParams } from 'react-router-dom';

// Context
import { ProductsContext } from '../contexts/ProductsContextProvider' ;
import { CartContext } from '../contexts/CartContextProvider';


// styles
import styles from '../styles/details.module.css'

// icons
import trashIcon from '../icons/trash-solid.svg'
import addIcon from '../icons/cart-plus-solid.svg'
import plussIcon from '../icons/plus-solid.svg'
import minusIcon from '../icons/minus-solid.svg'


const Details = () => {

    
    // get id from params
    const params = useParams() ; 
    const { id } = params ;
    
    // get context
    const products = useContext(ProductsContext);
    
    // get product data from context
    const data = products[id-1];
    const {title, category , description , image , price } = data;
    
    const {state , dispatch} = useContext(CartContext);

    const numberInCart = state.selectedProducts.find(item => item.id == id) ? 
                        state.selectedProducts.find(item => item.id == id).numberInCart :
                        0 ;

    return (
        <div className={styles.details}>
            <div className={styles.imageBox}>
                    <img src={image} />
            </div>
            <div className={styles.informationBox}>
                    <h3> {title}</h3>
                    <p> <strong>Category : </strong> {category}</p>
                    <p> <strong>Description : </strong> {description}</p>
                    <h4>price : {data.price} $</h4>
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

                                <h4 className={styles.price}>{(data.price*numberInCart).toFixed(2)} $</h4>

                        </div>
            </div>
        </div>
    );
};

export default Details;